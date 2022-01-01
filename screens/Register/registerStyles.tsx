import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    regScreen: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    regScroll: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    regBgImage: {
        flex: 2,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    regImage: {
        minWidth: 84,
        minHeight: 84,
        maxWidth: 94,
        maxHeight: 94,
    },
    regTextContainer: {
        height: "auto",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    regTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 21,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    regError: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#FF0000",
    },
    regSubTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    regArea: {
        flex: 3,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    regForm: {
        flex: 1,
        alignItems: "center",
        margin: 20
    },
    regText: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.06,
        letterSpacing: 0.6,
        color: "#1C1427",
    },
    regButtons: {
        marginTop: '5%',
        alignItems: "center",
    }
});