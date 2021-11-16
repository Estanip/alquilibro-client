import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function BookCardResult() {
    return (
        <View 
            style={styles.cardBBookContainer}
        >
            <Image 
                style={styles.img}
                source={require('../assets/images/recomendados.png')}
            >
            </Image>
            <View
                style={styles.textContainer}
            >
                <Text
                    style={styles.bookTitle}
                >Cronicas del Angel Gris</Text>
                <Text
                    style={styles.bookAuthor}
                >Alejandro Dolina</Text>
                <Text>
                    {'Editorial: Colihue SRL\nIdioma: Español\nGenero: Ficcion\nEstado: Usado - Regular\n700 mts - $15 por día'}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBBookContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#CCFFBD',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10
    },
    img: {
        width: '25%',
        marginRight: 10
    },
    textContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    bookTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    },
    bookAuthor: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    }
})