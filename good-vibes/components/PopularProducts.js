import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductData from "../components/ProductData";

class PopularProducts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PopularProducts</Text>

        <ProductData
          productName="Spectram Cannabis Oil"
          productType="CDB"
          productRating="3.5"
          productStars={3.5}
          productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
        />
      </View>
    );
  }
}
export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
