import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { color, windowHeight, windowWidth } from "../../../utils";
import HeaderRetailerHomeScreen from "../../../components/HeaderRetailerHomeScreen";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import SearchBar from "../../../components/SearchBar";
import ItemOrderView_2 from "../../../components/ItemOrderView_2";
import { getGeolocation } from "../../../helper/getGeolocation";

type Props = {};
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
const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const user = useSelector((state: any) => state?.auth?.user.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color.Primary,
      },
      headerTitle: (props: any) => (
        <HeaderRetailerHomeScreen {...props} user={user} />
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            marginRight: 16,
            marginBottom: Platform.OS === "ios" ? 2 : 0,
            height: windowWidth * 0.1,
            width: windowWidth * 0.1,
            borderRadius: windowWidth * 0.05,
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1, paddingBottom: 100 }}>
      <StatusBar
        animated={true}
        backgroundColor={color.Primary}
        barStyle={"light-content"}
      />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <FlatList
        data={DATA}
        style={{
          zIndex: 2,
          paddingHorizontal: 12,
        }}
        renderItem={({ item }) => <ItemOrderView_2 isShowStatus={true} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
