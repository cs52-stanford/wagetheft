import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RightsNavigator from "./navigation/RightsNavigator";
import { Host } from "react-native-portalize";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });
};

// create store with applyMiddleware as a second argument

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
