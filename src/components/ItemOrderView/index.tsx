import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import logo from "../../../assets/icon.png";
import { color } from "../../utils";

type Props = {};

const ItemOrderView: React.FC<Props> = ({}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Image
        source={{
          uri: "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png",
        }}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text
          style={{
            color: color.Primary,
            fontFamily: "RobotoSlab-Bold",
            fontSize: 18,
          }}
        >
          OrderID
        </Text>
        <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>
          Name Retailer
        </Text>
        <Text>2 items</Text>
      </View>
      <View style={[styles.price, { paddingHorizontal: 14 }]}>
        <Text
          style={{
            color: color.Primary,
            fontFamily: "RobotoSlab-Bold",
            fontSize: 16,
          }}
        >
          120.0$
        </Text>
      </View>
    </View>
  );
};

export default ItemOrderView;
