import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 30
    },
    ratingText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    userNameText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 14,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    detailText: {
        alignSelf: 'center',
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 11,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    priceText: {
        alignSelf: 'center',
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    btnsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
    },
    btnEdit: {
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#1C1427',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '45%',
        padding: 10,
        marginRight: 10
    },
    btnContinue: {
        backgroundColor: '#7ECA9C',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 4,
        width: '45%',
        padding: 10
    },
    editText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    continueText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    screen: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 8
    }
});