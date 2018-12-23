import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import PopularStrains from "../components/PopularStrains";
class ExploreScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6f3" }}>
        <PopularStrains />
        <PopularStrains style={{ marginTop: 20 }} />
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
