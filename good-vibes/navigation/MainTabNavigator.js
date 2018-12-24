import React from "react";
import { Platform, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Icon from "../components/SvgIcon";

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
    if (focused) {
      return (
        <Icon
          name="SearchIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#00c853"
        />
      );
    } else {
      return (
        <Icon
          name="SearchIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
        />
      );
    }
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
    if (focused) {
      return (
        <Icon
          name="MyVibesIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#00c853"
        />
      );
    } else {
      return (
        <Icon
          name="MyVibesIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
        />
      );
    }
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
  header: null,
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <Icon
          name="ExploreIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#00c853"
        />
      );
    } else {
      return (
        <Icon
          name="ExploreIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
        />
      );
    }
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
    headerMode: "none",
    activeColor: "#00c853",
    inactiveColor: "#666"
  }
);
