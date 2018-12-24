import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import OutlineButton from "../components/OutlineButton";

class GoodVibesSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 12, color: "#717171" }}>
          {this.props.title || ""}
        </Text>
        <Text style={{ fontSize: 14, color: "#212121", marginTop: 10 }}>
          {this.props.desc || ""}
        </Text>
        <View style={{ flex: 1, marginTop: 10 }}>
          <OutlineButton
            borderless={true}
            title={this.props.buttonTitle || "Search"}
            onPress={() => alert("search function")}
          />
        </View>
      </View>
    );
  }
}
export default GoodVibesSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#330000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});
