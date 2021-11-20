import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {

    const navigation = useNavigation();

    return (
        <Text>
            ProfileScreen
        </Text>
    )
}

const styles = StyleSheet.create({})