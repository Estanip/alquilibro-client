import React from 'react';
import { ImageBackground, StyleSheet, Button, Alert, Pressable, Text } from 'react-native';
import { View } from './Themed';

export default function HomeCards() {
    return (
        <View style={styles.cardsContainer}>
            <View
                style={styles.filterContainer}>
                <ImageBackground
                    style={styles.img}
                    source={require('../assets/images/filtros_avanzados.png')}
                    resizeMode='cover'
                >
                    <Pressable
                        onPress={() => Alert.alert("Filter Button")}
                        style={styles.btnContainer}
                    >
                        <Text
                            style={styles.textButton}
                        >FILTROS AVANZADOS</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            <View style={styles.recomendedContainer}>
                <ImageBackground
                    style={styles.img}
                    source={require('../assets/images/recomendados.png')}
                    resizeMode='cover'
                >
                    <Pressable
                        onPress={() => Alert.alert("Recomended Button")}
                        style={styles.btnContainer}
                    >
                        <Text
                            style={styles.textButton}
                        >RECOMENDADOS</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </View >
    )
};


const styles = StyleSheet.create({
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 152,
        top: '34%',
        backgroundColor: 'transparent'
    },
    filterContainer: {
        width: '45%',
        height: '100%',
        left: '10%'
    },
    recomendedContainer: {
        width: '45%',
        height: '100%',
        left: '17%'
    },
    img: {
        height: '100%',
        width: '100%'
    },
    btnContainer: {
        backgroundColor: '#CCFFBD',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '25%',
        top: '80%'
    },
    textButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    }
});