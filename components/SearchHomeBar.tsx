import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { View } from './Themed';


const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};


export default function SearchHomeBar() {

    useFonts(customFonts);

    return (
    <View style={styles.searchContainer} >
        <SearchBar
            platform="default"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.searchBar}
            lightTheme
            inputStyle={styles.inputSearch}
            placeholder="Buscá tu libro..."
            placeholderTextColor="#FFFFFF"
        />
    </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        width: 382,
        height: 53,
        left: 17,
        top: 185
    },
    containerStyle: {
        position: 'absolute',
        left: '0%',
        top: '0%',
        right: '0%',
        bottom: '0%',
        borderRadius: 10
    },
    searchBar: {
        position: 'absolute',
        left: '19.73%',
        top: '13.33%',
        right: '31.48%',
        bottom: '23.24%'
    },
    inputSearch: {
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        opacity: 1
    }
});