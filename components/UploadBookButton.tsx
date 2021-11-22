import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UploadBookButton() {

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("Upload")}
            style={styles.btnContainer}
        >
            <Text
            style={styles.buttonText}
            >
                SUBIR LIBRO
            </Text>
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
        top: '48%',
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
