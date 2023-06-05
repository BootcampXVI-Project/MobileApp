import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utils";
import { formatNumberWithCommas } from "../../helper/money";
type Props = {
  data: any;
};

const ProductInfor: React.FC<Props> = ({ data }) => {
  //   console.log(data);
  return (
    <View style={[styles.container, styles.shadow]}>
      <Text
        style={{
          fontFamily: "RobotoSlab-Bold",
          fontSize: 20,
          marginVertical: 2,
        }}
        numberOfLines={1}
      >
        {data?.productName}
      </Text>
      <Text
        style={{
          fontFamily: "RobotoSlab-SemiBold",
          fontSize: 18,
          color: color.Primary,
          marginVertical: 2,
        }}
      >
        {formatNumberWithCommas(data?.price)}
      </Text>
      <Text
        style={{
          fontFamily: "RobotoSlab-VariableFont_wght",
          marginVertical: 2,
        }}
        numberOfLines={3}
      >
        {data?.description}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    // fontSize:10,
    fontFamily: "RobotoSlab-SemiBold",
    // lineHeight:14,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,

    elevation: 2,
  },
});

export default ProductInfor;
