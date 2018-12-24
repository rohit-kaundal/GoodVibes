import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import OutlineButton from "../components/OutlineButton";

class MedicalUse extends Component {
  _onPressTest = () => alert("hi");
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 12, color: "#717171" }}>Medical Use</Text>
        <Text style={{ fontSize: 14, color: "#212121", marginTop: 10 }}>
          I am looking to better my
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "space-between",
            marginTop: 10
          }}
        >
          <OutlineButton
            title="Depression"
            onPress={() => alert("depression")}
          />
          <OutlineButton title="Stress" onPress={() => alert("stress")} />
          <OutlineButton title="Fatigue" onPress={() => alert("fatigue")} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "space-between",
            marginTop: 10
          }}
        >
          <OutlineButton title="Pain" onPress={() => alert("pain")} />
          <OutlineButton title="Headache" onPress={() => alert("headache")} />
          <OutlineButton title="Appetite" onPress={() => alert("appetite")} />
        </View>
      </View>
    );
  }
}
export default MedicalUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 23,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#330000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});
