import { color } from "../../utils";
import React, { useState } from "react";
import { ProductDate } from "../../types/models";
import Timeline from "react-native-timeline-flatlist";
import { convertTimeString, convertToUTC } from "../../helper/formatDate";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  data?: ProductDate[];
};
const TimeLineProduct = React.memo(function TimeLineProduct({ data }: Props) {
  const filteredDates = data?.filter(
    (date: any) => date?.status !== "sold" && date?.status !== "selling"
  );
  // console.log("1");

  // console.log(data);
  return (
    <View style={[styles.container, styles.shadow]}>
      <Timeline
        data={filteredDates}
        circleSize={24}
        circleColor={color.Primary}
        lineColor={color.Primary}
        timeContainerStyle={{ marginTop: 0 }}
        timeStyle={{
          textAlign: "center",
          backgroundColor: color.Primary,
          color: "white",
          padding: 5,
          borderRadius: 12,
          fontSize: 12,
        }}
        descriptionStyle={{ color: "gray" }}
        style={{ paddingTop: 5 }}
        isUsingFlatlist={true}
        innerCircle={"dot"}
        renderDetail={(rowData: ProductDate) => {
          return (
            <View style={{ flex: 1, top: -10 }}>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Responsible:{" "}
                <Text style={{ fontFamily: "RobotoSlab-Medium" }}>
                  {rowData?.actor?.fullName}
                </Text>
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Address:{" "}
                <Text style={{ fontFamily: "RobotoSlab-Medium" }}>
                  {rowData?.actor?.address}
                </Text>
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Status:{" "}
                <Text
                  style={{
                    fontFamily: "RobotoSlab-SemiBold",
                    color: color.Primary,
                  }}
                >
                  {rowData?.status.toUpperCase()}
                </Text>
              </Text>
            </View>
          );
        }}
        renderTime={(rowData) => {
          return (
            <View
              style={{
                marginBottom: 8,
                alignItems: "flex-end",
              }}
            >
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                {convertTimeString(convertToUTC(rowData.time)).date}
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                {convertTimeString(convertToUTC(rowData.time)).time}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 8,

    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,

    elevation: 4,
  },
  text: {
    fontFamily: "RobotoSlab-SemiBold",
  },
});

export default React.memo(TimeLineProduct);
