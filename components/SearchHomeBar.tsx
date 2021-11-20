import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};


export default function SearchHomeBar() {

    const navigation = useNavigation();
    useFonts(customFonts);

    return (
        <View style={styles.searchContainer} >
            <Icon
                name='search'
                color='#000'
                onPress={() => navigation.navigate("SearchResults")}
                size={20}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Buscá tu libro..."
                contextMenuHidden={true}
                selectionColor="black"
                keyboardType='default'
                maxLength={40}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        height: 40,
        top: '15%',
        padding: 10,
        backgroundColor: '#ECEFF0',
        alignItems: 'center',
        alignContent: 'center'
    },
    searchInput: {
        flex: 1,
        margin: 0,
        height: 40,
        padding: 10
    }
});