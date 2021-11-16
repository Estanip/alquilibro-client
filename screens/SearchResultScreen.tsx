import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Calendar from 'expo-calendar';
import DateTimePicker from '@react-native-community/datetimepicker';

import SearchResultsCards from '../components/SearchResultsCards';
import { CheckBox } from 'react-native-elements';

export default function SearchResultScreen() {

    const [date, setDate] = useState<Date>(new Date(1598051730000));
    const [mode, setMode] = useState<string>('date');
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
            }
        })
    }, []);

    const getDefaultCalendarSource = async () => {
        const defaultCalendar = await Calendar.getDefaultCalendarAsync();
        return defaultCalendar.source;
    };

    const createCalendar = async () => {
        const defaultCalendarSource =
            Platform.OS === 'ios'
                ? await getDefaultCalendarSource()
                : { isLocalAccount: true, name: 'Expo Calendar' };
        const newCalendarID = await Calendar.createCalendarAsync({
            title: 'Expo Calendar',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.log(`Your new calendar ID is: ${newCalendarID}`);
    };

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

    const showTimepicker = () => {
        showMode('time');
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
                    onPress={createCalendar}
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
}

const styles = StyleSheet.create({
    headerSearchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10
    },
    textButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#1C1427",
        textAlign: 'center'
    },
    filterButton: {
        backgroundColor: '#7ECA9C',
        padding: 10,
        width: '50 %',
        alignSelf: 'center',
        borderRadius: 4
    },
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        width: '70%',
        alignSelf: 'center',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        backgroundColor: '#CCFFBD'
    }
})