import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const window = Dimensions.get("window");
interface Iprops {
    title: string;
    image: string;
}

export default function BookCardSlider(props: Iprops) {
    
    const { title, image } = props
    const imgSource = { uri: image}
       
    const [dimensions, setDimensions] = useState({ window });

    useEffect(() => {
        Dimensions.addEventListener(
        "change",
        ({ window }) => {
            setDimensions({ window });
        }
        );        
    });

    return (
        <View style={{width:0.40*dimensions.window.width, 
        height: 0.19*dimensions.window.height, marginHorizontal: 8 }}>     
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
        width: 148,
        marginHorizontal: 6
    },
    bgImage: {
        height: '100%',
    },
    detailBar: {
        width: '100%',
        height: '25%',
        maxHeight: 46,
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