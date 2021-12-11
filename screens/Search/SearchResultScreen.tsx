import React, { useState } from 'react';
import { Pressable, ScrollView, View, Text, Platform } from 'react-native';
import { CheckBox } from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import SearchResultsCards from '../../components/Card/SearchResultsCards';
import { styles } from './searchResultStyles';

export default function SearchResultScreen() {

    const [date, setDate] = useState<Date>(new Date(1598051730000));
    const [mode, setMode] = useState<string>('date');
    const [show, setShow] = useState<boolean>(false);

    const onChange = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: React.SetStateAction<string>) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <ScrollView
            style={{ backgroundColor: '#FFF' }}
        >
            <View
                style={styles.headerSearchContainer}
            >
                <AntDesign
                    name="calendar"
                    size={30}
                    color="black"
                    style={{ width: '25 %', left: '120%', alignSelf: 'center' }}
                    onPress={showDatepicker}
                />
                <Feather
                    name="map-pin"
                    size={30}
                    color="black"
                    style={{ width: '25 %', left: '90%', alignSelf: 'center' }}
                />
                <Pressable
                    style={styles.filterButton}
                >
                    <Text
                        style={styles.textButton}
                    >
                        APLICAR FILTROS
                    </Text>
                </Pressable>
            </View>
            <View
                style={styles.filterContainer}
            >
                <CheckBox
                    title="Precio"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#7ECA9C'
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                />
                <CheckBox
                    title="Cercania"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#7ECA9C'
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                />

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

            </View>
            <SearchResultsCards />
        </ScrollView>
    )
};