import React, {cloneElement, useState} from 'react';
import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import SearchResultsCards from '../components/SearchResultsCards';
import { CheckBox } from 'react-native-elements';

export default function SearchResultScreen() {


    return (
        <ScrollView
            style={{ backgroundColor: '#FFF' }}
        >
            <View
                style={styles.headerSearchContainer}
            >
                <AntDesign name="calendar" size={30} color="black" style={{ width: '25 %', left: '120%', alignSelf: 'center' }} />
                <Feather name="map-pin" size={30} color="black" style={{ width: '25 %', left: '90%', alignSelf: 'center' }} />
                <Pressable
                    style={styles.filterButton}
                >
                    <Text
                        style={styles.textButton}
                    >
                        APLICAR FILTROS
                    </Text>
                </Pressable>
            </View>
            <View
                style={styles.filterContainer}
            >
                <CheckBox 
                    title="Precio"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#7ECA9C'
                    containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                />
                <CheckBox 
                    title="Cercania"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#7ECA9C'
                    containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                />
            </View>
            <SearchResultsCards />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerSearchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10
    },
    textButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#1C1427",
        textAlign: 'center'
    },
    filterButton: { 
        backgroundColor: '#7ECA9C',
        padding: 10, 
        width: '50 %',
        alignSelf: 'center', 
        borderRadius: 4 
    },
    filterContainer: {
        display: 'flex', 
        flexDirection:'row', 
        marginTop: 20,
        marginBottom: 10,
        width: '70%', 
        alignSelf: 'center',
        height: 60,
        borderRadius: 6,
        justifyContent:'center',
        backgroundColor: '#CCFFBD'
    }
})