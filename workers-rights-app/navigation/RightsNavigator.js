import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import RightsScreen from "../screens/RightsScreen";
import SubRightsScreen from "../screens/SubRightsScreen";
import RightsDetailsScreen from "../screens/RightsDetailsScreen";
import Colors from "../constants/Colors";
import SettingsScreen from "../screens/SettingsScreen"

/*
 *
 * Creates the rights stack navigation flow. Designates
 * the screens on the rights navigation stack as well as
 * the styling for the headers of the stack.
 *
 */
const RightsNavigator = createStackNavigator(
  {
    Rights: {
      screen: RightsScreen,
    },
    SubRights: {
      screen: SubRightsScreen,
    },
    RightsDetails: {
      screen: RightsDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
      },
      headerTintColor: Colors.darkOrange,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

/*
 *
 * Creates the settings stack navigation flow. Designates
 * the screens on the settings navigation stack as well as
 * the styling for the headers of the stack.
 *
 */
const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
      },
      headerTintColor: Colors.darkOrange,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

/*
 *
 * Creates the tab navigator for the app. Designates the intial starting
 * screen as the Rights screen and configures the look of the tab bar.
 *
 */
const RightsTabNavigator = createBottomTabNavigator(
  {
    Rights: {
      screen: RightsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-book" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Settings: {
      screen: SettingsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-settings" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  
  {
    initialRouteName: "Rights",
    tabBarOptions: {
      activeTintColor: Colors.darkOrange,
    },
  }
);

export default createAppContainer(RightsTabNavigator);
