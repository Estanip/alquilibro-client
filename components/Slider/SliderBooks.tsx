import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import SliderBookCard from '../Card/SliderBookCard';

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

    return (
        <>
        <View style={styles.screen}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.booksList}>
            <ScrollView horizontal={true}>
            {
                books.map((book : IList, idx: number) => (
                    <SliderBookCard key={idx} title={book.title} image={book.image}/>
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
        backgroundColor: '#ffffff',        
        justifyContent: 'center'        
    },booksList: {
        flexDirection: 'row',
        marginVertical: 10,    
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 16,
        color: "#000000",        
    }
})