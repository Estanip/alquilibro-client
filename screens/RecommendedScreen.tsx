import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { RootStackScreenProps } from '../types';
import { useFonts } from 'expo-font';
import SliderBooks from '../components/sliderBooks';
import { string } from 'yup';
import BottomTabNavigator from '../navigation/BottomTabNav';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

export default function RecommendedScreen({ navigation }: RootStackScreenProps<'Recommended'>) {

    useFonts(customFonts);

    interface IList {
        title: string;
        image: string;
    }

    const booksTest : IList[] = [
        { 
            title: 'Libro 2', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        { 
            title: 'Libro 3', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        { 
            title: 'Libro 4', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
        { 
            title: 'Libro 5', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/81J4LjdqQFL.jpg'
        },
    ]

    return (
        <>
        <View style={styles.screen}>
                <SliderBooks title={'Lo más leído en tu ciudad'} books={booksTest} />
                <SliderBooks title={'Últimos libros subidos en tu ciudad'} books={booksTest} />
                <SliderBooks title={'Tus favoritos'} books={booksTest} />
        </View>
       </>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor: '#ffffff',      
        flexDirection: 'column',
        height:'100%',
        paddingVertical: 10,        
        paddingHorizontal: 8,        
        justifyContent: 'space-evenly',        
        overflow: 'hidden'
    }
})