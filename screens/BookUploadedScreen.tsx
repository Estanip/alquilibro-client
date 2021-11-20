import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import OfferDetailCard from '../components/OfferDetailCard';


export default function BookUploadedScreen() {
    return (
        <>
        <View
            style={styles.titleContainer}
        >
            <View
                style={styles.iconContainer}
            >
                <Entypo name="upload-to-cloud" size={34} color="black" style={{marginRight: 10, marginBottom: 10}} />
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
    }
})