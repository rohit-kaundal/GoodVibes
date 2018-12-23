import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class StrainData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          margin: 0,
          padding: 0,
          width: 110
        }}
      >
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
        <View>
          <Text style={{ fontSize: 12, color: "#212121", textAlign: "center" }}>
            {this.props.strainName}
          </Text>
          <Text style={{ fontSize: 12, color: "#717171", textAlign: "center" }}>
            {this.props.strainType}
          </Text>
          <View style={{ alignItems: "center" }}>
            <Stars
              default={this.props.strainStars}
              disabled={true}
              count={5}
              half={true}
              starSize={51}
              fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={"star-outline"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={"star-half"} style={[styles.myStarStyle]} />
              }
            />
          </View>
          <Text style={{ fontSize: 22, color: "#212121", textAlign: "center" }}>
            {this.props.strainRating}
          </Text>
        </View>
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
  },
  myStarStyle: {
    color: "#00c853",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "#e7ede7"
  }
});
