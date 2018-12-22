import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ExploreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Good Vibes Explore page</Text>
        <Text> its awsome </Text>
      </View>
    );
  }
}
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
