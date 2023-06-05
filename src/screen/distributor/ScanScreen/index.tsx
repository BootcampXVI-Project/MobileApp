import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { color, windowHeight, windowWidth } from "../../../utils";
import { Svg, Defs, Rect, Mask, Path } from "react-native-svg";
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
            // borderWidth: ,
            alignItems: "center",
            justifyContent: "center",
            left: Platform.OS === "ios" ? 0 : -30,
          }}
        >
          {/* <View
            style={[
              {
                height: 50,
                width: 50,
                backgroundColor: "red",
                position: "absolute",
              },
            ]}
          /> */}

          <Svg height="100%" width="100%">
            <Defs>
              <Mask id="mask" x="0" y="0" width="100%" height="100%">
                <Rect height="100%" width="100%" fill="#fff" />
                <Rect
                  x={Platform.OS === "ios" ? "18%" : "17%"}
                  y="35%"
                  height="250"
                  width="250"
                  fill="#000"
                />
                <View
                  style={{
                    // backgroundColor: "red",
                    height: "75%",
                    width: Platform.OS === "ios" ? "90%" : "70%",
                    left: Platform.OS === "ios" ? 20 : 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/supply-chain-9ea64.appspot.com/o/mobileApp%2Ficon%20(1).png?alt=media&token=1ea1f969-e902-42f8-9aef-7a60608c0039&_gl=1*14d4s8a*_ga*MjQ1MDY3NTA3LjE2ODQ5MTY0MzI.*_ga_CW55HF8NVT*MTY4NTU5MDU1Ni41LjEuMTY4NTU5MDU5OS4wLjAuMA..",
                    }}
                    style={{ height: 120, width: 120 }}
                  />
                  <Text
                    style={{
                      fontFamily: "RobotoSlab-Bold",
                      fontSize: 16,
                      color: "#fff",
                      alignContent: "center",
                      textAlign: "center",
                    }}
                  >
                    To scan a QR code, make sure that the QR code is within the
                    scanning frame on the screen.
                  </Text>
                </View>
              </Mask>
            </Defs>
            <Rect
              height="100%"
              width="100%"
              fill="rgba(0,0,0,0.6)"
              mask="url(#mask)"
            />
            <Rect
              x={Platform.OS === "ios" ? "18%" : "17%"}
              y="35%"
              height="250"
              width="250"
              strokeWidth={5}
              stroke="#FFF"
              rx="8"
            />
          </Svg>
        </BarCodeScanner>
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
    width: "96%",
    overflow: "hidden",
    // borderRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // alignItems: "center",
    top: -20,
    backgroundColor: "tomato",
  },
});
