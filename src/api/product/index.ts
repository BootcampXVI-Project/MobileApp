import { createAPI } from "../axiosConfig";
import { loadDone, loadStart } from "../../redux/features/load";

export const getProductById = async (
  id: string,
  token: string,
  dispatch: any
) => {
  try {
    const api = createAPI(token);

    const res = await api.get(`/product/${id}/`);

    if (res.status === 200) {
      return res?.data?.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.log("Server response error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }

    dispatch(loadDone());
  }
};
