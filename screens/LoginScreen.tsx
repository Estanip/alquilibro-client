import * as React from "react";
import { Formik } from "formik";

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, ResponseType } from 'expo-auth-session';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  Text,
} from "react-native";

import { RootStackScreenProps } from "../types";
import InputLogin from "../components/InputLogin";
import loginValidatorSchema from "../validations/loginValidator";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ButtonText from "../components/ButtonText";
import textStyle from "../components/styles/text";
import buttonStyle from "../components/styles/button";
import initializeApp from "../auth/auth";

const bgLibrary = require("../assets/images/loginBackground.png");
const logo = require("../assets/images/alquilibro-icon.png");

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {


  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '575892239646-gq8n6vcemj8si1mkmubbt0uhif5709gs.apps.googleusercontent.com',
    },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      initializeApp
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential);
      makeRedirectUri(navigation.replace('Main'))
    }
  }, [response]);

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
                <View>
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
                <ButtonText
                  title={"INGRESAR"}
                  textStyle={textStyle.buttonTextBlack}
                  styles={
                    isValid ? buttonStyle.greenNoBorder : buttonStyle.grey
                  }
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            )}
          </Formik>
          <View style={styles.registerArea}>
            <Text style={styles.text}>¿No tenés cuenta? ¡Registrate!</Text>
            <View style={styles.iconsLogin}>
              <MaterialIcons name="facebook" size={24} color="black" />
              <Ionicons
                name="logo-google"
                size={22}
                color="black"
                disabled={!request}
                title="Login"
                onPress={() => {
                  promptAsync();
                }}
              />
            </View>

            <View style={styles.visitArea}>
              <Text style={styles.visitText}>
                ¿Querés entrar sin registrarte?
              </Text>
              <ButtonText
                title={"DAR UNA VUELTA"}
                textStyle={textStyle.buttonTextBlack}
                styles={buttonStyle.white}
                onPress={handleOnPress}
                disabled={false}
              />
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
  formik: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  registerArea: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  visitArea: {
    alignItems: "center",
    justifyContent: "center"
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
    textAlign: "center"
  },
});
