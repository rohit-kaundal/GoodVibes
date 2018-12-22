import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import SettingsScreen from "../screens/SettingsScreen";
import ExploreScreen from "../screens/ExploreScreen";

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => {
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-explore${focused ? "" : "-outline"}`
          : "md-explore"
      }
    />;
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  ExploreStack,
  SettingsStack
});
