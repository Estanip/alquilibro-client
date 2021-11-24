import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';

import textStyle from '../components/styles/text';
import HomeCards from '../components/HomeCards';
import SearchInputHome from '../components/SearchInputHome';
import UploadBookButton from '../components/UploadBookButton';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

    return (
        <ScrollView
            style={{backgroundColor: '#FFF'}}
        >
            <View style={styles.homeContainer}>
                <View style={styles.titleOneContainer}>
                    <Text style={textStyle.title}>
                        ¿Buscas un libro en especial?
                    </Text>
                </View>
                <SearchInputHome />
                <View style={styles.titleTwoContainer}>
                    <Text style={textStyle.title}>
                        ¿No sabés qué leer?
                    </Text>
                </View>
                <HomeCards />
                <View style={styles.titleThreeContainer}>
                    <Text style={textStyle.title}>
                        ¿Querés alquilar tus libros?
                    </Text>
                </View>
                <UploadBookButton />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        maxHeight: 730,
        minHeight: 640,
        backgroundColor: '#FFF'
    },
    titleOneContainer: {
        width: '100%',
        alignSelf: 'center',
        top: '10%'
    },
    titleTwoContainer: {
        width: '100%',
        alignSelf: 'center',
        height: 24,
        top: '25%'
    },
   titleThreeContainer: {
        width: '100%',
        alignSelf: 'center',
        top: '45%'
    }
});