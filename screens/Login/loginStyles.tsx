import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    bgImage: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    image: {
        minWidth: 84,
        minHeight: 84,
        maxWidth: 94,
        maxHeight: 94,
    },
    textContainer: {
        height: "auto",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 21,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    error: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#FF0000",
    },
    subTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    loginArea: {
        flex: 5,
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    formik: {
        flex: 2,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    registerArea: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    visitArea: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.06,
        letterSpacing: 0.6,
        color: "#1C1427",
    },
    iconsLogin: {
        minHeight: 30,
        justifyContent: "space-around",
        flexDirection: "row",
        width: 100,
    },
    visitText: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18.75,
        letterSpacing: 0.5,
        color: "#1C1427",
        textAlign: "center"
    },
});