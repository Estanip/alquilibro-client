import { StyleSheet } from "react-native";

const textStyle = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 24,
    textAlign: "center",
    color: "#1C1427",
    letterSpacing: 0.15,
  },
  buttonTextBlack: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1.25,
    color: "#1C1427",
  },
  buttonTextWhite: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1.25,
    color: "#FFFFFF",
  },
  text16px: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: "#000000",
  },
  text16pxBold: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: "#000000",
    paddingHorizontal: 5,
  },
  text16pxItalic: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: "#000000",
    paddingHorizontal: 5,
  },
});

export default textStyle;
