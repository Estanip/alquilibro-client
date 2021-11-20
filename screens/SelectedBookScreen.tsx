import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SliderBooks from '../components/sliderBooks';

import BookCardResult from '../components/BookCardResult';

export default function SelectedBookScreen() {

    interface IList {
        title: string;
        image: string;
    }

    const booksTest: IList[] = [
        {
            title: 'Libro 2',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        {
            title: 'Libro 3',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        {
            title: 'Libro 4',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        {
            title: 'Libro 5',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
    ]

    return (
        <ScrollView
            style={{backgroundColor:'#FFF'}}
        >
            <BookCardResult />
            <View
                style={styles.ratingContainer}
            >
                <Text
                    style={styles.ratingText}
                >USUARIO:
                </Text>

                <Text
                    style={styles.userNameText}
                >
                    {" "}ferca {" "}

                </Text>
                <FontAwesome name="star" size={14} style={{ alignSelf: 'center' }} />
                <FontAwesome name="star" size={14} style={{ alignSelf: 'center' }} />
                <FontAwesome name="star" size={14} style={{ alignSelf: 'center' }} />
                <FontAwesome name="star" size={14} style={{ alignSelf: 'center' }} />
                <FontAwesome name="star" size={14} style={{ alignSelf: 'center' }} />
            </View>

            <View
                style={styles.detailContainer}
            >
                <Text
                    style={styles.detailText}
                >
                    Alquiler desde el 03-07-2021 al 11-07-2021.
                </Text>
                <Text
                    style={styles.priceText}
                >
                    {" "} Total: $105
                </Text>
            </View>

            <View
                style={styles.btnsContainer}
            >
                <Pressable
                    onPress={() => Alert.alert("Button Editar Fecha")}
                    style={styles.btnEdit}
                >
                    <Text
                        style={styles.editText}
                    >
                        EDITAR FECHAS
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => Alert.alert("Button Editar Fecha")}
                    style={styles.btnContinue}
                >
                    <Text
                        style={styles.continueText}
                    >
                        CONTINUAR
                    </Text>
                </Pressable>
            </View>

            <View style={styles.screen}>
                <SliderBooks title={'Más publicaciones del usuario:'} books={booksTest} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        flex:1,
        marginTop: 30,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 8
    }
})