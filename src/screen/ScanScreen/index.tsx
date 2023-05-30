import { Button, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { color, windowHeight, windowWidth } from "../../utils";

const ScanScreen = () => {
  const [hasPermission, setHasPermission]: [
    string | boolean | null,
    React.Dispatch<React.SetStateAction<string | boolean | null>>
  ] = useState<string | boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }: { type: any; data: any }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  // Check permissions and return the screens
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            height: windowHeight,
            width: Platform.OS !== "ios" ? windowWidth * 1.38 : "100%",
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Primary,
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 24,
    margin: 20,
  },
  barcodebox: {
    // alignItems: "center",
    // justifyContent: "center",
    height: "85%",
    width: "90%",
    overflow: "hidden",
    // borderRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    top: -20,

    backgroundColor: "tomato",
  },
});
