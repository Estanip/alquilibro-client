import React from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import OfferDetailCard from '../components/OfferDetailCard';


export default function UploadedBookScreen() {
    return (
        <>
            <View
                style={styles.titleContainer}
            >
                <View
                    style={styles.iconContainer}
                >
                    <Entypo name="upload-to-cloud" size={34} color="black" style={{ marginRight: 10, marginBottom: 10 }} />
                    <AntDesign name="checkcircle" size={34} color="black" />
                </View>

                <Text
                    style={styles.titleText}
                >{"FELICITACIONES!\nSUBISTE UN NUEVO LIBRO CON EXITO!"}</Text>
            </View>

            <View
                style={styles.offerDetailContainer}
            >
                <Text
                    style={styles.offerText}
                >Ya estas ofrenciendo tu libro: </Text>

                <OfferDetailCard />

            </View>

            <View
                style={styles.buttonsContainer}
            >

                <Pressable
                    onPress={() => Alert.alert("Upload Image")}
                    style={styles.imageButton}
                >

                    <Text
                        style={styles.imageText}
                    >
                       MIS LIBROS SUBIDOS
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => Alert.alert("SUBIR MAS")}
                    style={styles.uploadButton}
                >
                    <Text
                        style={styles.uploadText}
                    >
                        SUBIR MAS LIBROS
                    </Text>
                </Pressable>


            </View>

        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        top: '10%'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    titleText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1.25,
        color: "#1C1427",
        textAlign: 'center'
    },
    offerDetailContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        top: '25%'
    },
    offerText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1.25,
        color: "#1C1427",
        textAlign: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '70%'
    },
    imageButton: {
        padding: 10,
        width: '43%',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1
    },
    imageText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#1C1427',
        letterSpacing: 0.15,
        alignSelf: 'center'
    },
    uploadButton: {
        marginLeft: 14,
        padding: 10,
        width: '43%',
        backgroundColor: '#7ECA9C',
        borderRadius: 5
    },
    uploadText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#1C1427',
        letterSpacing: 0.15,
        alignSelf: 'center'
    },
})