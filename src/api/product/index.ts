import { createAPI } from "../axiosConfig";
import { loadDone, loadStart } from "../../redux/features/load";

export const getProductById = async (
  id: string,
  token: string,
  dispatch: any
) => {
  try {
    const api = createAPI(token);
    // console.log(id);

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

    // dispatch(loadDone());
  }
};
export const getAllProducts = async (token: any, dispatch: any) => {
  // dispatch(loadStart());
  try {
    const api = createAPI(token);
    const res = await api.get("/product/all");

    if (res.status === 200) {
      // dispatch(loadDone());
      return res.data.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.log("Server response error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }

    // dispatch(loadDone());
  }
};

export const getProductsPopular = async (token: any, dispatch: any) => {
  // dispatch(loadStart());
  try {
    const api = createAPI(token);
    const res = await api.get("/retailer/product/popular-ordered");

    if (res.status === 200) {
      // dispatch(loadDone());
      return res.data.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.log("Server response error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }

    // dispatch(loadDone());
  }
};

export const getProductsManufactured = async (token: any, dispatch: any) => {
  // dispatch(loadStart());
  try {
    const api = createAPI(token);
    const res = await api.get("/retailer/product/manufactured");

    if (res.status === 200) {
      // dispatch(loadDone());
      return res.data.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.log("Server response error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }
  }
};
