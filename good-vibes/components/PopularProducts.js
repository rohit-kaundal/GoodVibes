import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductData from "../components/ProductData";

class PopularProducts extends Component {
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
            borderBottomWidth: 2
          }
        ]}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 20,
            color: "#fff",
            alignItems: "flex-start",
            height: 135,
            backgroundColor: "#b0b0b0"
          }}
        >
          Popular Products
        </Text>
        <ScrollView
          style={{ marginTop: -41 }}
          horizontal={"true"}
          showsHorizontalScrollIndicator={false}
        >
          <ProductData
            productName="Spectram Cannabis Oil"
            productType="CDB"
            productRating="3.5"
            productStars={3.5}
            productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
          />
          <ProductData
            productName="Spectram Cannabis Oil"
            productType="CDB"
            productRating="3.5"
            productStars={3.5}
            productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
          />
          <ProductData
            productName="Spectram Cannabis Oil"
            productType="CDB"
            productRating="3.5"
            productStars={3.5}
            productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
          />
          <ProductData
            productName="Spectram Cannabis Oil"
            productType="CDB"
            productRating="3.5"
            productStars={3.5}
            productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
          />
        </ScrollView>
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
