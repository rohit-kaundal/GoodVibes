import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import PopularStrains from "../components/PopularStrains";
import NeedHelp from "../components/NeedHelp";
class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6f3" }}>
        <PopularStrains />
        <PopularStrains style={{ marginTop: 20 }} />
        <NeedHelp />
      </ScrollView>
    );
  }
}
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f6f3"
  }
});
