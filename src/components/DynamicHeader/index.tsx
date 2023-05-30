// Expo SDK41
// expo-blur: ~9.0.3
import React, { useRef } from "react";
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
// import SearchBar from "../Search/SearchBar";

const HEADER_HEIGHT_EXPANDED = 30;
const HEADER_HEIGHT_NARROWED = 132;
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function DynamicHeader({
  children,
  username,
}: //   refreshing,
//   setRefreshing,
{
  children: any;
  username: any;
  //   refreshing: any;
  //   setRefreshing: any;
}) {
  // Keeps notches away
  return (
    <SafeAreaProvider>
      <App
        username={username}
        // refreshing={refreshing}
        // setRefreshing={setRefreshing}
      >
        {children}
      </App>
    </SafeAreaProvider>
  );
}

function App({
  children,
  username,
}: //   refreshing,
//   setRefreshing,
{
  children: any;
  username: any;
  //   refreshing: any;
  //   setRefreshing: any;
}) {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     wait(2000).then(() => setRefreshing(false));
  //   }, []);
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

      {/* Name + tweets count */}
      {/* <Animated.View
        style={{
          zIndex: 1,
          position: "absolute",
          top: insets.top + 6,
          left: 0,
          right: 0,
          alignItems: "center",
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <View
          style={{
            paddingHorizontal: 24,
            width: "100%",
          }}
        ></View>
      </Animated.View> */}

      <AnimatedImageBackground
        style={{
          position: "absolute",
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
        {/* <Animated.View
          // tint="dark"
          // intensity={96}
          // blurType="light"
          // blurAmount={10}
          // reducedTransparencyFallbackColor="white"
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            opacity: scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [1, 0, 0, 1],
            }),
          }}
        /> */}
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 72,
            // borderWidth: 1,
          }}
        >
          <View style={styles.boxName}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.nameText}>{username}</Text>
          </View>
          <Avatar.Image
            size={60}
            source={{
              uri: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/341705679_1287746178476881_2371243465129259174_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NDvMwKLYG3EAX8EUJm-&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDbGToEXGsCcHRfWyr3AzGgaTiWYcwecQ-VCIuOz76gDg&oe=647A8995",
            }}
          />
        </Animated.View>
      </AnimatedImageBackground>

      <Animated.FlatList
        // nestedScrollEnabled={false}
        // showsVerticalScrollIndicator={false}
        // onScroll={Animated.event(
        //   [
        //     {
        //       nativeEvent: {
        //         contentOffset: { y: scrollY },
        //       },
        //     },
        //   ],
        //   { useNativeDriver: true }
        // )}
        data={DATA}
        style={{
          zIndex: 0,
          paddingHorizontal: 16,
          marginTop: HEADER_HEIGHT_NARROWED,
          paddingTop: HEADER_HEIGHT_EXPANDED,
          paddingBottom: 120,
        }}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        renderItem={renderItem}
      />
      {children}
      {/* </Animated.FlatList> */}
    </View>
  );
}
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
  {
    id: "58694a0f-3da1-471f-bq96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bqư96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bdq6-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bdg6-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bda6-145571e29d72",
    title: "Third Item",
  },
];
const renderItem = ({ item }: { item: any }) => {
  return <ItemOrderView />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
  },
  username: {
    fontSize: 18,
    // fontWeight: "bold",
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
