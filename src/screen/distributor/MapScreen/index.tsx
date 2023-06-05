import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY, getDelta } from "../../../utils";
import MapViewDirections from "react-native-maps-directions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Platform } from "react-native";

type Props = {
  currentLocation: {
    longitude: number;
    latitude: number;
  };
  retailer: {
    longitude: number;
    latitude: number;
  };
};
type Coordinates = {
  latitude: number;
  longitude: number;
};

const MapScreen = (props: Props) => {
  const navigation = useNavigation();

  const route = useRoute();
  // console.log(route.params);
  const coordinates: Coordinates[] = route.params as Coordinates[];
  const { latitudeDelta, longitudeDelta } = getDelta(coordinates);

  return (
    <>
      <MapView
        style={[styles.map, styles.shadow]}
        initialRegion={{
          latitude: coordinates[0]?.latitude,
          longitude: coordinates[0]?.longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
      >
        {coordinates.map(
          (coordinate, index) => (
            <Marker key={`coordinate_${index}`} coordinate={coordinate} />
          ) // eslint-disable-line react/no-array-index-key
        )}

        {coordinates.length === 2 && (
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#67d753"
          />
        )}
      </MapView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.headerButton,
          {
            position: "absolute",
            top: Platform.OS === "ios" ? 60 : 12,
            left: 4,
          },
        ]}
      >
        <FontAwesome name="angle-left" size={24} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default MapScreen;
