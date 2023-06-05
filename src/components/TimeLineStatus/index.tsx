import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { color } from "../../utils";
import { convertTimeString } from "../../helper/formatDate";

type Props = {
  data: any;
  setIsImageViewVisible: any;
};

const TimeLineStatus: React.FC<Props> = ({ data, setIsImageViewVisible }) => {
  // console.log(data);
  return (
    <View style={[styles.container, styles.shadow]}>
      <Timeline
        data={data}
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
        renderDetail={(rowData) => {
          return (
            <View style={{ flex: 1, top: -10 }}>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Responsible:{" "}
                <Text style={{ fontFamily: "RobotoSlab-Medium" }}>Parker</Text>
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Address:{" "}
                <Text style={{ fontFamily: "RobotoSlab-Medium" }}>Da Nang</Text>
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                Status:{" "}
                <Text
                  style={{
                    fontFamily: "RobotoSlab-Medium",
                    color: color.Primary,
                  }}
                >
                  {rowData.status}
                </Text>
              </Text>
              {rowData.status === "SHIPPED" ? (
                <TouchableOpacity
                  style={{ marginVertical: 2 }}
                  onPress={() => {
                    setIsImageViewVisible((prevState: boolean) => {
                      return !prevState;
                    });
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoSlab-VariableFont_wght",
                      color: "blue",
                    }}
                  >
                    View Signatures
                  </Text>
                </TouchableOpacity>
              ) : null}
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
                {convertTimeString(rowData.deliveryDate).date}
              </Text>
              <Text style={{ fontFamily: "RobotoSlab-VariableFont_wght" }}>
                {convertTimeString(rowData.deliveryDate).time}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 2,
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

export default TimeLineStatus;
