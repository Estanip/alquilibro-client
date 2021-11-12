import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default function UploadBook() {
    return (
        <View style={styles.btnContainer}>
            <Button
              color="#a9a9a9"
              title="SUBIR LIBRO"
              onPress={() => Alert.alert("Upload Button")}          
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        width: '40%',
        left: '30%',
        top: '80%',
        backgroundColor: '#a9a9a9'
    }   
})
