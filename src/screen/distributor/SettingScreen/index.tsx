import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
