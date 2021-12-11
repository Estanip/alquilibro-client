import React from 'react';
import { Formik } from "formik";
import { Text, View, ScrollView, Pressable, Alert } from 'react-native';

import advancedFilterValidationSchema from '../../validations/advancedFilter';
import { styles } from './advancedFilterStyles';
import InputForm from '../../components/Input/InputForm';
import textStyle from '../../components/Text/textStyles';

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

    return (
        <ScrollView
            style={{ backgroundColor: '#FFF' }}
        >
            <View
                style={styles.advancedFilterContainer}
            >
                <Text
                    style={textStyle.title}
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
                                        handleBlur={handleBlur}
                                        value={values.title}
                                    />
                                    <InputForm
                                        placeHolder={"Autor"}
                                        name={"author"}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.author}

                                    />
                                    <InputForm
                                        placeHolder={"Editorial"}
                                        name={"editorial"}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.editorial}
                                    />
                                    <InputForm
                                        placeHolder={"Género"}
                                        name={"category"}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.category}
                                    />
                                    <InputForm
                                        placeHolder={"Idioma"}
                                        name={"language"}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.language}
                                    />
                                    <InputForm
                                        placeHolder={"Precio del día"}
                                        name={"price"}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
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

