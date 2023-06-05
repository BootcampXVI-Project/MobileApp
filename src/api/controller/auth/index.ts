import { convertPhoneNumberTo84 } from "../../../helper/convertPhonenumber";
import {
  loginFailed,
  loginStart,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  setUser,
} from "../../../redux/features/auth";
import { instance as api } from "../../initial";

export const loginUser = async (user: any, dispatch: any, navigation: any) => {
  dispatch(loginStart());
  try {
    let { phoneNumber, password } = user;
    phoneNumber = convertPhoneNumberTo84(phoneNumber);
    console.log(phoneNumber);
    const res = await api.post("/auth/login", { phoneNumber, password });
    console.log(res.data);
    if (res.status === 200) {
      dispatch(setUser(res.data.data));
      res.data.data?.role === "distributor"
        ? navigation.navigate("MainDistributor", {
            screen: "Home",
            initial: false,
          })
        : navigation.navigate("MainRetailer", {
            screen: "Home",
            initial: false,
          });
    }
  } catch (error: any) {
    if (error.response) {
      // Xử lý lỗi từ phản hồi từ server
      console.log("Server response error:", error.response.data);
    } else if (error.request) {
      // Xử lý lỗi khi không có phản hồi từ server
      console.log("No response from server:", error.request);
    } else {
      // Xử lý các lỗi khác
      console.log("Error:", error.message);
    }
  }
};
export const logoutUser = async (dispatch: any, navigation: any) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    navigation.navigate("Login");
  } catch (error) {
    dispatch(logoutFailed());
  }
};
