import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createUser } from "../../actions/userActions";
import { alertActions } from '../../actions/alertActions';
import Toast from 'react-native-toast-message';

import { RootStackScreenProps } from "../../types";
import InputRegister from "../../components/Input/InputRegister";
import ButtonText from "../../components/Button/ButtonText";
import textStyle from "../../components/Text/textStyles";
import { styles } from "./registerStyles";
import buttonStyle from "../../components/Button/buttonStyles";
import { IUserRegister } from "../../interfaces/userInterfaces";
import userValidatorSchema from "../../validations/userValidator";


const bgLibrary = require("../../assets/images/loginBackground.png")
const logo = require("../../assets/images/alquilibro-icon.png");

export default function RegisterScreen({
  navigation,
}: RootStackScreenProps<any>) {

  const defaultValues: IUserRegister = {
    username: "",
    password: ""
  };

  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(userValidatorSchema)
  });

  const isValid: boolean = false;

  const dispatch = useDispatch();
  const alert = useSelector((state: any) => state.alert);

  useEffect(() => {

      if (alert.type === 'alert-success') {
        navigation.navigate('Login')
        Toast.show({
          type: 'success',
          text1: "Bienvenido!",
          text2: alert.message
        })
      }
  
      if (alert.type === 'alert-danger') {
        Toast.show({
          type: 'error',
          text1: "Error de registro",
          text2: alert.message
        })
      }

  }, [alert])


  const onSubmit = (data: any) => {
    dispatch(createUser(data.username, data.password))
  };


  return (
    <View style={styles.regScreen}>

      <ImageBackground
        source={bgLibrary}
        resizeMode="cover"
        style={styles.regBgImage}
      >
        <Image source={logo} style={styles.regImage} />
        <Text style={styles.regTextContainer}>
          <Text style={styles.regTitle}>¡HOLA, ya estás en ALQUILIBRO!</Text>
          <Text style={styles.regSubTitle}>
            {"\nTu app para alquilar libros en papel."}
          </Text>
        </Text>
      </ImageBackground>

      <View style={styles.regArea}>

        <ScrollView contentContainerStyle={styles.regScroll}>

          <View style={styles.regForm}>

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
              <Text style={styles.regError}>{errors.username.message}</Text>
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
              <Text style={styles.regError}>{errors.password.message}</Text>
            )}

            <View
              style={styles.regButtons}
            >
              <ButtonText
                name={"REGISTRARME"}
                textStyle={textStyle.buttonTextBlack}
                onPress={handleSubmit(onSubmit)}
                disabled={isValid}
                styles={
                  isValid ? buttonStyle.greenNoBorder : buttonStyle.grey
                }
              />

              <ButtonText
                name={"YA TENGO CUENTA"}
                textStyle={textStyle.buttonTextBlack}
                onPress={() => navigation.navigate('Login')}
                disabled={false}
                styles={buttonStyle.greenNoBorder}
              />
            </View>
          </View>

        </ScrollView >

      </View >
    </View>
  )
};
