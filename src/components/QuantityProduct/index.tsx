import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import {
//   updateCart_minus_api,
//   updateCart_plus_api,
// } from "../../api/controller/cart/updateCart";
import { useDispatch, useSelector } from "react-redux";
import { color, windowWidth } from "../../utils";

type Props = {
  data?: any;
  quantity: any;
};
const Quantity: React.FC<Props> = ({ data, quantity }) => {
  const dispatch = useDispatch();
  //   const cart = useSelector((state: any) => state.cart.cart);

  const [number, setNumber] = useState(quantity);
  return (
    <View
      style={{
        flexDirection: "row",
        width: windowWidth * 0.2,
        justifyContent: "space-between",
      }}
    >
      {number == 1 ? (
        <View style={{ height: 25, width: 25 }} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setNumber(number - 1);
            // updateCart_minus_api(data);
            // updateCart_minus(dispatch, cart, data);
          }}
          style={{
            height: 25,
            width: 25,
            borderRadius: 25 / 2,
            backgroundColor: "#F8F9FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontFamily: "RobotoSlab-Bold" }}>-</Text>
        </TouchableOpacity>
      )}
      <Text
        style={{ fontSize: 16, fontFamily: "RobotoSlab-Bold", color: "#fff" }}
      >
        {number}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setNumber(number + 1);
          //   updateCart_plus_api(data);
          //   updateCart_plus(dispatch, cart, data);
        }}
        style={{
          height: 25,
          width: 25,
          borderRadius: 25 / 2,
          backgroundColor: color.Secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 15, color: "#fff", fontFamily: "RobotoSlab-Bold" }}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({});
