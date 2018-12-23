import React from "react";
import { Platform, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

/**
 * Import our screens
 */
import ExploreScreen from "../screens/ExploreScreen";
import MyVibesScreen from "../screens/MyVibesScreen";
import SearchScreen from "../screens/SearchScreen";

/**
 * setup Stack navigatos and thier navigation options
 */

// Search screen stack navigator
const SearchStack = createStackNavigator({
  Search: SearchScreen
});

// Search screen stack navigation options
SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => {
    return (
      <Image
        source={require("../assets/images/1x/nav_explore.png")}
        style={{ height: 24, width: 24, resizeMode: "contain" }}
      />
    );
  },
  tabBarOptions: {
    activeTintColor: "#00c853",
    inactiveTintColor: "#666"
  }
};

// MyVibe screen stack navigator
const MyVibeStack = createStackNavigator({
  MyVibes: MyVibesScreen
});

// MyvVibe screen stack navigation options
MyVibeStack.navigationOptions = {
  tabBarLabel: "My Vibes",
  tabBarIcon: ({ focused }) => {
    return (
      <Image
        source={require("../assets/images/1x/top_profile.png")}
        style={{ height: 24, width: 24, resizeMode: "contain" }}
      />
    );
  },
  tabBarOptions: {
    activeTintColor: "#00c853",
    inactiveTintColor: "#666"
  }
};

// Explore screen stack navigator
const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
});

// Explore screen stack navigation options
ExploreStack.navigationOptions = {
  header: { visible: false },
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => {
    return (
      <Image
        source={require("../assets/images/1x/nav_products.png")}
        style={{ height: 24, width: 24, resizeMode: "contain" }}
      />
    );
  },
  tabBarOptions: {
    activeTintColor: "#00c853",
    inactiveTintColor: "#666"
  }
};

// Export BottomTabNavigator component with our 3 stack navigators
export default createBottomTabNavigator(
  {
    ExploreStack,
    SearchStack,
    MyVibeStack
  },
  {
    activeColor: "#00c853",
    inactiveColor: "#666"
  }
);
