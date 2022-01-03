// UTILITIES & LIBRARIES
import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  Text,
} from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// ACTIONS
import { login } from "../../actions/userActions";
import { alertActions } from "../../actions/alertActions";

// TYPES, INTERFACES & VALIDATORS
import { RootStackScreenProps } from "../../types";
import { IUserAuth } from "../../interfaces/userInterfaces";
import userValidatorSchema from "../../validations/userValidator";

// COMPONENTS
import InputRegister from "../../components/Input/InputRegister";
import ButtonText from "../../components/Button/ButtonText";
import textStyle from "../../components/Text/textStyles";
import buttonStyle from "../../components/Button/buttonStyles";
import InputLogin from "../../components/Input/InputLogin";

// STYLES
import { styles } from "./loginStyles";

// FIREBASE
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import initializeApp from "../../auth/firebase";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, ResponseType } from 'expo-auth-session';

// IMAGES
const bgLibrary = require("../../assets/images/loginBackground.png")
const logo = require("../../assets/images/alquilibro-icon.png");

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {

  const defaultValues: IUserAuth = {
    username: "",
    password: ""
  };

  // REACT HOOK FORM
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(userValidatorSchema)
  });

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
      makeRedirectUri()
    }
  }, [response]);

  useEffect(() => {

    if (user?.loggedIn) {
      Toast.show({
        type: 'success',
        text1: 'Hola!',
        text2: 'Bienvenido a Alquilibro 👋'
      })
      navigation.navigate('Main')
    }

    if (!user?.loggedIn && alert?.message && alert?.type === 'alert-danger') {
      Toast.show({
        type: 'error',
        text1: 'Error de Registro',
        text2: alert.message
      })
    }

    return () => {
      dispatch(alertActions.clear())
      reset(defaultValues);
    }

  }, [user])

  const onSubmit = (data: any) => {
    dispatch(login(data.username, data.password))
  };

  // BUTTON CONDITION
  const isValid: boolean = false;

  return (
    <View style={styles.logScreen}>
      <ImageBackground
        source={bgLibrary}
        resizeMode="cover"
        style={styles.logBgImage}
      >
        <Image source={logo} style={styles.logImage} />
        <Text style={styles.logTextContainer}>
          <Text style={styles.logTitle}>¡HOLA, ya estás en ALQUILIBRO!</Text>
          <Text style={styles.logSubTitle}>
            {"\nTu app para alquilar libros en papel."}
          </Text>
        </Text>
      </ImageBackground>

      <View style={styles.logArea}>

        <ScrollView contentContainerStyle={styles.logScroll}>

          <View style={styles.logForm}>

            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputRegister
                  label={"Usuario"}
                  name={"usuario"}
                  placeHolder={"Ingresar usuario"}
                  icon={false}
                  handleChange={onChange}
                  handleBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors?.username?.message && (
              <Text style={styles.logError}>{errors.username.message}</Text>
            )}

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputRegister
                  label={"Contraseña"}
                  name={"password"}
                  placeHolder={"Ingresar contraseña"}
                  icon={true}
                  handleChange={onChange}
                  handleBlur={onBlur}
                  value={value}
                />
              )}
            />
            {errors?.password?.message && (
              <Text style={styles.logError}>{errors.password.message}</Text>
            )}

            <View
              style={styles.logButtons}
            >
              <ButtonText
                name={"INGRESAR"}
                textStyle={textStyle.buttonTextBlack}
                onPress={handleSubmit(onSubmit)}
                disabled={isValid}
                styles={buttonStyle.greenBorder}
              />

              <ButtonText
                name={"NO TENGO CUENTA"}
                textStyle={textStyle.buttonTextBlack}
                onPress={() => navigation.navigate('Register')}
                disabled={false}
                styles={buttonStyle.lightGreen}
              />
            </View>



{/*            <View style={styles.iconsLogin}>
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
            </View> */}

            <View style={styles.logVisitArea}>
              <Text style={styles.logVisitText}>
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
