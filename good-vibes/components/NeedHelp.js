import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import OutlineButton from "../components/OutlineButton";

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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "space-between",
            marginTop: 10,
            width: 210
          }}
        >
          <OutlineButton title="Energized" onPress={() => alert("energised")} />
          <OutlineButton title="Relaxed" onPress={() => alert("relaxed")} />
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
    shadowColor: "#330000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    paddingBottom: 20
  }
});
