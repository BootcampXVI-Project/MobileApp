import { useSelector } from "react-redux";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color, windowHeight, windowWidth } from "../../../utils";
import ProductQuantity from "../../../components/ProductQuantity";

type Props = {};
const data = {
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
    description: "Dưa vàng Kim Vương được chứng nhận OCOP của thành phố Hà Nội",
    certificateUrl: "https://www.sanela.eu/files/certificates/dfd-dfd.jpg",
    supplierId: "5d131a98-4649-4e86-8bce-de325544b5ab",
    qrCode:
      "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/qrcode%2Fproducts%2FProduct3.jpg?alt=media&token=c0f8b3c8-15cb-4dbc-9105-464f19a6580c&_gl=1*z3mjky*_ga*MTI4NDc3NzYwMi4xNjc5MjAwMzQz*_ga_CW55HF8NVT*MTY4NTg3Mzk0Ni41LjEuMTY4NTg3NDg4OS4wLjAuMA..",
  },
  quantity: "1",
};
const CartScreen = (props: Props) => {
  const cart = useSelector((state: any) => state.cart.cart);
  // console.log(cart);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "My cart",
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
    <>
      {/* <Text>CartScreen</Text> */}
      <ProductQuantity item={data} />
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
    borderRadius: windowWidth * 0.5,
  },
});
