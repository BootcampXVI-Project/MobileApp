import { loginFailed, loginStart, setUser } from "../../../redux/features/auth";
import { instance as api } from "../../initial";

export const loginUser = async (user: any, dispatch: any, navigation: any) => {
  dispatch(loginStart());
  try {
    console.log(user);
    const res = await api.post("/auth/login", user);
    console.log(res.data.data);
    dispatch(setUser(res.data.data));
    navigation.navigate("Main", {
      screen: "Home",
      initial: false,
    });
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
