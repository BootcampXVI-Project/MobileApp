import React from "react";
import styles from "./style";
import { Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  location: {
    longitude: number;
    latitude: number;
  };
};

const MapScreen = (props: Props) => {
  const navigation = useNavigation();

  const route = useRoute();
  // console.log(route.params);
  const coordinates: Props = route.params as Props;
  // const { latitudeDelta, longitudeDelta } = getDelta(coordinates);

  return (
    <>
      <MapView
        style={[styles.map, styles.shadow]}
        initialRegion={{
          latitude: coordinates?.location.latitude,
          longitude: coordinates?.location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={coordinates.location} />
        {/* {coordinates.map(
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
        )} */}
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
