import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logScreen: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    logScroll: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    logBgImage: {
        flex: 2,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    logImage: {
        minWidth: 84,
        minHeight: 84,
        maxWidth: 94,
        maxHeight: 94,
    },
    logTextContainer: {
        height: "auto",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    logTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 21,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    logError: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#FF0000",
    },
    logSubTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#1C1427",
    },
    logArea: {
        flex: 5,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    logForm: {
        flex: 1,
        alignItems: "center",
        margin: 20
    },
    logText: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.06,
        letterSpacing: 0.6,
        color: "#1C1427",
    },
    logButtons: {
        height: '25%',
        marginTop: '5%',
        alignItems: "center",
        justifyContent: "space-evenly"
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
    logVisitArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logVisitText: {
        fontWeight: "bold",
        marginBottom: '3%',
        fontSize: 14,
        lineHeight: 18.75,
        letterSpacing: 0.5,
        color: "#1C1427",
        textAlign: "center"
    },
});