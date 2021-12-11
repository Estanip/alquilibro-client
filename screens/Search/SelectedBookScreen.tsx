import React from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './selectedBookStyles';
import SliderBooks from '../../components/Slider/SliderBooks';
import SelectedBookCard from '../../components/Card/SelectedBookCard';

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
            <SelectedBookCard />
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
};
