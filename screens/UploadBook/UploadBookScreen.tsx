import React, { useEffect } from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from "./uploadBookStyles";
import { RootStackScreenProps } from "../../types";
import uploadBookValidationSchema from "../../validations/uploadBookValidator";
import { getBookByIsbn } from "../../actions/booksActions";
import { IUploadForm } from "../../interfaces/bookInterfaces";
import ButtonIcon from "../../components/Button/ButtonIcon";
import InputForm from "../../components/Input/InputForm";
import textStyle from "../../components/Text/textStyles";
import buttonStyle from "../../components/Button/buttonStyles";
import ButtonText from "../../components/Button/ButtonText";
import InputDisabled from "../../components/Input/InputDisabled";

export default function UploadBookScreen({ }: RootStackScreenProps<"Upload">) {

  const dispatch = useDispatch();
  const book = useSelector((state: any) => state.book.uploadBook)

  const defaultValues: IUploadForm = {
    isbn: "",
    price: "",
    author: "",
    title: "",
    editorial: "",
    category: "",
    language: "",
    state: ""
  };

  const { control, reset, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(uploadBookValidationSchema)
  });

  const isValid = true;
  let isbn = watch('isbn')

  useEffect(() => {

    console.log(isbn)

    if (isbn.length === 13) {

      console.log(book)

      getBook(isbn)

    } else {
      reset(defaultValues)
    }

  }, [isbn])


  const getBook = async (isbn: any) => {

    try {

      await dispatch(getBookByIsbn(isbn));

      setValue('title', book.title)
      setValue('author', book.author)
      setValue('editorial', book.editorial)
      setValue('category', book.category)
      setValue('language', book.language)
      setValue('state', "Usado")

    } catch (err) {
      console.log(err)
    }

  }

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
            name={"isbn"}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="ISBN"
                onChangeText={(value: any) => onChange(value)}
                onBlur={onBlur}              
                />
            )}
          />
          {errors.isbn && (
            <Text style={styles.textError}>{errors.isbn}</Text>
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
            name={"price"}
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
          {errors.price && (
            <Text style={styles.textError}>{errors.price}</Text>
          )}

          <View style={styles.buttonContainer}>
            <ButtonIcon
              name={"SUBIR FOTO"}
              textStyle={textStyle.buttonTextBlack}
              styles={
                isValid ? buttonStyle.lightGreen : buttonStyle.white
              }
              onPress={() => Alert.alert("Subir Foto")}
              disabled={!isValid}
              icon={"camera"}
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
              onPress={(value: any) => getBook('isbn')}
              disabled={false}
            />
          </View>

        </View>

      </View >

    </ScrollView >
  );
}

