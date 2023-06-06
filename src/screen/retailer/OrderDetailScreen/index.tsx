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
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { color, windowWidth } from "../../../utils";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProductItem from "../../../components/ProductItem";
import { FlatList } from "react-native";
import BottomSideOrderDetail from "../../../components/BottomSideOrderDetail";
import TimeLineStatus from "../../../components/TimeLineStatus";
import StautsOrderComponent from "../../../components/StatusOrderComponent";
// import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer-fixed";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const ORDER = {
  orderId: "Order1",
  productItemList: [
    {
      product: {
        productId: "Product2",
        image: [
          "https://ocopvietnam.com.vn/upload/images/dua-hau-ham-ninh-quang-binh-ngot-ngao-nhu-tam-long-nguoi-mien-trung-5-1652858679.jpg",
          "https://ocopvietnam.com.vn/upload/images/duahauhamninh5.jpg",
          "https://baoquangbinh.vn/dataimages/202305/original/images1539032652_1__17__copy.jpg",
        ],
        productName: "Dưa hấu Hàm Ninh",
        dates: [
          {
            status: "cultivated",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "supplier",
          },
          {
            status: "harvested",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "supplier",
          },
          {
            status: "imported",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "manufacturered",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "exported",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "distributed",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "distributor",
          },
          {
            status: "selling",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "retailer",
          },
          {
            status: "sold",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "retailer",
          },
        ],
        actors: {
          supplierId: "",
          manufacturerId: "",
          distributorId: "",
          retailerId: "",
        },
        expireTime: "",
        price: "100000",
        amount: "10",
        unit: "kg",
        status: "",
        description:
          "Dưa hấu Hàm Ninh, Quảng Bình ngọt ngào như tấm lòng người miền Trung",
        certificateUrl: "https://www.sanela.eu/files/certificates/dfd-dfd.jpg",
        supplierId: "5d131a98-4649-4e86-8bce-de325544b5ab",
        qrCode:
          "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/qrcode%2Fproducts%2FProduct2.jpg?alt=media&token=6b7f89c7-32b7-40fc-970f-36071ef938b5&_gl=1*da8zmd*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NDg4Ni4wLjAuMA..",
      },
      quantity: "2",
    },
    {
      product: {
        productId: "Product3",
        image: [
          "https://ocopvietnam.com.vn/upload/images/b%C6%B0%E1%BB%9Fi%20di%E1%BB%85n.jpg",
          "https://ocopvietnam.com.vn/upload/images/164397944076420230426132613.jpg",
          "https://ocopvietnam.com.vn/upload/images/hoa-xa-620230403114643.jpg",
        ],
        productName: "Dưa vàng Kim Vương",
        dates: [
          {
            status: "cultivated",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "supplier",
          },
          {
            status: "harvested",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "supplier",
          },
          {
            status: "imported",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "manufacturered",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "exported",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "manufacturer",
          },
          {
            status: "distributed",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "distributor",
          },
          {
            status: "selling",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "retailer",
          },
          {
            status: "sold",
            time: "2023-06-04 10:05:29.956+07:00",
            actor: "retailer",
          },
        ],
        actors: {
          supplierId: "",
          manufacturerId: "",
          distributorId: "",
          retailerId: "",
        },
        expireTime: "",
        price: "100000",
        amount: "20",
        unit: "kg",
        status: "",
        description:
          "Dưa vàng Kim Vương được chứng nhận OCOP của thành phố Hà Nội",
        certificateUrl: "https://www.sanela.eu/files/certificates/dfd-dfd.jpg",
        supplierId: "5d131a98-4649-4e86-8bce-de325544b5ab",
        qrCode:
          "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/qrcode%2Fproducts%2FProduct3.jpg?alt=media&token=c0f8b3c8-15cb-4dbc-9105-464f19a6580c&_gl=1*z3mjky*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NDg4OS4wLjAuMA..",
      },
      quantity: "1",
    },
  ],
  deliveryStatus: [
    {
      distributorId: "0ef0ce7c-edcb-40ef-90d5-fb563ddd34fd",
      deliveryDate: "2023-06-03 10:05:29.956+07:00",
      status: "NOT-SHIPPED-YET",
      longitude: "16.0510069",
      latitude: "107.9427062",
    },
    {
      distributorId: "0ef0ce7c-edcb-40ef-90d5-fb563ddd34fd",
      deliveryDate: "2023-06-04 10:05:29.956+07:00",
      status: "SHIPPING",
      longitude: "16.0143785",
      latitude: "108.0795248",
    },
    {
      distributorId: "0ef0ce7c-edcb-40ef-90d5-fb563ddd34fd",
      deliveryDate: "2023-06-5 10:05:29.956+07:00",
      status: "SHIPPED",
      longitude: "16.0002696",
      latitude: "108.1867033",
    },
  ],
  signature: {
    distributorSignature:
      "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/signatureimg%2F1685679290707?alt=media&token=0775cab4-29ab-41b7-a180-0a72958f1d32&_gl=1*1wdtvuo*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NTU0My4wLjAuMA..",
    retailerSignature:
      "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/signatureimg%2F1685607934461?alt=media&token=2a312530-d021-4b38-8f07-92c63694c9f0&_gl=1*1luzczr*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NTU0OC4wLjAuMA..",
  },
  status: "SHIPPED",
  distributorId: "0ef0ce7c-edcb-40ef-90d5-fb563ddd34fd",
  retailerId: "3206c2cb-ab7d-45b5-98fa-c35313754e6d",
  qrCode:
    "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/qrcode%2Forders%2FOrder1.jpg?alt=media&token=41b768b1-c9ba-4a51-9c7d-83219ff8f431&_gl=1*1msu9rs*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NTA4OS4wLjAuMA..",
  createDate: "2023-06-03 10:05:29.956+07:00",
  updateDate: "2023-06-04 10:05:29.956+07:00",
  finishDate: "2023-06-05 10:05:29.956+07:00",
};
const OrderDetailScreen = (props: Props) => {
  const navigation = useNavigation();

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
  // console.log([ORDER.signature]);
  const images = Object.entries(ORDER.signature).map(([title, url]) => ({
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
                {ORDER.orderId}
              </Text>
            </Text>
            <StautsOrderComponent status={ORDER.status} />
            <Text style={{ fontFamily: "RobotoSlab-Medium", marginTop: 4 }}>
              List product
            </Text>
            <FlatList
              data={ORDER.productItemList}
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
              data={ORDER.deliveryStatus}
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
            renderHeader={(currentIndex?: number) => (
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
                  {images[currentIndex].title}
                </Text>
              </View>
            )}
          />
        </View>
      </Modal>
      <BottomSideOrderDetail totalPrice={111111} orderStatus={"delivered"} />
    </>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({});
