import React from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import OfferDetailCard from '../components/OfferDetailCard';


export default function UploadedBookScreen() {

    const navigation = useNavigation();

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
    buttonContainer: {
        top: '75%',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    imageButton: {
        padding: 10,
        width: '45%',
        borderColor: '#1C1427',
        borderStyle: 'solid',
        borderWidth: 1
    },
    imageText: {
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1C1427',
        letterSpacing: 0.15
    },
    uploadButton: {
        marginLeft: 14,
        padding: 10,
        width: '45%',
        borderRadius: 5,
        backgroundColor: '#7ECA9C'
    },
    uploadText: {
        fontFamily: 'Roboto',
        alignSelf: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#1C1427',
        letterSpacing: 0.15
    }
})