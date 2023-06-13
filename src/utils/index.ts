import { Dimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const GOOGLE_MAPS_APIKEY = "AIzaSyCncu1y32EgJiv1FIuP85z0QwM-K00ecgQ";
export const API_URL = "https://0ddeed6f66b9.ngrok.app";
export const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
};
export const getDelta = (
  coordinates: { latitude: number; longitude: number }[]
) => {
  const latitudes = coordinates.map((coord) => coord.latitude);
  const longitudes = coordinates.map((coord) => coord.longitude);
  //
  const maxLatitude = Math.max(...latitudes);
  const minLatitude = Math.min(...latitudes);
  const maxLongitude = Math.max(...longitudes);
  const minLongitude = Math.min(...longitudes);

  const latitudeDelta = maxLatitude - minLatitude;
  const longitudeDelta = maxLongitude - minLongitude;

  return {
    latitudeDelta,
    longitudeDelta,
  };
};

export const color = {
  Primary: "#379634",
  Secondary: "#fbab18",
  Pending: "#e69b07",
  Shipping: "#294268",
};
