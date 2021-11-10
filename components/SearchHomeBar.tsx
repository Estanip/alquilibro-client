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
            inputContainerStyle={{height: 30}}
            platform="default"
            placeholder="Buscá tu libro..."
        />
    </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        width: '80%',
        height: 40,
        left: '10%',
        top: '13%'
    }
});