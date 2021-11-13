import React from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackScreenProps } from "../types";

export default function UploadBook({
    navigation,
  }: RootStackScreenProps<any>) {

    const onPressFunction = () => {
        navigation.replace("Upload");
      };


    return (
        <Pressable
            onPress={onPressFunction}
            style={styles.btnContainer}
        >
            <Text
            style={styles.buttonText}
            >SUBIR LIBRO</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#1C1427',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '40%',
        left: '30%',
        top: '40%',
        padding: 10
    },
    buttonText: {   
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 1.25,
        color: "#1C1427"
    }
})
