import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class NeedHelp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 12, color: "#717171", marginTop: 20 }}>
          Need help ?
        </Text>
        <Text style={{ fontSize: 14, color: "#212121", marginTop: 10 }}>
          I want to feel
        </Text>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Button
            title="Energised"
            buttonStyle={{
              backgroundColor: "transparent",
              width: 90,
              height: 35,
              borderColor: "#b0b0b0",
              borderWidth: 0,
              borderRadius: 5
            }}
            titleStyle={{
              fontSize: 14,
              color: "#00c853"
            }}
          />

          <Button
            title="Relaxed"
            outline={true}
            fontSize={14}
            color="#00c853"
            rounded={true}
          />
        </View>
      </View>
    );
  }
}
export default NeedHelp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    height: 120,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#33000000",
    borderWidth: 1
  }
});
