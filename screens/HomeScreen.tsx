import * as React from 'react';

import { StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Home({ navigation }: RootStackScreenProps<any>) {

    return (
        <View style={styles.homeContainer}>
            <NavBar></NavBar>
        </View>

    )
};

const styles = StyleSheet.create({
    homeContainer: {
        position:'relative',
        width: '411px',
        height: '731px',
        backgroundColor: '#FFFFFF'
    }
  });