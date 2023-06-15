import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from "react-native";
import React from "react";
import { color, windowWidth } from "../../../utils";
import { useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { logoutUser } from "../../../api/auth";
import { AntDesign } from "@expo/vector-icons";
import Profile from "../../../components/Profile";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const SettingScreen = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    // <SafeAreaView style={styles.container}>
    <View style={{ paddingBottom: 120, flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={color.Primary}
          barStyle={"light-content"}
        />

        <Profile profile={{}} />
        <View style={{ height: 12 }} />
        <View
          style={[
            {
              // flexDirection: "row",
              // alignItems: "center",
              // justifyContent: "space-around",
              backgroundColor: "#fff",
              marginBottom: 12,
              paddingVertical: 12,
              marginHorizontal: 12,
              borderRadius: 12,
            },
            styles.shadow,
          ]}
        >
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                paddingBottom: 8,
                marginBottom: 12,
                paddingHorizontal: 12,
                borderBottomWidth: 1,
                borderColor: "#f2f2f2",
                marginLeft: 6,
              },
            ]}
          >
            <Entypo name="clipboard" size={24} color="#d5536b" />
            <Text
              style={{
                fontFamily: "RobotoSlab-Medium",
                fontSize: 15,
                color: "#d5536b",
              }}
            >
              Order History
            </Text>
          </View>
          <View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#fff",
                // marginBottom: 12,
                // paddingVertical: 12,
                // marginHorizontal: 12,
                // borderRadius: 12,
              },
              // styles.shadow,
            ]}
          >
            <View
              style={{ width: 1, height: "100%", backgroundColor: "#fff" }}
            />
            <TouchableOpacity
              style={{ alignItems: "center", width: windowWidth * 0.24 }}
              onPress={() => {
                navigation.navigate("HistoryOrderScreen", {
                  status: "pending",
                });
              }}
            >
              <MaterialIcons
                name="pending-actions"
                size={26}
                color={color.Pending}
              />
              <Text
                style={{
                  color: color.Pending,
                  fontFamily: "RobotoSlab-Medium",
                  fontSize: 15,
                }}
              >
                Pending
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: color.Primary,
              }}
            />
            <TouchableOpacity
              style={{ alignItems: "center", width: windowWidth * 0.24 }}
              onPress={() => {
                navigation.navigate("HistoryOrderScreen", {
                  status: "approved",
                });
              }}
            >
              <Entypo name="box" size={24} color="#64bfee" />
              <Text
                style={{
                  color: "#64bfee",
                  fontFamily: "RobotoSlab-Medium",
                  fontSize: 15,
                }}
              >
                Approved
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1.5,
                height: "100%",
                backgroundColor: color.Primary,
              }}
            />
            <TouchableOpacity
              style={{ alignItems: "center", width: windowWidth * 0.24 }}
              onPress={() => {
                navigation.navigate("HistoryOrderScreen", {
                  status: "shipping",
                });
              }}
            >
              <MaterialIcons
                name="local-shipping"
                size={26}
                color={color.Shipping}
              />
              <Text
                style={{
                  color: color.Shipping,
                  fontFamily: "RobotoSlab-Medium",
                  fontSize: 15,
                }}
              >
                Shipping
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: color.Primary,
              }}
            />
            <TouchableOpacity
              style={{ alignItems: "center", width: windowWidth * 0.24 }}
              onPress={() => {
                navigation.navigate("HistoryOrderScreen", {
                  status: "shipped",
                });
              }}
            >
              <AntDesign name="checkcircle" size={26} color={color.Primary} />
              <Text
                style={{
                  color: color.Primary,
                  fontFamily: "RobotoSlab-Medium",
                  fontSize: 15,
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
            <View
              style={{ width: 1, height: "100%", backgroundColor: "#fff" }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            {
              flexDirection: "row",
              backgroundColor: "#fff",
              marginBottom: 12,
              paddingVertical: 12,
              paddingHorizontal: 12,
              marginHorizontal: 12,
              borderRadius: 12,
              alignItems: "center",
            },
            ,
            styles.shadow,
          ]}
          onPress={() => {
            navigation.navigate("HistoryProductScreen");
          }}
        >
          <FontAwesome5 name="list-alt" size={30} color={color.Primary} />
          <Text
            style={{
              color: color.Primary,
              fontFamily: "RobotoSlab-Medium",
              fontSize: 16,
              marginLeft: 12,
            }}
          >
            History Product
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          logoutUser(dispatch, navigation);
        }}
        style={styles.buttonLogout}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "RobotoSlab-Bold",
            fontSize: 18,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // borderWidth: ,
  },
  buttonLogout: {
    backgroundColor: color.Primary,
    paddingVertical: 12,
    marginVertical: 10,
    marginHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 4,
  },
});
