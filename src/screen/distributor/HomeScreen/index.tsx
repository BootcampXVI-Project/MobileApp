import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";
import { color, windowHeight } from "../../../utils";
import DynamicHeader from "../../../components/DynamicHeader";
import ItemOrderView from "../../../components/ItemOrderView";

type Props = {};
const renderItem = ({ item }: { item: any }) => {
  return <ItemOrderView />;
};
const DATA: any[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const HomeScreen = (props: Props) => {
  const user = useSelector((state: any) => state?.auth?.user);
  // console.log("HOme", user);
  const [selectList, setSelectList] = useState<number>(1);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <DynamicHeader username={user?.userName} selectList={selectList}>
        <View style={{}} />
      </DynamicHeader>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          transform: [{ rotate: "-90deg" }],
          position: "absolute",
          top: 260,
          left: -94,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: selectList === 0 ? "gray" : color.Primary,
            paddingHorizontal: 8,
            paddingVertical: 12,
            width: 100,
            marginRight: 20,
            alignItems: "center",
            borderRadius: 12,
          }}
          disabled={selectList === 0 ? true : false}
          onPress={() => {
            setSelectList(0);
          }}
        >
          <Text
            style={{
              fontSize: 14,
              // fontWeight: "500",
              fontFamily: "RobotoSlab-Medium",
              color: "#fff",
              // marginTop: 12,
              bottom: -4,
            }}
          >
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: selectList === 1 ? "gray" : color.Primary,
            paddingHorizontal: 8,
            paddingVertical: 12,
            marginRight: 20,
            width: 100,
            alignItems: "center",
            borderRadius: 12,
          }}
          onPress={() => {
            setSelectList(1);
          }}
          disabled={selectList === 1 ? true : false}
        >
          <Text
            style={{
              fontSize: 14,
              // fontWeight: "500",
              fontFamily: "RobotoSlab-Medium",
              color: "#fff",
              // marginTop: 12,
              bottom: -4,
            }}
          >
            Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // borderWidth: 5,
    paddingTop: 60,
  },
});
