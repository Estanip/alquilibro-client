import  React, {useEffect, useState} from "react";
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik, FormikState } from "formik";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, ResponseType } from 'expo-auth-session';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import initializeApp from "../../auth/firebase";
import { login } from "../../actions/userActions";

import { RootStackScreenProps } from "../../types";
import InputLogin from "../../components/Input/InputLogin";
import ButtonText from "../../components/Button/ButtonText";
import textStyle from "../../components/Text/textStyles";
import { styles } from "./loginStyles";
import loginValidatorSchema from "../../validations/loginValidator";
import buttonStyle from "../../components/Button/buttonStyles";


const bgLibrary = require("../../assets/images/loginBackground.png")
const logo = require("../../assets/images/alquilibro-icon.png");

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth);
  const alert = useSelector((state: any) => state.alert);

  // GOGLE LOGIN

  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '575892239646-gq8n6vcemj8si1mkmubbt0uhif5709gs.apps.googleusercontent.com',
    },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      initializeApp
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential);
      makeRedirectUri(navigation.replace('Main'))
    }
  }, [response]);

  useEffect(() => {
    
    if (user?.loggedIn) {
      navigation.navigate('Main')
      Toast.show({
        type: 'success',
        text1: 'Hola!',
        text2: 'Bienvenido a Alquilibro 👋'
        })
    } 
    
    if(!user?.loggedIn && alert?.message){
      Toast.show({
        type: 'error',
        text1: 'Error de Logueo',
        text2: alert.message
      })
    }

  }, [user])

  const handleOnPress = (values: any) => {
      dispatch(login(values.username, values.password))
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
            onSubmit={(values: any) => { handleOnPress(values) }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
              setSubmitting,
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
                  name={"INGRESAR"}
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
                name={"DAR UNA VUELTA"}
                textStyle={textStyle.buttonTextBlack}
                styles={buttonStyle.white}
                onPress={() => navigation.replace('Main')}
                disabled={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
};
