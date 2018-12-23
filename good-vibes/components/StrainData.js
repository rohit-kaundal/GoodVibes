import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class StrainData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ margin: 0, padding: 0, width: 110 }}>
        <Image
          style={{
            height: 75,
            width: 75,
            alignSelf: "center",
            borderRadius: 75
          }}
          source={{
            uri: this.props.strainURL
          }}
        />
        <Text style={{ fontSize: 12, color: "#212121", textAlign: "center" }}>
          {this.props.strainName}
        </Text>
        <Text style={{ fontSize: 12, color: "#717171", textAlign: "center" }}>
          {this.props.strainType}
        </Text>
        <Text style={{ fontSize: 22, color: "#212121", textAlign: "center" }}>
          {this.props.strainRating}
        </Text>
      </View>
    );
  }
}
export default StrainData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
