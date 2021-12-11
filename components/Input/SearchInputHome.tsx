import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SearchInputHome() {

    const navigation = useNavigation();

    return (
        <View style={styles.searchContainer} >

            <FontAwesome
                name="search"
                size={20}
                color="black"
                onPress={() => navigation.navigate("SearchResults")}
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
        width: '90%',
        height: 40,
        top: '20%',
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