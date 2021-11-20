import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface Iprops {
    image: any;
    name: string;
}
export default function ProfileCard(props: Iprops) {
    const { image, name } = props

    return (
        <View style={styles.card}>
           <Image 
           style={styles.image}
           source={image}/>
           <Text style={styles.text}>{name}</Text>
        </View>
    )
        
}

const styles = StyleSheet.create({ 
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 63,
        marginRigth: 10
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: "#000000",  
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10        
    }
})