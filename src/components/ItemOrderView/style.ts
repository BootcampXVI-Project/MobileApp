import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  logo: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginHorizontal: 4,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  content: {
    marginHorizontal: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  price: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
