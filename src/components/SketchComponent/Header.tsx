import React, { MutableRefObject } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import type { SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { state } from "./store";
import Util from "./utils";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface Props {
  canvasRef: MutableRefObject<SketchCanvasRef | null>;
  setSignature: any;
}

const Header: React.FC<Props> = ({ canvasRef, setSignature }) => {
  /**
   * Reset the canvas & draw state
   */
  const navigation = useNavigation();

  const reset = () => {
    canvasRef.current?.reset();
    state.strokeColor = "black";
    state.strokeWidth = 8;
  };

  const save = () => {
    const image = canvasRef.current?.toImage()?.encodeToBase64();
    if (image) {
      setSignature(image);
      navigation.goBack();
    }
  };

  const undo = () => {
    canvasRef.current?.undo();
  };

  return (
    <View
      style={{
        height: 50,
        width: "100%",
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.headerButton]}
      >
        <FontAwesome name="angle-left" size={24} color="black" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={undo}
          style={[styles.button, { marginRight: 10 }]}
        >
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={save}
          style={[styles.button, { marginLeft: 10 }]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    backgroundColor: "white",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    ...Util.getElevation(1),
  },
  buttonText: {
    color: "black",
  },
  headerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Header;
