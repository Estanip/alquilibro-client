import React from 'react'
import { Image, StyleSheet, View, Text, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function UploadedBookCard() {
    return (
        <View
            style={styles.offerCardContainer}
        >
            <Image
                style={styles.img}
                source={require('../../assets/images/recomendados.png')}
            />

            <Text
                style={styles.text}
            >{"Cronicas del Angel Gris\nAlejandro Dolina"}</Text>
            <Text
                style={styles.text}
            >{"Precio por día\n$35"}</Text>
            <Entypo name="edit" size={24} color="black" style={{alignSelf: 'center', width: '10%', marginLeft: 10}} onPress={() => Alert.alert("Edit Button")} />

        </View>
    )
}

const styles = StyleSheet.create({
    offerCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '50%',
        padding: 10,
        height: 100,
        width: '95%',
        backgroundColor: '#CCFFBD'
    },
    img: {
        width: '15%',
        height: '80%',
        alignSelf: 'center',
        marginRight: 15
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.50,
        color: "#1C1427",
        marginRight: 5
    }
})