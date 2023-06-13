import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import styles from "./style";
import SwipeButton from "rn-swipe-button";
import { Order } from "../../../types/models";
import { useDispatch, useSelector } from "react-redux";
import React, { useLayoutEffect, useState } from "react";
import { loadDone, loadStart } from "../../../redux/features/load";
import MapComponent from "../../../components/MapComponent";
import ItemOrderView from "../../../components/ItemOrderView";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color, windowHeight, windowWidth } from "../../../utils";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import CustomCollapsible from "../../../components/CustomCollapsible";
import SignatureRetailer from "../../../components/SignatureRetailer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getOrderById } from "../../../api/order";

const ButtonSwipe = () => {
  return (
    <View
      style={{
        width: windowWidth,
        height: "100%",
        backgroundColor: color.Secondary,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="chevron-triple-right"
        size={40}
        color={"#fff"}
      />
    </View>
  );
};

const DetailProductScreen = () => {
  const navigation = useNavigation();
  const [signature, setSignature] = useState<any>(null);
  // console.log(signature);
  const route = useRoute();
  const user = useSelector((state: any) => state?.auth?.user);
  const dispatch = useDispatch();

  const orderId: string = typeof route.params === "string" ? route.params : "";

  const [order, setOrder] = useState<Order | undefined>();

  const callApi = async () => {
    dispatch(loadStart());
    const order = await getOrderById(orderId, user.token, dispatch);
    setOrder(order);
    dispatch(loadDone());
  };

  useFocusEffect(
    React.useCallback(() => {
      callApi();
      return () => {};
    }, [])
  );

  const handleSwipeOrder = () => {};
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Order",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "RobotoSlab-Bold",
      },
      headerStyle: {
        paddingBottom: 124,
        backgroundColor: color.Primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={color.Primary}
        barStyle={"light-content"}
      />
      <ItemOrderView item={order} />
      <Text
        style={{
          color: color.Primary,
          // fontWeight: "bold",
          fontFamily: "RobotoSlab-Bold",
          fontSize: 16,
          marginVertical: 6,
          marginLeft: 4,
        }}
      >
        List item in this order
      </Text>
      <CustomCollapsible productItemList={order?.productItemList || []} />
      <MapComponent retailerAddress={order?.retailer.address} />
      <SignatureRetailer signature={signature} setSignature={setSignature} />
      <View style={styles.swipe}>
        <SwipeButton
          disabled={signature ? false : true}
          containerStyles={{
            width: "100%",
            borderRadius: 15,
          }}
          onSwipeSuccess={() => {
            handleSwipeOrder();
          }}
          enableRightToLeftSwipe
          railBackgroundColor={color.Primary}
          thumbIconWidth={windowHeight * 0.074}
          shouldResetAfterSuccess={true}
          title={signature ? "Swipe to complete" : "Get signature before"}
          titleColor="#fff"
          thumbIconComponent={ButtonSwipe}
          thumbIconStyles={{ borderRadius: 15, borderWidth: 0 }}
          railStyles={{
            borderRadius: 15,
            backgroundColor: color.Secondary,
          }}
          height={windowHeight * 0.07}
          titleStyles={{
            fontFamily: "RobotoSlab-Bold",
            paddingLeft: windowWidth * 0.1,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DetailProductScreen;
