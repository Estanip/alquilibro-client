import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { View, Text } from './Themed';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

export default function NavBar() {

useFonts(customFonts);

    return (

        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.iconImage}>
                    <Image style={styles.alquilibroIcon} source={require('../assets/images/alquilibro-icon.png')} >
                    </Image>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Alquilibro</Text>
            </View>
            <View style={styles.shareContainer}>
                <Image source={require('../assets/images/alquilibro-icon.png')} >
                </Image>
            </View>
            <View style={styles.notifyContainer}>
                <Image source={require('../assets/images/alquilibro-icon.png')} >
                </Image>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        width: 411,
        height: 56,
        left: 0,
        top: 24,
        backgroundColor: '#7ECA9C'
    },
    textContainer: {
        position: 'absolute',
        width: 189,
        height: 24,
        left: 86,
        top: 16,
        backgroundColor: '#7ECA9C'
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#1C1427'
    },
    iconContainer: {
        position: 'absolute',
        borderRadius: 50,
        width: 37,
        height: 37,
        left: 16,
        top: 9.5
    },
    iconImage: {
        position: 'absolute',
        left: '3.89%',
        right: '87.1%',
        top: '16.98%',
        bottom: '16.98%',
        backgroundColor: '#FFFFFF'
    },
    alquilibroIcon: {
        position: 'absolute',
        borderRadius: 50,
        width: 24,
        height: 25,
        left: 5
    },
    shareContainer: {
        position: 'absolute',
        width: 24.12,
        height: 24,
        right: 21.88,
        top: 16
    },
    notifyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
        position: 'absolute',
        left: '74.94%',
        right: '19.22%',
        top: '27.68%',
        bottom: '27.68%'
    }

});