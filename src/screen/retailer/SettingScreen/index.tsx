import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from "react-native";
import React from "react";
import { color } from "../../../utils";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../api/auth";
import Profile from "../../../components/Profile";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              paddingVertical: 12,
              marginHorizontal: 12,
              borderRadius: 12,
              marginBottom: 12,
            },
            styles.shadow,
          ]}
          onPress={() => {
            navigation.navigate("HistoryOrderScreen");
          }}
        >
          <Text
            style={{
              color: color.Primary,
              fontFamily: "RobotoSlab-Bold",
              fontSize: 18,
            }}
          >
            Your order
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
          Logout
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
