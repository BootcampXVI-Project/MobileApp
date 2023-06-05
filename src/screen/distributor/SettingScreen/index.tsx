import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from "react-native";
import React from "react";
import { logoutUser } from "../../../api/controller/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Profile from "../../../components/Profile";
import { color } from "../../../utils";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const SettingScreen = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={color.Primary}
        barStyle={"light-content"}
      />

      <Profile profile={{}} />
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
    </ScrollView>
    // </SafeAreaView>
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
});
