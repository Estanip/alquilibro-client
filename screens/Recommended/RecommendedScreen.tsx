import * as React from 'react';
import { View } from 'react-native';

import { styles } from './recommendedStyles';
import { RootStackScreenProps } from '../../types';
import SliderBooks from '../../components/Slider/SliderBooks';


export default function RecommendedScreen({ navigation }: RootStackScreenProps<'Recommended'>) {

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