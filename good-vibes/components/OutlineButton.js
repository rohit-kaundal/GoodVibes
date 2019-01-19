import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class OutlineButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor="white"
          style={{
            borderColor: "#b0b0b0",
            borderRadius: this.props.borderless ? 0 : 35,
            borderWidth: this.props.borderless ? 0 : 1,
            width: 90,
            height: 35,
            padding: 5
          }}
        >
          <Text style={{ color: "#ff5a5f", fontSize: 14, textAlign: "center" }}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
