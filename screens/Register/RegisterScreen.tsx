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

// ACTIONS
import { createUser } from "../../actions/userActions";

// TYPES, INTERFACES & VALIDATORS
import { RootStackScreenProps } from "../../types";
import { IUserAuth } from "../../interfaces/userInterfaces";
import userValidatorSchema from "../../validations/userValidator";


// COMPONENTS
import InputRegister from "../../components/Input/InputRegister";
import ButtonText from "../../components/Button/ButtonText";
import textStyle from "../../components/Text/textStyles";
import buttonStyle from "../../components/Button/buttonStyles";
import { localApi } from "../../constants/Apis";

// STYLES
import { styles } from "./registerStyles";


const bgLibrary = require("../../assets/images/loginBackground.png")
const logo = require("../../assets/images/alquilibro-icon.png");

export default function RegisterScreen({
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
  const alert = useSelector((state: any) => state.alert);

  // IMAGE PICK UP
  const [image, setImage] = useState("");
  const [imgCheck, setImageCheck] = useState(false);

  const imgChecker = (image: string) => {

    let imgReg = "(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)"

    let result = image.match(imgReg);

    if (result === null) {
      setImageCheck(false)
    } else {
      setImageCheck(true)
    }

  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename: any = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    imgChecker(localUri);

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();

    // Assume "photo" is the name of the form field the server expects
    formData.append('image', { uri: localUri, name: filename, type });

    let dataObj = await axios.post(`${localApi}/api/users/upload-image`, formData);

    let imgUrl = dataObj.data.data.url

    setImage(imgUrl)

  };

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

    return () => {
      reset(defaultValues);
      setImage("");
    }

  }, [alert])

  const onSubmit = (data: any) => {

    dispatch(createUser(data.username, data.password, image))

  };

  // BUTTON CONDITION
  const isValid: boolean = false;

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
                styles={buttonStyle.greenBorder}
              />

              <ButtonText
                name={"YA TENGO CUENTA"}
                textStyle={textStyle.buttonTextBlack}
                onPress={() => navigation.navigate('Login')}
                disabled={false}
                styles={buttonStyle.lightGreen}
              />
            </View>

            <View
              style={styles.regUploadImg}
            >
              <ButtonText
                name={"SUBIR IMAGEN"}
                textStyle={textStyle.buttonTextBlack}
                onPress={pickImage}
                disabled={false}
                styles={buttonStyle.white}
              />
              {image.length > 0 && imgCheck === false && <Text
                style={{ color: "red" }}
              >El formarto es incorrecto (valido JPG o PNG)</Text>}
              {image.length === 0 && <Text
                style={{ color: "blue", marginTop: 10 }}
              >Si lo deseas puedes cargar tu foto de perfil</Text>}
              {image.length > 0 && imgCheck === true && <Image source={{ uri: image }} style={{ marginTop: 10,width: 200, height: 200, borderRadius: 100 }} />}

            </View>

          </View>

        </ScrollView >

      </View >
    </View>
  )
};

