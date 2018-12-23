import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import StrainData from "../components/StrainData";

class ExploreScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6f3" }}>
        <View style={{ flex: 1, margin: 0 }}>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              paddingLeft: 20,
              color: "#fff",
              alignItems: "flex-start",
              height: 110,
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
              strainRating="4.0"
              strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
            />
            <StrainData
              strainName="Blue Dream"
              strainType="Indica"
              strainRating="4.0"
              strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
            />
            <StrainData
              strainName="Blue Dream"
              strainType="Indica"
              strainRating="4.0"
              strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
            />
            <StrainData
              strainName="Blue Dream"
              strainType="Indica"
              strainRating="4.0"
              strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
            />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f6f3"
  }
});
