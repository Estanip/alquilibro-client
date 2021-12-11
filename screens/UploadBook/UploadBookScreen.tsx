import React from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

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


  const initialValues: IUploadForm = {
    isbn: "",
    price: "",
    author: "",
    title: "",
    editorial: "",
    category: "",
    language: "",
    state: ""
  };

  const getBook = async (values: any) => {


    try {

      await dispatch(getBookByIsbn(values.isbn));

      values.title = book.title
      values.author = book.author
      values.editorial = book.editorial
      values.category = book.category
      values.language = book.language
      values.state = "Usado"
      
    } catch(err) {
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
          <Formik
            initialValues={initialValues}
            validationSchema={uploadBookValidationSchema}
            onSubmit={(values) => getBook(values)}
          >
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <InputForm
                  placeHolder={"ISBN"}
                  name={"isbn"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.isbn}
                />
                {errors.isbn && touched.isbn && (
                  <Text style={styles.textError}>{errors.isbn}</Text>
                )}
                <InputDisabled
                  placeHolder={"Titulo"}
                  name={"title"}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={"" || values.title}
                />
                <InputDisabled
                  placeHolder={"Autor"}
                  name={"author"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.author}
                />
                <InputDisabled
                  placeHolder={"Editorial"}
                  name={"editorial"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.editorial}
                />
                <InputDisabled
                  placeHolder={"Género"}
                  name={"category"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.category}
                />
                <InputDisabled
                  placeHolder={"Idioma"}
                  name={"language"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.language}
                />
                <InputDisabled
                  placeHolder={"Estado"}
                  name={"state"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.state}
                />
                <InputForm
                  placeHolder={"Precio del día"}
                  name={"price"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.price}
                />
                {errors.price && touched.price && (
                  <Text style={styles.textError}>{errors.price}</Text>
                )}
                <View style={styles.buttonContainer}>
                  <ButtonIcon
                    title={"SUBIR FOTO"}
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
                    title={"SUBIR LIBRO"}
                    textStyle={textStyle.buttonTextBlack}
                    styles={
                      isValid ? buttonStyle.greenNoBorder : buttonStyle.grey
                    }
                    onPress={handleSubmit}
                    disabled={false}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView >
  );
}


