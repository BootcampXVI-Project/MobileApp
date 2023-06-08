import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  Modal,
} from "react-native";
import { FlatList } from "react-native";
import { Order } from "../../../types/models";
import { AntDesign } from "@expo/vector-icons";
import { color, windowWidth } from "../../../utils";
import React, { useLayoutEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import ImageViewer from "react-native-image-zoom-viewer-fixed";
import TimeLineStatus from "../../../components/TimeLineStatus";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import StautsOrderComponent from "../../../components/StatusOrderComponent";
import BottomSideOrderDetail from "../../../components/BottomSideOrderDetail";

type Props = {};

const OrderDetailScreen = (props: Props) => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log(route.params);
  const ORDER: Order = route.params as Order;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Order",
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
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            height: windowWidth * 0.1,
            width: windowWidth * 0.1,
            borderRadius: windowWidth * 0.05,
            marginBottom: Platform.OS === "ios" ? 2 : 0,
          }}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const [isImageViewVisible, setIsImageViewVisible] = useState<boolean>(false);
  // console.log(isImageViewVisible);
  // console.log([ORDER?.signature]);
  const images = Object.entries(ORDER?.signature).map(([title, url]) => ({
    title,
    url,
  }));

  return (
    <>
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
          <View
            style={{
              marginHorizontal: 12,
              flex: 1,
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{
                marginTop: 12,
                fontFamily: "RobotoSlab-VariableFont_wght",
                fontSize: 12,
              }}
            >
              Your Order:{" "}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "RobotoSlab-Medium",
                }}
              >
                {ORDER?.orderId}
              </Text>
            </Text>
            <StautsOrderComponent status={ORDER?.status} />
            <Text style={{ fontFamily: "RobotoSlab-Medium", marginTop: 4 }}>
              List product
            </Text>
            <FlatList
              data={ORDER?.productItemList}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => <ProductItem item={item} />}
              keyExtractor={(item) => item.product.productId}
              style={{ flex: 1 }}
            />
            <Text style={{ fontFamily: "RobotoSlab-Medium", marginTop: 4 }}>
              Status order
            </Text>
            <TimeLineStatus
              data={ORDER?.deliveryStatuses}
              setIsImageViewVisible={setIsImageViewVisible}
            />
          </View>
        )}
      />
      <Modal visible={isImageViewVisible}>
        <TouchableOpacity
          style={{
            backgroundColor: color.Primary,
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
            borderRadius: windowWidth * 0.05,
            position: "absolute",
            top: Platform.OS === "ios" ? 40 : 10,
            right: 20,
            zIndex: 11,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setIsImageViewVisible(!isImageViewVisible)}
        >
          <AntDesign name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <ImageViewer
            imageUrls={images}
            style={{ top: -18 }}
            backgroundColor={"#fff"}
            renderHeader={(currentIndex: number) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "ios" ? 50 : 20,
                  zIndex: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoSlab-Medium",
                    fontSize: 18,
                    color: "#000",
                  }}
                >
                  {currentIndex + 1}/{images.length}
                </Text>
                <Text
                  style={{
                    fontFamily: "RobotoSlab-Medium",
                    fontSize: 18,
                    color: "#000",
                  }}
                >
                  {images[currentIndex].title == "distributorSignature"
                    ? "Distributor"
                    : "Retailer"}
                </Text>
              </View>
            )}
          />
        </View>
      </Modal>
      <BottomSideOrderDetail totalPrice={111111} orderStatus={ORDER?.status} />
    </>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({});
