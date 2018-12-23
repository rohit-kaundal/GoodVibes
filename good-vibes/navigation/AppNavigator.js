import React from "react";
import { createSwitchNavigator } from "react-navigation";

//Import our bottom tab navigator
import MainTabNavigator from "./MainTabNavigator";

// Create switch navigator with our main bottom tag navigator and export it
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator
});
