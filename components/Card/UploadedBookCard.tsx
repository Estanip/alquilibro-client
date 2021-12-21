import React from 'react'
import { Image, StyleSheet, View, Text, Alert } from 'react-native';
import { useSelector } from "react-redux";

import { Entypo } from '@expo/vector-icons';

export default function UploadedBookCard() {

    const book = useSelector((state: any) => state.book.uploadBook)

    console.log(book)

    return (
        <View
            style={styles.offerCardContainer}
        >
            <Image
                style={styles.img}
                source={require('../../assets/images/recomendados.png')}
            />

            <Text
                style={styles.textTitle}
            >{book.title.toUpperCase()}
            </Text>
            <Text
                style={styles.textTitle}
            >
                {book.author}
            </Text>
            <Text
                style={styles.textPrice}
            >{"Precio por día\n$35"}</Text>
            <Entypo name="edit" size={24} color="black" style={{ alignSelf: 'center', width: '10%', marginLeft: 10 }} onPress={() => Alert.alert("Edit Button")} />

        </View>
    )
}

const styles = StyleSheet.create({
    offerCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    textTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 12,
        letterSpacing: 0.50,
        color: "#1C1427",
        marginRight: 5,
    },
    textPrice: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 12,
        letterSpacing: 0.50,
        color: "#1C1427",
    }
})