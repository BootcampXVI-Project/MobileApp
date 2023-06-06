// Expo SDK41
// expo-blur: ~9.0.3
import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
// import { BlurView } from "expo-blur";
import { BlurView } from "@react-native-community/blur";

import { Avatar } from "react-native-paper";
import ItemOrderView from "../ItemOrderView";
import { color } from "../../utils";
import { titleCase } from "../../helper/titleCase";
import { useSelector } from "react-redux";
// import SearchBar from "../Search/SearchBar";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function DynamicHeader({
  children,
  username,
  selectList,
}: //   refreshing,
//   setRefreshing,
{
  children: any;
  username: any;
  selectList: number;
  //   refreshing: any;
  //   setRefreshing: any;
}) {
  // Keeps notches away
  return (
    <App
      username={username}
      selectList={selectList}
      // refreshing={refreshing}
      // setRefreshing={setRefreshing}
    >
      <StatusBar
        animated={true}
        backgroundColor={color.Primary}
        barStyle={"light-content"}
      />

      {children}
    </App>
  );
}

function App({
  children,
  username,
  selectList,
}: //   refreshing,
//   setRefreshing,
{
  children: any;
  username: any;
  selectList: number;
  //   refreshing: any;
  //   setRefreshing: any;
}) {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT_EXPANDED = 20;
  const HEADER_HEIGHT_NARROWED = Platform.OS === "ios" ? 132 : 80;
  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     wait(2000).then(() => setRefreshing(false));
  //   }, []);
  const user = useSelector((state: any) => state?.auth?.user?.user);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          zIndex: 2,
          position: "absolute",
          top: insets.top + 13,
          left: 0,
          right: 0,
          alignItems: "center",
          opacity: scrollY.interpolate({
            inputRange: [-20, 0],
            outputRange: [1, 0],
          }),
          transform: [
            {
              rotate: scrollY.interpolate({
                inputRange: [-45, -35],
                outputRange: ["180deg", "0deg"],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Feather name="arrow-down" color="white" size={25} />
      </Animated.View>

      <AnimatedImageBackground
        style={{
          backgroundColor: color.Primary,
          zIndex: 3,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: "extend",
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
        source={0}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: Platform.OS === "ios" ? 72 : 20,
            // borderWidth: 1,
            opacity: scrollY.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: [0, 1, 0],
              extrapolateLeft: "extend",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <View style={styles.boxName}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.nameText}>{titleCase(username)}</Text>
          </View>
          <Avatar.Image
            size={60}
            source={{
              uri: user.avatar,
            }}
            style={{ backgroundColor: "transparent" }}
          />
        </Animated.View>
      </AnimatedImageBackground>

      <Animated.FlatList
        data={DATA}
        style={{
          zIndex: 2,
          paddingHorizontal: 16,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        renderItem={({ item }) => (
          <ItemOrderView isShowStatus={true} selectList={selectList} />
        )}
      />
      {children}
    </View>
  );
}
const DATA: any[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bq96-145571e29d72",
  },
  {
    id: "58694a0f-3da1-471f-a96-145571e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bdq6-145571e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bdg6-145571e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bda6-145571e29d72",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  text: {
    color: "white",
  },
  username: {
    fontSize: 18,
    fontFamily: "RobotoSlab-Bold",
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(255, 255, 255, 0.25)",
  },
  boxInfor: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxName: {
    marginRight: 120,
  },
  helloText: {
    fontSize: 26,
    // fontWeight: "bold",
    fontFamily: "RobotoSlab-Bold",
    color: "white",
  },
  nameText: {
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "RobotoSlab-Bold",
    color: "white",
  },
});
1;
