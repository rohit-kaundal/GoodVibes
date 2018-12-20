import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello its not this</Text>
        <Text> its awsome </Text>
      </View>
    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
