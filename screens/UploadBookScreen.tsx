import React from "react";
import { Formik } from "formik";
import {
  Text,
  View,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { RootStackScreenProps } from "../types";
import ButtonIcon from "../components/ButtonIcon";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import InputForm from "../components/InputForm";
import uploadBookValidationSchema from "../validations/uploadBookValidator";
import Books from "../constants/Books";
import textStyle from "../components/styles/text";
import buttonStyle from "../components/styles/button";
import ButtonText from "../components/ButtonText";

export default function UploadBookScreen({}: RootStackScreenProps<"Upload">) {
  interface FormValues {
    isbn: string;
    title: string;
    author: string;
    editorial: string;
    category: string;
    language: string;
    state: string;
    price: string;
  }

  const initialValues: FormValues = {
    isbn: "",
    title: "",
    author: "",
    editorial: "",
    category: "",
    language: "",
    state: "",
    price: "",
  };

  const navigation = useNavigation();

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
            onSubmit={() => Alert.alert("Boton Onsubmit")}
          >
            {({
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
                  placeHolder={"ISBN"}
                  name={"isbn"}
                  handleChange={handleChange}
                  value={values.isbn}
                />
                {errors.isbn && (
                  <Text style={styles.textError}>{errors.isbn}</Text>
                )}
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
                  placeHolder={"Estado"}
                  name={"state"}
                  handleChange={handleChange}
                  value={values.state}
                />
                <InputForm
                  placeHolder={"Precio del día"}
                  name={"price"}
                  handleChange={handleChange}
                  value={values.price}
                />

                <View style={styles.buttonContainer}>
                  <ButtonIcon
                    title={"SUBIR FOTO"}
                    textStyle={textStyle.buttonTextBlack}
                    styles={
                      isValid ? buttonStyle.lightGreen : buttonStyle.white
                    }
                    handleSubmit={handleSubmit}
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
                    handleSubmit={() => Alert.alert("APLICAR FILTROS")}
                    disabled={false}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  uploadBookContainer: {
    maxHeight: 730,
    minHeight: 640,
    backgroundColor: "#FFF",
    top: "5%",
    alignItems: "center",
  },
  formContainer: {
    top: "5%",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    top: "10%",
    width: "100%",
    maxWidth: 800,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageButton: {
    flexDirection: "row",
    padding: 10,
    alignSelf: "center",
    width: "43%",
    borderColor: "#1C1427",
    borderStyle: "solid",
    borderWidth: 1,
  },
  imageText: {
    margin: 0,
    marginLeft: 20,
    alignSelf: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    color: "#1C1427",
    letterSpacing: 0.15,
  },
  uploadButton: {
    marginLeft: 14,
    padding: 10,
    width: "43%",
    borderRadius: 5,
    backgroundColor: "#DADADA",
  },
  uploadText: {
    margin: 0,
    fontFamily: "Roboto",
    alignSelf: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    color: "#1C1427",
    letterSpacing: 0.15,
  },
  textError: {
    alignSelf: "center",
    marginBottom: 5,
    marginTop: -5,
    color: "red",
  },
});
