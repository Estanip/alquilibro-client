import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

interface Iprops {
    title: string;
    image: string;
}
export default function BookCard(props: Iprops) {
    
    const { title, image } = props
    const imgSource = { uri: image}

    useFonts(customFonts);

    return (
        <View style={styles.container}>     
            <ImageBackground
                source={imgSource}
                resizeMode="contain"
                style={styles.bgImage}
            >
                <View style={styles.detailBar}>
                    <Text style={styles.text}>{title}</Text>
                    <Ionicons name="heart-outline" size={24} color="black" />
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width:148,
        height:145,
        marginHorizontal: 6
    },
    bgImage: {
        height: '100%',
    },
    detailBar: {
        width: '100%',
        height: 46,
        backgroundColor: '#CCFFBD',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10  
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: "#000000"
    }, 
    
})