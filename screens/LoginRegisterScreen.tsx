import * as React from "react";
import { Formik } from "formik";

import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  Text
} from "react-native";

import { RootStackScreenProps } from "../types";
import { useState } from "react";
import InputLogin from "../components/InputLogin";
import loginValidatorSchema from "../validations/loginValidator";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const bgLibrary = require("../assets/images/loginBackground.png");
const logo = require("../assets/images/alquilibro-icon.png");

const customFonts = {
  Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
};

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {
  const handleOnPress = () => {
    navigation.replace("Main");
  };
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={bgLibrary}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Image source={logo} style={styles.image} />
        <Text style={styles.textContainer}>
          <Text style={styles.title}>¡HOLA, ya estás en ALQUILIBRO!</Text>
          <Text style={styles.subTitle}>
            {"\nTu app para alquilar libros en papel."}
          </Text>
        </Text>
      </ImageBackground>

      <View style={styles.loginArea}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Formik
            validationSchema={loginValidatorSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={handleOnPress}
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
              <View style={styles.formik}>
                <View >
                  <InputLogin
                    label={"Usuario"}
                    name={"username"}
                    placeHolder={"Ingresar usuario"}
                    icon={false}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <Text style={styles.error}>{errors.username}</Text>
                  )}
                  <InputLogin
                    label={"Contraseña"}
                    name={"password"}
                    placeHolder={"Ingresar contraseña"}
                    icon={true}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                  <Text style={{ paddingLeft: 15 }}>
                    <Text style={styles.text}>¿Ovidaste tu contraseña? </Text>
                    <Text
                      style={styles.text}
                      onPress={() => {
                        Alert.alert("Recuperar pass");
                      }}
                    >
                      Hacé click acá.
                    </Text>
                  </Text>
                </View>

                <Pressable
                  onPress={handleSubmit}
                  style={isValid ? styles.disabledButton : styles.activeButton}
                  disabled={!isValid}
                >
                  <Text style={styles.buttonText}>INGRESAR</Text>
                </Pressable>
              </View>
            )}
          </Formik>
          <View style={styles.registerArea}>
            <Text style={styles.text}>¿No tenés cuenta? ¡Registrate!</Text>
            <View style={styles.iconsLogin}>
              <MaterialIcons name="facebook" size={24} color="black" />
              <Ionicons name="logo-google" size={22} color="black" />
            </View>

            <View>
              <Text style={styles.visitText}>
                ¿Querés entrar sin registrarte?
              </Text>
              <Pressable onPress={handleOnPress} style={styles.buttonVisit}>
                <Text style={styles.buttonText}>DAR UNA VUELTA</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    minWidth: 84,
    minHeight: 84,
    maxWidth: 94,
    maxHeight: 94,
  },
  textContainer: {
    height: "auto",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 21,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#1C1427",
  },
  error: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FF0000",
  },
  subTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#1C1427",
  },
  loginArea: {
    flex: 5,
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1.25,
    color: "#1C1427",
  },
  disabledButton: {
    width: 183,
    backgroundColor: "#7ECA9C",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 10,
    marginVertical: 4,
    alignSelf: "center",
  },
  activeButton: {
    width: 183,
    backgroundColor: "#DADADA",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 10,
    marginVertical: 4,
    alignSelf: "center",
  },
  formik: {
    flex: 2,
    justifyContent: 'space-evenly'
  },
  registerArea: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.06,
    letterSpacing: 0.6,
    color: "#1C1427",
  },
  iconsLogin: {
    minHeight: 30,
    justifyContent: "space-around",
    flexDirection: "row",
    width: 100,
  },
  visitText: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18.75,
    letterSpacing: 0.5,
    color: "#1C1427",
  },
  buttonVisit: {
    width: 183,
    backgroundColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 5,
    color: "#DADADA",
    alignSelf: "center",
  },
});
