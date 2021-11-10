import React from 'react';
import { ImageBackground, StyleSheet, Button, Alert } from 'react-native';
import { View } from './Themed';

export default function HomeCards() {
    return (
        <View style={styles.cardsContainer}>
            <View
                style={styles.filterContainer}>
                <ImageBackground
                    style={styles.img}
                    source={require('../assets/images/filtros_avanzados.png')}
                    resizeMode='contain'
                >
                    <View style={styles.btnContainer}>
                        <Button
                            color="#34495e" onPress={() => Alert.alert("Esto es un boton")}
                            title="FILTROS AVANZADOS"
                        ></Button>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.recomendedContainer}>
                <ImageBackground
                    style={styles.img}
                    source={require('../assets/images/recomendados.png')}
                    resizeMode='contain'
                >
                    <View style={styles.btnContainer}>
                        <Button
                            color="#34495e" onPress={() => Alert.alert("Esto es un boton")}
                            title="RECOMENDADOS"
                        ></Button>
                    </View>
                </ImageBackground>
            </View>
        </View >
    )
};


const styles = StyleSheet.create({
    cardsContainer: {
        position: 'absolute',
        width: '100%',
        height: 152,
        top: '32%'
    },
    filterContainer: {
        position: 'absolute',
        width: '45%',
        height: '100%',
        left: 18
    },
    recomendedContainer: {
        position: 'absolute',
        width: '45%',
        height: '100%',
        left: 213
    },
    img: {
        height: '100%',
        width: '100%'
    },
    btnContainer: {
        position: 'absolute',
        width: '99%',
        top: '79%'
    }
});