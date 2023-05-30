import { StyleSheet } from "react-native";
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#fff",
    borderColor: color.Primary,
    borderRadius: 10,
    borderWidth: 2,
  },
  eyeButton: {
    position: "absolute",
    right: windowWidth * 0.056,
    top: windowHeight * 0.028,
  },
});

export default styles;
