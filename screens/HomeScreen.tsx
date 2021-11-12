import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SearchHomeBar from '../components/SearchHomeBar';
import HomeCards from '../components/HomeCards';
import UploadBook from '../components/UploadBook';

import { RootTabScreenProps } from '../types';
import { useFonts } from 'expo-font';


const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

    useFonts(customFonts);

    return (
        <View style={styles.homeContainer}>
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
            <HomeCards />
            <View style={styles.titleThreeContainer}>
                <Text style={styles.titleThree}>
                    ¿Querés alquilar tus libros?
                </Text>
            </View>
            <UploadBook />
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    titleOneContainer: {
        position: 'absolute',
        width: '100%',
        height: 24,
        top: '6%'
    },
    titleOne: {
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
        width: '100%',
        height: 24,
        top: '30%'
    },
    titleTwo: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 24,
        color: '#1C1427',
        letterSpacing: 0.15
    },
    titleThreeContainer: {
        position: 'absolute',
        width: '100%',
        height: 24,
        top: '73%'
    },
    titleThree: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 24,
        color: '#1C1427',
        letterSpacing: 0.15
    }
});