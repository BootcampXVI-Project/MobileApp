import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { color } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import Tag from "../Tag";

type Props = {
  isShowStatus?: boolean;
  selectList?: number;
};

const ItemOrderView: React.FC<Props> = ({
  isShowStatus = false,
  selectList = 0,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      onPress={() => {
        navigation.navigate("DetailProductScreen");
      }}
    >
      <Image
        source={{
          uri: "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png",
        }}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text
          style={{
            color: selectList == 0 ? color.Primary : color.Secondary,
            fontFamily: "RobotoSlab-Bold",
            fontSize: 18,
          }}
        >
          OrderID
        </Text>
        <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>
          Name Retailer
        </Text>
        {isShowStatus ? (
          <View>
            <Tag
              backgroundColor={
                selectList == 0
                  ? "rgb(163, 255, 163)"
                  : "rgba(250, 204, 21, 0.32)"
              }
              color={selectList == 0 ? color.Primary : color.Secondary}
              fontSize={16}
              text="Finish"
            />
          </View>
        ) : (
          <Text>2 items</Text>
        )}
      </View>
      <View style={[styles.price, { paddingHorizontal: 14 }]}>
        <Text
          style={{
            color: selectList == 0 ? color.Primary : color.Secondary,
            fontFamily: "RobotoSlab-Bold",
            fontSize: 16,
          }}
        >
          120.0$
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemOrderView;
