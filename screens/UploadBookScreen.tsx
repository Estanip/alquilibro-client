import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, ScrollView, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RootStackScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import uploadBookValidationSchema from '../validations/uploadBookValidator';
import Books from '../constants/Books';

export default function UploadBookScreen({ navigation }: RootStackScreenProps<'Upload'>) {

  type FormData = {
    isbn: string;
    title: string;
    author: string;
    editorial: string;
    category: string;
    language: string;
    state: string;
    price: string;
  }

  const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(uploadBookValidationSchema)
  })

  const onSubmit = handleSubmit((data: FormData) => {

    if (Books.isbn == data.isbn) {
      setValue("title", Books.title)
      setValue("author", Books.author)
      setValue("editorial", Books.editorial)
      setValue("category", Books.category)
      setValue("language", Books.language)
      setValue("state", Books.state)
    } else {
      Alert.alert("Error")
    }

  });

  return (
    <ScrollView
      style={{ backgroundColor: '#FFF' }}
    >
      <View
        style={styles.uploadContainer}
      >
        <Text
          style={styles.uploadTitle}
        > Cargá el ISBN del libro a subir y completá los campos vacios: </Text>
        <View
          style={styles.formContainer}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="ISBN" />
            )} name="isbn"
          />
          {errors.isbn?.message && <Text>Debe Cargar un ISBN valido</Text>}

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
                value={value}
                onChangeText={onChange}
                placeholder="Estado"
              />
            )} name="state"
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

          <View style={styles.buttonContainer}>

            <Pressable
              onPress={() => Alert.alert("Upload Image")}
              style={styles.imageButton}
            >
              <AntDesign
                name="camera"
                size={24}
                color="black"
              />

              <Text
                style={styles.imageText}
              >
                SUBIR FOTO
              </Text>
            </Pressable>

            <Pressable
              onPress={onSubmit}
              style={styles.uploadButton}
            >
              <Text
                style={styles.uploadText}
              >
                SUBIR LIBRO
              </Text>
            </Pressable>

          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    maxHeight: 730,
    minHeight: 640,
    backgroundColor: '#FFF'
  },
  formContainer: {
    top: '10%',
    height: '100%',
    width: '100%'
  },
  uploadTitle: {
    marginLeft: 12,
    marginRight: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#1C1427',
    alignSelf: 'center',
    textAlign: 'center',
    top: '5%'
  },
  input: {
    alignSelf: 'center',
    padding: 10,
    width: '90%',
    height: '5%',
    backgroundColor: '#ECEFF0',
    marginBottom: 10
  },
  buttonContainer: {
    top: '10%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  imageButton: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    width: '43%',
    borderColor: '#1C1427',
    borderStyle: 'solid',
    borderWidth: 1
  },
  imageText: {
    margin: 0,
    marginLeft: 20,
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    color: '#1C1427',
    letterSpacing: 0.15
  },
  uploadButton: {
    marginLeft: 14,
    padding: 10,
    width: '43%',
    backgroundColor: '#DADADA'
  },
  uploadText: {
    margin: 0,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    color: '#1C1427',
    letterSpacing: 0.15
  }
})