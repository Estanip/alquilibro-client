import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import NavBar from '../components/NavBar';
import { View, Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';

export default function LoginRegister({ navigation }: RootStackScreenProps<any>) {
   const onPressFunction = ()=> {
       navigation.replace('Home')
    }

    return (
        <View style={styles.loginContainer}>
            <Text> LoginRegister </Text>
            <Pressable onPress={onPressFunction}>
                 <Text>Login</Text>
                </Pressable>
        </View>

    )
};

const styles = StyleSheet.create({
    loginContainer: {
        position:'relative',
        width: 411,
        height: 731,
        backgroundColor: '#FFFFFF'
    }
  });

