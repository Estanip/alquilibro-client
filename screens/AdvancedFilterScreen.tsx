import React from 'react';
import { Formik } from "formik";
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { yupResolver } from '@hookform/resolvers/yup';
import advancedFilterValidationSchema from '../validations/advancedFilter';

export default function AdvancedFilterScreen() {

    const navigation = useNavigation();

    return (
        <ScrollView
            style={{ backgroundColor: '#FFF' }}
        >
            <View
                style={styles.advancedFilterContainer}
            >
                <Text
                    style={styles.filterTitle}
                > !Usá los filtros de búsqueda y encontrá lo que querés!
                </Text>

                <View
                    style={styles.formContainer}
                >

                    <Formik
                        initialValues={{
                            title: "",
                            author: "",
                            editorial: "",
                            category: "",
                            language: "",
                            price: 0
                        }}

                        onSubmit={() => Alert.alert("Boton Onsubmit")}
                    >

                        {
                            ({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                                isValid,
                            }) => (
                                <>
                                    <TextInput>Titulo</TextInput>
                                    <TextInput style={styles.filterText} >Titulo</TextInput>
                                    <TextInput>Titulo</TextInput>
                                    <TextInput>Titulo</TextInput>
                                    <TextInput>Titulo</TextInput>
                                    <TextInput>Titulo</TextInput>

                                    <Pressable
                                        onPress={handleSubmit}

                                        style={styles.filterButton}
                                    >
                                        <Text
                                            style={styles.filterText}
                                        >
                                            APLICAR FILTROS
                                        </Text>
                                    </Pressable>

                                </>
                            )
                        }
                    </Formik>

                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    advancedFilterContainer: {
        maxHeight: 730,
        minHeight: 640,
        backgroundColor: '#FFF'
    },
    filterTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        top: '5%',
        fontSize: 26,
        letterSpacing: 0.15,
        color: '#1C1427',
        alignSelf: 'center',
        textAlign: 'center'
    },
    formContainer: {
        top: '10%',
        height: '100%',
        width: '100%'
    },
    input: {
        alignSelf: 'center',
        padding: 10,
        width: '90%',
        height: '5%',
        backgroundColor: '#ECEFF0',
        marginBottom: 10
    },
    filterButton: {
        padding: 10,
        width: '50%',
        borderRadius: 5,
        top: '5%',
        backgroundColor: '#7ECA9C',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    filterText: {
        fontFamily: 'Roboto',
        alignSelf: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#1C1427',
        letterSpacing: 0.15
    },
})