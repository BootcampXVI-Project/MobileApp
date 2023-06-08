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
import { Product } from "../../../types/models";
import SearchBar from "../../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import PRODUCT from "../../../../assets/products.json";
import NewProduct from "../../../components/NewProduct";
import AntDesign from "react-native-vector-icons/AntDesign";
import PopularProduct from "../../../components/PopularProduct";
import { color, windowHeight, windowWidth } from "../../../utils";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import HeaderRetailerHomeScreen from "../../../components/HeaderRetailerHomeScreen";
type Props = {};

const HomeScreen = (props: Props) => {
  const user = useSelector((state: any) => state?.auth?.user);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [order, setOrder] = useState();

  // const getAllOrdersofRetailer = async () => {
  //   const result = await getAllOrders(user.token, dispatch);
  //   // setOrder(result);
  // };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color.Primary,
      },
      headerTitle: (props: any) => (
        <HeaderRetailerHomeScreen {...props} user={user.user} />
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
  useFocusEffect(
    React.useCallback(() => {
      // getAllOrdersofRetailer();
      return () => {};
    }, [])
  );

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
        style={{ flex: 1, backgroundColor: "#fff" }}
        data={[]}
        keyExtractor={(_e: any, i: { toString: () => string }) =>
          "dom" + i.toString()
        }
        ListEmptyComponent={null}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Text style={[styles.title, { marginHorizontal: 16 }]}>
              Popular Product
            </Text>
            <FlatList
              horizontal
              data={PRODUCT?.data}
              keyExtractor={(item) => item.productId}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({
                item,
                index,
              }: {
                item: Product;
                index: number;
              }) => {
                return (
                  <PopularProduct
                    product={item}
                    key={item.productId}
                    index={index}
                  />
                );
              }}
            />
            <Text style={[styles.title, { marginHorizontal: 16 }]}>
              New Product
            </Text>
            <FlatList
              data={PRODUCT?.data}
              keyExtractor={(item) => item.productId}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }: { item: Product }) => {
                return <NewProduct product={item} key={item.productId} />;
              }}
              style={{ marginHorizontal: 16 }}
            />
          </>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "RobotoSlab-SemiBold",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 6,
  },
});
