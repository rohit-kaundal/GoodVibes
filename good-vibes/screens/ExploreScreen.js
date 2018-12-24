import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import PopularStrains from "../components/PopularStrains";
import NeedHelp from "../components/NeedHelp";
import StrainSummary from "../components/StrainSummary";
import PopularProducts from "../components/PopularProducts";
import MedicalUse from "../components/MedicalUse";
import GoodVibesSearch from "../components/GoodVibesSearch";

class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6f3", width: 360 }}>
        <PopularStrains />
        <PopularProducts style={{ marginTop: 20 }} />
        <NeedHelp />
        <StrainSummary />
        <MedicalUse />
        <GoodVibesSearch
          title="Looking for something else?"
          desc="Find it with GoodVibes Search"
          buttonTitle="Show me"
        />
        <View style={{ flex: 1, marginTop: 10 }}>
          <Text>Sepearetr</Text>
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
