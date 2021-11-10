import React from 'react'
import { Alert, Button, StyleSheet } from 'react-native'
import { View } from './Themed'

export default function UploadBook() {
    return (
        <View style={styles.btnContainer}>
            <Button
              color="#34495e"
              title="SUBIR LIBRO"  
              onPress={() => Alert.alert("Esto es un boton")}          
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 183,
        height: 36,
        left: 114,
        top: '70%',
        backgroundColor: '#34495e'
    }   
})
