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
const IMAGE_STATUS = {
  delivery:
    "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/mobileApp%2Fpngegg-removebg-preview.png?alt=media&token=ad88a806-2534-4b8e-83b3-39ff7b9267c4&_gl=1*1mi6w16*_ga*MjQ1MDY3NTA3LjE2ODQ5MTY0MzI.*_ga_CW55HF8NVT*MTY4NTY5ODg1Ni4xMC4xLjE2ODU2OTkxNTYuMC4wLjA.",
  pending:
    "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/mobileApp%2Fpending-icon-512x504-9zrlrc78-removebg-preview.png?alt=media&token=db8619b0-1b40-41bb-b5e6-e01b93e284ab&_gl=1*isird*_ga*MjQ1MDY3NTA3LjE2ODQ5MTY0MzI.*_ga_CW55HF8NVT*MTY4NTc3MTMzMy4xMS4xLjE2ODU3NzEzNDAuMC4wLjA.",
  delivered:
    "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/mobileApp%2Fshipped.png?alt=media&token=5508cc3e-c5a0-4a33-aca9-11b63f7a4137&_gl=1*4cmtqe*_ga*MjQ1MDY3NTA3LjE2ODQ5MTY0MzI.*_ga_CW55HF8NVT*MTY4NTc3MTMzMy4xMS4xLjE2ODU3NzE1OTkuMC4wLjA.",
};

const ItemOrderView_2: React.FC<Props> = ({
  isShowStatus = false,
  selectList = 0,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      onPress={() => {
        navigation.navigate("OrderDetailScreen");
      }}
    >
      <View style={[{ flexDirection: "row" }]}>
        <Image
          source={{
            uri: IMAGE_STATUS.delivery,
          }}
          style={styles.logo}
          resizeMode={"center"}
        />
        <View style={styles.content}>
          <Text
            style={{
              color: selectList == 0 ? color.Primary : color.Secondary,
              fontFamily: "RobotoSlab-Bold",
              fontSize: 18,
            }}
          >
            2/6/2022 11:43
          </Text>
          <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>
            {/* Order ID */}
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
                text="Finish delivery"
              />
            </View>
          ) : (
            <Text>2 items</Text>
          )}
        </View>
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

export default ItemOrderView_2;
