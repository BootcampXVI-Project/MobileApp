import styles from "./style";
import Loading from "../Load";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { getGeolocation } from "../../helper/getGeolocation";
import { GOOGLE_MAPS_APIKEY, color, getDelta } from "../../utils";
import { Text, TouchableOpacity, View, Image, Platform } from "react-native";

type Props = {
  retailerAddress?: string;
};

const coordinates = [
  {
    latitude: 16.011458606786725,
    longitude: 108.1922247401772,
  },
  {
    latitude: 15.963855914235749,
    longitude: 108.2093204610597,
  },
];

type Location = {
  longitude?: number;
  latitude?: number;
};

const MapComponent: React.FC<Props> = ({ retailerAddress }) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { latitudeDelta, longitudeDelta } = getDelta(coordinates);

  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else {
        setErrorMsg(null);
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const [retailerLocation, setRetailerLocation] = useState<Location>({
    longitude: undefined,
    latitude: undefined,
  });
  useEffect(() => {
    getGeolocation(retailerAddress || "")
      .then((result) => {
        if (result) {
          setRetailerLocation(result);
        } else {
          console.log("Không tìm thấy kết quả.");
        }
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      })
      .finally(() => {});
  }, []);

  // console.log(location);

  const handlePress = () => {
    // Xử lý sự kiện onPress
    navigation.navigate("MapScreen", coordinates);
  };
  return (
    <View style={[styles.container, styles.shadow]}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
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
          {/* <Marker
            coordinate={{
              latitude: coordinates[0]?.latitude,
              longitude: coordinates[0]?.longitude,
            }}
          /> */}
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
      ) : (
        <Loading />
      )}
      <TouchableOpacity
        style={styles.inforMap}
        activeOpacity={1}
        onPress={handlePress}
      >
        <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>
          From <Text style={{ color: color.Primary }}>You</Text> to{" "}
          <Text style={{ color: color.Primary }}>Retailer</Text>
        </Text>
        <Text
          style={{ fontFamily: "RobotoSlab-VariableFont_wght", fontSize: 15 }}
        >
          223-225-227 Nguyen Phuoc Lan, Da Nang
        </Text>
        <Text
          style={{
            fontFamily: "RobotoSlab-Medium",
            fontSize: 15,
            color: color.Primary,
          }}
        >
          [Eureka] Tuan (Eden) D.T. HUYNH
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapComponent;
