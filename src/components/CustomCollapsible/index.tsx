import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import styles from "./style";
import CardProduct from "../CardProduct";
import Slide from "../SlideImage/Slide";
const SECTIONS = [
  {
    title: "First",
    content: "Lorem ipsum1111111111111111...",
  },
  {
    title: "Second",
    content: "Lorem ipsum.222222222222222222222222..",
  },
];
const LIST = [
  {
    product: {
      productId: "Product2",
      productName: "Dưa hấu Hàm Ninh",
      dates: {
        cultivated: "",
        harvested: "",
        imported: "",
        manufacturered: "",
        exported: "",
        distributed: "",
        sold: "",
      },
      actors: {
        supplierId: "",
        manufacturerId: "",
        distributorId: "",
        retailerId: "",
      },
      expiredTime: "",
      price: "100000",
      status: "",
      description:
        "Dưa hấu Hàm Ninh, Quảng Bình ngọt ngào như tấm lòng người miền Trung",
      certificateUrl:
        "https://baoquangbinh.vn/dataimages/202305/original/images1538078385_5_copy.jpg",
      cooperationId: "g53a0000-8669-4a07-a23a-d18055601111",
      image: [
        "https://ocopvietnam.com.vn/upload/images/dua-hau-ham-ninh-quang-binh-ngot-ngao-nhu-tam-long-nguoi-mien-trung-5-1652858679.jpg",
        "https://ocopvietnam.com.vn/upload/images/duahauhamninh5.jpg",
        "https://baoquangbinh.vn/dataimages/202305/original/images1539032652_1__17__copy.jpg",
      ],
    },
    quantity: 1,
  },
  {
    product: {
      productId: "Product3",
      productName: "Dưa vàng Kim Vương",
      dates: {
        cultivated: "",
        harvested: "",
        imported: "",
        manufacturered: "",
        exported: "",
        distributed: "",
        sold: "",
      },
      actors: {
        supplierId: "",
        manufacturerId: "",
        distributorId: "",
        retailerId: "",
      },
      expiredTime: "",
      price: "100000",
      status: "",
      description:
        "Dưa vàng Kim Vương được chứng nhận OCOP của thành phố Hà Nội",
      certificateUrl:
        "https://ocopvietnam.com.vn/upload/images/1658154472131.jpg",
      cooperationId: "g53a0000-8669-4a07-a23a-d18055601111",
      image: [
        "https://ocopvietnam.com.vn/upload/images/b%C6%B0%E1%BB%9Fi%20di%E1%BB%85n.jpg",
        "https://ocopvietnam.com.vn/upload/images/164397944076420230426132613.jpg",
        "https://ocopvietnam.com.vn/upload/images/hoa-xa-620230403114643.jpg",
      ],
    },
    quantity: 2,
  },
];
const CustomCollapsible = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section: any) => {
    const index = LIST.findIndex(
      (item) =>
        item.product.productId === section.product.productId &&
        item.product.productName === section.product.productName
    );
    return (
      <CardProduct
        onActive={activeSections[0] === index ? true : false}
        styleContainer={styles.renderListProduct}
        styleIcon={{
          color: "#fff",
        }}
        styleTitle={{ color: "#fff" }}
        title={section.product.productName}
      />
    );
  };

  const renderContent = (section: any) => {
    return (
      <View style={styles.content}>
        <Slide item={section.product} />
        <View style={{ marginHorizontal: 8 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>
              x{section.quantity}
            </Text>
            <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 18 }}>
              {section.product.price}$
            </Text>
          </View>
          <Text style={{ fontFamily: "RobotoSlab-Medium", fontSize: 16 }}>
            Name Cooperation
          </Text>
          <Text
            style={{
              fontFamily: "RobotoSlab-VariableFont_wght",
              fontSize: 14,
              marginVertical: 4,
            }}
            numberOfLines={3}
          >
            {section.product.description}
          </Text>
        </View>
      </View>
    );
  };

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      sections={LIST}
      activeSections={activeSections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
      expandMultiple={false}
      touchableComponent={TouchableOpacity}
      underlayColor="transparent"
    />
  );
};

export default CustomCollapsible;
