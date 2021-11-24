import React from 'react';
import { Formik } from "formik";
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import advancedFilterValidationSchema from '../validations/advancedFilter';
import InputForm from '../components/InputForm';
import { text } from '../components/styles/text';

export default function AdvancedFilterScreen() {

    interface FormValues {
        title: string;
        author: string;
        editorial: string;
        category: string;
        language: string;
        price: string;
    }

    const initialValues: FormValues = {
        title: "",
        author: "",
        editorial: "",
        category: "",
        language: "",
        price: ""
    }

    const navigation = useNavigation();

    return (
        <ScrollView
            style={{ backgroundColor: '#FFF' }}
        >
            <View
                style={styles.advancedFilterContainer}
            >
                <Text
                    style={text.title}
                > !Usá los filtros de búsqueda y encontrá lo que querés!
                </Text>

                <View
                    style={styles.formContainer}
                >

                    <Formik
                        initialValues={initialValues}
                        validationSchema={advancedFilterValidationSchema}
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
                                    <InputForm
                                        placeHolder={"Titulo"}
                                        name={"title"}
                                        handleChange={handleChange}
                                        value={values.title}
                                    />
                                    <InputForm
                                        placeHolder={"Autor"}
                                        name={"author"}
                                        handleChange={handleChange}
                                        value={values.author}
                                    />
                                    <InputForm
                                        placeHolder={"Editorial"}
                                        name={"editorial"}
                                        handleChange={handleChange}
                                        value={values.editorial}
                                    />
                                    <InputForm
                                        placeHolder={"Género"}
                                        name={"category"}
                                        handleChange={handleChange}
                                        value={values.category}
                                    />
                                    <InputForm
                                        placeHolder={"Idioma"}
                                        name={"language"}
                                        handleChange={handleChange}
                                        value={values.language}
                                    />
                                    <InputForm
                                        placeHolder={"Precio del día"}
                                        name={"price"}
                                        handleChange={handleChange}
                                        value={values.price}
                                    />

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
        backgroundColor: '#FFF',
        top: '5%'
    },
    formContainer: {
        top: '5%',
        height: '100%',
        width: '100%'
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