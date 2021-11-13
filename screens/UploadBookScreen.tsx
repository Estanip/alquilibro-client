import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RootStackScreenProps } from '../types';

export default function UploadBookScreen({ navigation }: RootStackScreenProps<'Upload'>) {

  type FormData = {
    ISBN: string;
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: { ISBN: "" } })

  return (
    <ScrollView>
      <View
        style={styles.uploadContainer}
      >
        <Text
          style={styles.uploadTitle}
        > Cargá el ISBN del libro a subir y completá los campos vacios </Text>
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
                placeholder="ISBN"
              />
            )}
          />
          {errors.ISBN && <Text>Debe Cargar un ISBN valido</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 50,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value="Cronica del Angel"
              />
            )}
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
                value="Cronica del Angel"
              />
            )}
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
                value="Cronica del Angel"
              />
            )}
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
                value="Cronica del Angel"
              />
            )}
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
                value="Cronica del Angel"
              />
            )}
          />

          <Controller
            control={control}
            rules={{
              maxLength: 50,
            }}
            render={({ field: { onChange } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder= "Estado"
              />
            )}
          />

          <Controller
            control={control}
            rules={{
              maxLength: 50,
            }}
            render={({ field: { onChange } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder= "Precio por día"
              />
            )}
          />

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
    width: '80%',
    height: '5%',
    backgroundColor: '#ECEFF0',
    marginBottom: 10
  }
})