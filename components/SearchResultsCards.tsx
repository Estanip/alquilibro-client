import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SearchResultsCards() {

    return (
        <View style={styles.resultsContainer}>
            <Image
                style={styles.image}
                source={require('../assets/images/recomendados.png')}></Image>
            <View
                style={styles.textContainer}
            >
                <Text style={styles.author} >Alejandro Dolina</Text>
                <Text style={styles.title} >Cronicas del Angel Gris</Text>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="map-marker" style={{marginRight: 4, marginLeft: -3}} size={20} color="#BEBEBE" />
                    <Text style={styles.description} >850 mts - $150 por día</Text>
                </View>
            </View>
            <MaterialIcons name="favorite-outline" size={24} color="black" style={{ width: '10%', alignSelf: 'center', marginRight: 5 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    resultsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 5,
        borderBottomColor: '#BEBEBE',
        borderBottomWidth: 1
    },
    image: {
        width: '20%',
        height: '100%',
        marginRight: 10,
        alignSelf: 'center'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },
    author: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 10,
        letterSpacing: 0.75,
        color: "#1C1427"
    },
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.75,
        color: "#1C1427",
        marginTop: 3
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 3
    },
    description: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#BEBEBE"
    }
})