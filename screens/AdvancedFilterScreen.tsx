import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { yupResolver } from '@hookform/resolvers/yup';
import advancedFilterValidationSchema from '../validations/advancedFilter';

export default function AdvancedFilterScreen() {

    type FormData = {
        title: string;
        author: string;
        editorial: string;
        category: string;
        language: string;
        price: string;
    }

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(advancedFilterValidationSchema)
    })

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

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Titulo" />
                        )} name="title"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Autor"
                            />
                        )} name="author"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Editorial"
                            />
                        )} name="editorial"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Genero"
                            />
                        )} name="category"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Idioma"
                            />
                        )} name="language"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Precio por día"
                            />
                        )} name="price"
                    />


                    <Pressable
                        onPress={() => Alert.alert("APLICAR FILTROS")}

                        style={styles.filterButton}
                    >
                        <Text
                            style={styles.filterText}
                        >
                            SUBIR MAS LIBROS
                        </Text>
                    </Pressable>

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