import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StrainData from "../components/StrainData";

class PopularStrains extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flex: 1,
            borderColor: "#33000000",
            backgroundColor: "#fff",
            paddingBottom: 10,
            borderBottomColor: "#33000000",
            borderBottomWidth: 5
          }
        ]}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 50,
            color: "#fff",
            alignItems: "flex-start",
            height: 145,
            backgroundColor: "#b0b0b0"
          }}
        >
          Popular Strains
        </Text>
        <ScrollView
          style={{ marginTop: -41 }}
          horizontal={"true"}
          showsHorizontalScrollIndicator={false}
        >
          <StrainData
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="2.5"
            strainStars={2.5}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="4.0"
            strainStars={4}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="4.0"
            strainStars={4}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            strainName="Blue Dream"
            strainType="Indica"
            strainStars="3.5"
            strainRating={3.5}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
export default PopularStrains;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
