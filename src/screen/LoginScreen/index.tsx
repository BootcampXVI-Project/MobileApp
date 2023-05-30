import { Image, ScrollView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import logo from "../../../assets/logo.png";
import styles from "./style";
import LoginInput from "../../components/Input";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AwesomeButton from "react-native-really-awesome-button";
import { color, windowHeight, windowWidth } from "../../utils";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/controller/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

type Props = {};
type FormValues = {
  // Định nghĩa các trường của mẫu và kiểu dữ liệu tương ứng
  // Ví dụ:
  username: string;
  password: string;
};
const PHONE_REGEX = /^\+[1-9]\d{1,14}$/;

const Login = (props: Props) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch();

  const onSubmit = (data: FormValues) => {
    // Xử lý logic khi submit form
    // console.log(data);
    loginUser(data, dispatch, navigation);
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", zIndex: 0, paddingTop: 60 }}
    >
      <ScrollView style={{ flex: 1, zIndex: 2 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.nameApp}>One Commune - One Product</Text>
        </View>
        <View style={styles.boxInput}>
          <LoginInput
            control={control}
            iconClass={FontAwesome5}
            iconName={"phone-alt"}
            label={"Phone number"}
            secureTextEntry={false}
            name="phoneNumber"
            rules={{
              required: "Email is required",
              pattern: { value: PHONE_REGEX, message: "Phone is invalid" },
            }}
          />
          <LoginInput
            control={control}
            iconClass={FontAwesome5}
            iconName={"lock"}
            label={"Password"}
            secureTextEntry={true}
            name="password"
            rules={{
              required: "Email is required",
              minLength: {
                value: 3,
                message: "Password must be minimum 3 characters long",
              },
            }}
          />
        </View>
        <View style={styles.boxForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        <View style={styles.button}>
          <AwesomeButton
            backgroundColor={color.Primary}
            textColor="#fff"
            backgroundActive="#8CEC89"
            backgroundShadow="#8CEC89"
            backgroundProgress="#8CEC89"
            backgroundDarker="#8CEC89"
            textSize={24}
            borderRadius={20}
            width={windowWidth * 0.8}
            height={windowHeight * 0.07}
            onPressIn={handleSubmit(onSubmit)}
          >
            Login
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
