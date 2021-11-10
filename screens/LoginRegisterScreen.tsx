import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, ImageBackground, Image  } from 'react-native';
import { useFonts } from 'expo-font';
import { View, Text } from '../components/Themed';
import NavBar from '../components/NavBar';
import { RootStackScreenProps } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';

const bgLibrary = require('../assets/images/loginBackground.png')
const logo =   require('../assets/images/alquilibro-icon.png')
const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};


export default function LoginRegister({ navigation }: RootStackScreenProps<any>) {
   const onPressFunction = ()=> {
       navigation.replace('Home')
    }

    return (
        <View >
            <View style={styles.loginContainer}>
            <ImageBackground source={bgLibrary} resizeMode='contain' style={styles.bgImage} >
                <Image source={logo} style={styles.image}>
                </Image>
                <View style={styles.textContainer}> 
                    <Text style={styles.title}>
                        ¡HOLA, ya estás en ALQUILIBRO!
                    </Text>
                    <Text style={styles.subTitle}>
                        Tu app para alquilar libros en papel.
                    </Text>
                </View>
            </ImageBackground >
            </View >
            <View style={styles.loginArea}>
                
                <Pressable onPress={onPressFunction} style={styles.buttonIngresar}>
                    <Text style={styles.buttonText}>INGRESAR</Text>
                </Pressable>
                 <Text style={styles.registroText}>¿No tenés cuenta? ¡Registrate!</Text>
            </View>
           
        </View>

    )
};

const styles = StyleSheet.create({
    loginContainer: {
        top: -22,
        width: '100%',
        height: 264,  
        alignItems: "center",
    },
    bgImage: {         
        flex: 1,
        width: '100%',
        height: 264,
        alignItems: "center"         
    },
    image: {
        width: 105,
        height: 105,
        top: 42,        
    },
  textContainer: {
        height: 'auto',
        width: 'auto',
        justifyContent:'center',
        backgroundColor: 'transparent',
        alignItems: 'center', 
        top: 65,
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 21,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#1C1427'
    },
    subTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#1C1427'
    },
    loginArea: {
        alignItems: 'center', 
        top: -22,
        height: "100%",
        width: "100%",
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: '#1C1427'
    },
    buttonIngresar: {
        width: 183,
        height: 36,
        backgroundColor: "#DADADA",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        marginTop: 20,

    },
    registroText: {
        fontSize: 12,
        lineHeight: 14.06,     
        letterSpacing: 0.6,
        color: '#1C1427'
    }
  });

