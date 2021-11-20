import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';



export default function OfferDetailCard() {
    return (
        <View
            style={styles.offerCardContainer}
        >
            <Image
                style={styles.img}
                source={require('../assets/images/recomendados.png')}
            />

            <Text
                style={styles.text}
            >{"JUAN CARLOS\nDetalle"}</Text>
            <Text
                style={styles.text}
            >{"JUAN CARLOS\nDetalle"}</Text>

            <Entypo name="edit" size={24} color="black" style={{marginLeft: 10, alignSelf: 'center'}} />

        </View>
    )
}

const styles = StyleSheet.create({
    offerCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        top: '5%',
        padding: 15,
        backgroundColor: '#CCFFBD',
        width: '80%',
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    img: {
        width: '20%',
        height: 60,
        marginRight: 10
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427",
        marginRight: 10
    }
})