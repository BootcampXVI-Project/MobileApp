import { createAPI } from "../axiosConfig";
import { loadDone, loadStart } from "../../redux/features/load";
import { OrderForCreate } from "../../types/models";

export const getAllOrders = async (
  token: any,
  dispatch: any,
  status: string
) => {
  dispatch(loadStart());
  try {
    const api = createAPI(token);
    const res = await api.get(
      `/order/all/of-retailer?status=${status.toUpperCase()}`
    );

    if (res.status === 200) {
      dispatch(loadDone());
      // console.log(res.data.data);

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

    dispatch(loadDone());
  }
};

export const getOrderById = async (
  id: string,
  token: string,
  dispatch: any
) => {
  try {
    const api = createAPI(token);

    const res = await api.get(`/order/${id}/`);

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

export const getOrdersOfRetailerByStatus = async (
  status: string,
  token: string,
  dispatch: any
) => {
  try {
    const api = createAPI(token);

    const res = await api.get(`/order/all/of-retailer?status=${status}/`);

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

export const getOrdersOfDistributorByStatus = async (
  status: string,
  token: string,
  dispatch: any
) => {
  try {
    const api = createAPI(token);
    console.log(status);

    const res = await api.get(`/order/all/of-distributor?status=${status}`);

    if (res.status === 200) {
      return res?.data?.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.log("distributor Server response error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }

    dispatch(loadDone());
  }
};

export const createOrder = async (
  order: OrderForCreate,
  token: string,
  dispatch: any
) => {
  try {
    // dispatch(loadStart());

    const api = createAPI(token);
    const res = await api.post(`/order/create`, { orderObj: order });

    if (res.status === 200) {
      console.log("ORDER CREATE", res?.data);

      return res?.data;
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
