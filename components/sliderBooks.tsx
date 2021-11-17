import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


import { useFonts } from 'expo-font';
import BookCard from './BookCard';

const customFonts = {
    Roboto: require('../assets/fonts/Roboto-Regular.ttf')
};

interface Iprops {
    title: string;
    books: IList[]
}

interface IList {
    title: string;
    image: string;
}

export default function SliderBooks(props: Iprops) {
    
    const { title, books } = props

    useFonts(customFonts);

    return (
        <>
        <View style={styles.screen}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.booksList}>
            <ScrollView horizontal={true}>
            {
                books.map((book : IList, idx: number) => (
                    <BookCard key={idx} title={book.title} image={book.image}/>
                ))
            }
            </ScrollView>
            </View>
            
        </View>
       </>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor: '#ffffff'
    },booksList: {
        flexDirection: 'row'
    }, 
    scrollView: {

    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 16,
        color: "#000000",
        paddingVertical: 3
    }
})