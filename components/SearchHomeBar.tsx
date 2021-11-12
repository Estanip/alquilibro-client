import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};


export default function SearchHomeBar() {

    useFonts(customFonts);

    return (
        <View style={styles.searchContainer} >
            <Icon
                name='search'
                color='#000'
                onPress={() => Alert.alert("Search Button")}
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
        position: 'absolute',
        flexDirection: 'row',
        width: '80%',
        height: 40,
        left: '10%',
        top: '13%',
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