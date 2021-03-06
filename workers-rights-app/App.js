import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { Host } from "react-native-portalize";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NativeModules, Platform } from "react-native"; // for language
import Amplify, { Analytics } from "aws-amplify";
import * as Sentry from "sentry-expo";
import RightsNavigator from "./navigation/RightsNavigator";
import ImportedData from "./data/FetchRightsData"; // eslint-disable-line
import config from "./aws-exports";
import DSN from "./constants/SentryKeys";

Amplify.configure(config);
Sentry.init({
  dsn: DSN,
  enableInExpoDevelopment: true,
  debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

/*
 *
 * Provides native primitives to represent screens instead of
 * plain <View> components in order to better take advantage of
 * operating system behavior and optimizations around screens
 *
 */

enableScreens();

/*
 *
 * Asynchronous function to import data into rights from
 * Firebase and load all fonts. The function waits until the loading
 * process is complete by waiting until all promises are resolved.
 *
 */

async function loadAllData() {
  Analytics.record("User opened application");
  await Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });

  // Get device language
  const deviceLanguage =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  await ImportedData.importAllData(deviceLanguage);
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadAllData}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Host>
      <RightsNavigator />
    </Host>
  );
}
