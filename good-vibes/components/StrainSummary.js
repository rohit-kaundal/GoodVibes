import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ProgressBarAndroid
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Stars from "react-native-stars";

class StrainSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          }}
          style={{
            marginTop: 30,
            height: 75,
            width: 75,
            borderRadius: 75,
            alignSelf: "center",
            zIndex: 10
          }}
        />
        <View
          style={{
            flex: 1,
            marginTop: -36,
            width: 320,
            alignItems: "center",
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#fff",
            borderColor: "#33000000",
            borderBottomWidth: 40,
            padding: 20
          }}
        >
          <View
            style={{
              flex: 1,
              margin: 20,
              marginTop: 40
            }}
          >
            <View
              style={{
                marginTop: 0,
                flex: 1,
                width: 320,
                alignContent: "space-between",
                flexDirection: "row"
              }}
            >
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: "#212121" }}>
                  Blue Dream
                </Text>
                <Text style={{ fontSize: 12, color: "#717171" }}>Indica</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 20,
                  marginTop: -20,
                  alignItems: "flex-end"
                }}
              >
                <Stars
                  default={4.0}
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
                <Text style={{ fontSize: 22, color: "#212121" }}>4.0</Text>
                <Text style={{ fontSize: 12, color: "#717171" }}>
                  my rating
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              margin: 20
            }}
          >
            <Text style={{ fontSize: 12, color: "#212121", textAlign: "left" }}>
              Relaxed
            </Text>
            <ProgressBarAndroid
              style={{ width: 200 }}
              styleAttr="Horizontal"
              color="#00c853"
              indeterminate={false}
              progress={0.5}
            />
          </View>
          <Text style={{ fontSize: 14, color: "#666666" }}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            lacus id sem facilisi vehic ut sed dui. Lorem ipsum calargare sitorm
            am…”
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              alignContent: "flex-start",
              flexDirection: "row",
              margin: 0,
              padding: 0,
              width: 320,
              paddingLeft: 20
            }}
          >
            <Image
              source={require("../assets/images/1x/write_edit.png")}
              fadeDuration={0}
              style={{
                width: 10,
                height: 10,
                alignSelf: "center",
                marginRight: 5
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#212121"
              }}
            >
              Reviewed by me &amp; effects recorded.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default StrainSummary;

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
