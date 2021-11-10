import * as React from 'react';

import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
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
        width: 411,
        height: 731,
        backgroundColor: '#FFFFFF'
    },
    titleOneContainer: {
        position: 'absolute',
        width: 379,
        height: 24,
        top: '5%',
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
        top: '25%',
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
        top: '60%',
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