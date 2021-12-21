import React, { useEffect } from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
  TextInput
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from "./uploadBookStyles";
import { RootStackScreenProps } from "../../types";
import uploadBookValidationSchema from "../../validations/uploadBookValidator";
import { getBookByIsbn } from "../../actions/booksActions";
import { IBookForm } from "../../interfaces/bookInterfaces";
import textStyle from "../../components/Text/textStyles";
import buttonStyle from "../../components/Button/buttonStyles";
import ButtonText from "../../components/Button/ButtonText";

export default function UploadBookScreen({ navigation }: RootStackScreenProps<"Upload">) {

  const dispatch = useDispatch();
  const book = useSelector((state: any) => state.book.uploadBook)

  const defaultValues: IBookForm = {
    isbn: "",
    title: "",
    author: "",
    editorial: "",
    category: "",
    language: "",
    state: "",
    price: ""
  };

  const { control, reset, register, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm({
    defaultValues,
    reValidateMode: "onBlur",
    resolver: yupResolver(uploadBookValidationSchema)
  });

  const isValid = true;
  let isbn = watch('isbn')

  const onSubmit = (data: any) => {
    console.log("DATA", data);
    navigation.navigate('UploadedBook')
  };

  useEffect(() => {

    if (isbn.length === 13) {

      dispatch(getBookByIsbn(isbn))

    } else {
      reset(defaultValues)
    }


  }, [isbn])

  useEffect(() => {

    if (isbn.length === 13) {

      setValue('title', book.title)
      setValue('author', book.author)
      setValue('editorial', book.editorial)
      setValue('category', book.category)
      setValue('language', book.language)
      setValue('state', "Usado")

    } else {
      reset(defaultValues)
    }

  }, [book])

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>

      <View style={styles.uploadBookContainer}>
        <Text style={textStyle.title}>
          {" "}
          Cargá el ISBN del libro a subir y completá los campos vacios:{" "}
        </Text>

        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{ required: true }}

            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="ISBN"
                onChangeText={onChange}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="isbn"
          />

          {errors?.isbn?.message && (
            <Text style={styles.textError}>{errors.isbn.message}</Text>
          )}

          <Controller
            control={control}
            name={"title"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Titulo"
                value={value}
              />
            )}
          />


          <Controller
            control={control}
            name={"author"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Autor"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name={"editorial"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Editorial"
                value={value}
              />
            )}
          />


          <Controller
            control={control}
            name={"category"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Categoría"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name={"language"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Idioma"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name={"state"}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Estado"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Precio por día"
                onChangeText={(value: any) => onChange(value)}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors?.price?.message && (
            <Text style={styles.textError}>{errors.price.message}</Text>
          )}

          <View style={styles.buttonContainer}>
            {/*             <ButtonIcon
              name={"SUBIR FOTO"}
              textStyle={textStyle.buttonTextBlack}
              styles={
                isValid ? buttonStyle.lightGreen : buttonStyle.white
              }
              onPress={(val: any) => getBook(val)}
              disabled={!isValid}
              icon={"camera"}
            /> */}

            <ButtonText
              name={"BUSCAR LIBRO"}
              textStyle={textStyle.buttonTextBlack}
              styles={
                isValid ? buttonStyle.greenNoBorder : buttonStyle.grey
              }
              onPress={() => Alert.alert("Hola")}
              disabled={false}
            />

            {/*Este boton tiene que depender de un estado que
                  registre cuando se subió la foto en lugar de "isvalid"
                  El title tambien debe cambiar según ese estado*/}
            <ButtonText
              name={"SUBIR LIBRO"}
              textStyle={textStyle.buttonTextBlack}
              styles={
                isValid ? buttonStyle.greenNoBorder : buttonStyle.grey
              }
              onPress={handleSubmit(onSubmit)}
              disabled={false}
            />
          </View>

        </View>

      </View >

    </ScrollView >
  );
}

