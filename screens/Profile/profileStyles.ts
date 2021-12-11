import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    scroll: {
        flexGrow: 1,
    },
    misDatos: {
        flexDirection: "row",
        alignItems: "center",
    },
    misDatosText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#000000",
        paddingHorizontal: 5,
    },
    profileInfo: {
        flex: 7,
        justifyContent: "space-evenly",
    },
});
