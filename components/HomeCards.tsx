import React from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';
import { View } from './Themed';

export default function HomeCards() {
    return (
        <View>
            <Card containerStyle={styles.filterContainer}>
                <Image
                    style={styles.img}
                    source={require('../assets/images/alquilibro-icon.png')}
                />
                <Button
                    titleStyle={styles.title}
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.btn}
                ><Card.Title>FILTROS AVANZADOS</Card.Title></Button>
            </Card>
            <Card containerStyle={styles.recomendedContainer}>
                <Image
                    style={styles.img}
                    source={require('../assets/images/alquilibro-icon.png')}
                />
                <Button
                    titleStyle={styles.title}
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.btn}
                ><Card.Title>FILTROS AVANZADOS</Card.Title></Button>
            </Card>
        </View>

    )
};


const styles = StyleSheet.create({
    filterContainer: {
        position: 'absolute',
        width: 181,
        height: 152,
        left: 18,
        top: 337
    },
    recomendedContainer: {
        position: 'absolute',
        width: 181,
        height: 152,
        left: 213,
        top: 337
    },
    img: {
        position: 'absolute',
        width: 181,
        height: 152,
    },
    buttonContainer: {
        position: 'absolute',
        width: 181,
        height: 47.96,
        top: 103.91,
        bottom: '0.08%',
        backgroundColor: '#CCFFBD'
    },
    btn: {
        position: 'absolute',
        width: 160,
        height: 17,
        top: 17.09,
        left: 9
    },
    title: {
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 1.25,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#1C1427'
    }
});