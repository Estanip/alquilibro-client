import * as React from "react";
import { Formik } from 'formik';

import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import { Text } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { useState } from "react";
import InputLogin from "../components/InputLogin";
import loginValidatorSchema from "../validations/loginValidator";

const bgLibrary = require("../assets/images/loginBackground.png");
const logo = require("../assets/images/alquilibro-icon.png");

const customFonts = {
  Roboto: require("../assets/fonts/Roboto-Regular.ttf")
};

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {

  const handleOnPress = () => {
    navigation.replace("Main")

  }
  return (
    <View style={styles.screen}>
       <Formik
        validationSchema={loginValidatorSchema}
        initialValues={{ username: "", password: ""}}
        onSubmit={values => console.log("press")}
   >
     {({ handleChange, handleBlur, handleSubmit, values, errors,
          touched,
          isValid  }) => (
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
            {(errors.username && touched.username) &&
                  <Text style={styles.error}>{errors.username}</Text>
            }
            <InputLogin
              label={"Contraseña"}
              name={"password"}
              placeHolder={"Ingresar contraseña"}
              icon={true}
              handleChange={handleChange}              
              handleBlur={handleBlur}
              value={values.password}
            />
            {(errors.password && touched.password) &&
                  <Text style={styles.error}>{errors.password}</Text>
            }
         <Pressable onPress={handleSubmit}  style={isValid ? styles.disabledButton : styles.activeButton} disabled={!isValid}>
              <Text style={styles.buttonText}>INGRESAR</Text>
            </Pressable>
       </View>
     )}
   </Formik>
   </View>
 );
}

 
             
    //  <View style={styles.screen}>
    //     <View style={styles.loginContainer}>
    //       <ImageBackground
    //         source={bgLibrary}
    //         resizeMode="cover"
    //         style={styles.bgImage}
    //       >
    //         <Image source={logo} style={styles.image}></Image>
    //         <View style={styles.textContainer}>
    //           <Text style={styles.title}>¡HOLA, ya estás en ALQUILIBRO!</Text>
    //           <Text style={styles.subTitle}>
    //             Tu app para alquilar libros en papel.
    //           </Text>
    //         </View>
    //       </ImageBackground>
    //     </View>
    //     <ScrollView>
    //     <View style={styles.loginArea}>
    //       <View style={styles.fieldsData}>
    //         <View style={styles.container}>
    //           <View>
    //             <Text style={styles.label}>Usuario</Text>
    //             <TextInput
    //               style={styles.input}
    //               placeholder="IngresaR"
    //               onChangeText={text => setUserName(text)}
    //               defaultValue={username}
    //               />
    //           </View>
    //         </View>

    //         <View style={styles.container}>
    //           <View>
    //             <Text style={styles.label}>Contraseña</Text>
    //             <TextInput
    //
    //               style={styles.input}
    //               onChangeText={text => setPassword(text)}
    //               defaultValue={password}
    //               placeholder="Ingresar contraseña"
    //             />
    //           </View>
    //
    //         </View>
    //         <Text style={styles.text}>
    //           ¿Ovidaste tu contraseña? Hacé click acá.
    //         </Text>
    //       </View>
    //       <View style={styles.buttonsSection}>
    //         
    //         { error.length ? <Text style={styles.error}> {error} </Text> : null

    //         }
    //         <Text style={styles.text}>¿No tenés cuenta? ¡Registrate!</Text>

    //         <View style={styles.iconsLogin}>
    //           <MaterialIcons name="facebook" size={24} color="black" />
    //           <Ionicons name="logo-google" size={22} color="black" />
    //         </View>

    //         <View>
    //           <Text style={styles.visitText}>
    //             ¿Querés entrar sin registrarte?
    //           </Text>
    //           <Pressable onPress={onPressFunction} style={styles.buttonVisit}>
    //             <Text style={styles.buttonText}>DAR UNA VUELTA</Text>
    //           </Pressable>
    //         </View>
    //     </View>
    //     </View>
    //     </ScrollView>
    //  </View>

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    minHeight: "30%",
    maxHeight: "35%",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    width: "auto",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
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
    color: "red",
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
  },
  fieldsData: {
    width: "85%",
    maxWidth: 328,
    alignItems: "center",
  },
  container: {},

  buttonsSection: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "2%",
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
