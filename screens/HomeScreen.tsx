import * as React from 'react';

import { StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { View, Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import SearchHomeBar from '../components/SearchHomeBar';
import { useFonts } from 'expo-font';
import HomeCards from '../components/HomeCards';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

export default function Home() {

    useFonts(customFonts);

    return (
        <View style={styles.homeContainer}>
            <NavBar />
            <View style={styles.titleOneContainer}>
                <Text style={styles.titleOne}>
                    ¿Buscas un libro en especial?
                </Text>
            </View>
            <SearchHomeBar />
            <View style={styles.titleTwoContainer}>
                <Text style={styles.titleTwo}>
                    ¿No sabés qué leer?
                </Text>
            </View>
            <View style={styles.titleThree}>
                <Text style={styles.titleThree}>
                    ¿Querés alquilar tus libros?
                </Text>
            </View>
            <HomeCards />
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        position: 'relative',
        width: 411,
        height: 731,
        backgroundColor: '#FFFFFF'
    },
    titleOneContainer: {
        position: 'absolute',
        width: 379,
        height: 24,
        top: 140,
        left: 16
    },
    titleOne: {
        position: 'absolute',
        left: '3.89%',
        right: '3.89%',
        top: '39.95%',
        botton: '56.77%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 24,
        textAlign: 'center',
        color: '#1C1427',
        letterSpacing: 0.15
    },
    titleTwoContainer: {
        position: 'absolute',
        width: 379,
        height: 24,
        top: 292,
        left: 16
    },
    titleTwo: {
        position: 'absolute',
        left: '3.89%',
        right: '3.89%',
        top: '39.95%',
        botton: '56.77%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 24,
        textAlign: 'center',
        color: '#1C1427',
        letterSpacing: 0.15
    },
    titleThreeContainer: {
        position: 'absolute',
        width: 379,
        height: 24,
        top: 545,
        left: 20
    },
    titleThree: {
        position: 'absolute',
        left: '3.89%',
        right: '3.89%',
        top: '74.56%',
        botton: '22.16%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 24,
        textAlign: 'center',
        color: '#1C1427',
        letterSpacing: 0.15
    }
});