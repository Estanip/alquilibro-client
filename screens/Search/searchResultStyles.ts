import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerSearchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10
    },
    textButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#1C1427",
        textAlign: 'center'
    },
    filterButton: {
        backgroundColor: '#7ECA9C',
        padding: 10,
        width: '50 %',
        alignSelf: 'center',
        borderRadius: 4
    },
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        width: '70%',
        alignSelf: 'center',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        backgroundColor: '#CCFFBD'
    }
});