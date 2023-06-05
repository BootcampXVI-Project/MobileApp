import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { titleCase } from "../../helper/titleCase";
import { color } from "../../utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import NullAvatar from "../../../assets/nullavatar.png";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { convertPhoneNumberTo0 } from "../../helper/convertPhonenumber";

type Props = {
  profile: any;
};

const Profile: React.FC<Props> = ({ profile }) => {
  const navigation = useNavigation();
  const HEADER_HEIGHT_EXPANDED = 20;
  const HEADER_HEIGHT_NARROWED = Platform.OS === "ios" ? 60 : 8;
  const user = useSelector((state: any) => state.auth.user);

  const getPermissionAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
  };

  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    await getPermissionAsync;
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={[styles.container, { paddingTop: HEADER_HEIGHT_NARROWED }]}
      //   onPress={() => {
      //     navigation.navigate("Profile", {
      //       screen: "InformationProfile",
      //       initial: false,
      //       params: { profile },
      //     });
      //   }}
    >
      <TouchableOpacity onPress={pickImage}>
        <Avatar.Image
          // style={styles.Image}
          size={160}
          source={{
            uri: !image
              ? "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/341705679_1287746178476881_2371243465129259174_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NDvMwKLYG3EAX8EUJm-&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDbGToEXGsCcHRfWyr3AzGgaTiWYcwecQ-VCIuOz76gDg&oe=647A8995"
              : image,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.name}>
        {/* {titleCase(user?.userName)} */}
        {convertPhoneNumberTo0(user?.phoneNumber)}
      </Text>

      <Text style={styles.position}>{user?.email}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.Primary,
    paddingHorizontal: 18,
    paddingVertical: 12,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container_child1: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    marginVertical: 2,
    fontFamily: "RobotoSlab-Medium",
    fontSize: 20,
    color: "#fff",
  },
  position: {
    marginVertical: 2,
    fontFamily: "RobotoSlab-Medium",
    fontSize: 16,
    color: "#fff",
  },
});
