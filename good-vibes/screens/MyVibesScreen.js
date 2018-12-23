import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MyVibesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is my vibes page</Text>
      </View>
    );
  }
}
export default MyVibesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
