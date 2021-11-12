import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { Text } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const bgLibrary = require("../assets/images/loginBackground.png");
const logo = require("../assets/images/alquilibro-icon.png");

const customFonts = {
  Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
};

export default function LoginRegister({
  navigation,
}: RootStackScreenProps<any>) {
  const onPressFunction = () => {
    navigation.replace("Home");
  };

  const [secure, setSecure] = useState<boolean>(true)

  return (
    <View>
      <View style={styles.loginContainer}>
        <ImageBackground
          source={bgLibrary}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <Image source={logo} style={styles.image}></Image>
          <View style={styles.textContainer}>
            <Text style={styles.title}>¡HOLA, ya estás en ALQUILIBRO!</Text>
            <Text style={styles.subTitle}>
              Tu app para alquilar libros en papel.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.loginArea}>
        <View style={styles.fieldsData}>
          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Usuario</Text>
              <TextInput style={styles.input}  placeholder="Ingresar usuario" />
            </View>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                secureTextEntry={secure}
                style={styles.input}
                placeholder="Ingresar contraseña"
              />
            </View>
            <View style={styles.icon}>
              {secure ? 
              <Ionicons 
                name="eye" 
                size={24} 
                color="#777777" 
                onPress={() => setSecure(!secure)}
                /> 
            : <Ionicons 
                name="md-eye-off" 
                size={24} 
                color="#777777"                  
                onPress={() => setSecure(!secure)}
                />
            }
            </View>
          </View>

          <Text style={styles.text}>
            ¿Ovidaste tu contraseña? Hacé click acá.
          </Text>
          <Pressable onPress={onPressFunction} style={styles.buttonIngresar}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </Pressable>
          <Text style={styles.text}>
            ¿No tenés cuenta? ¡Registrate!
          </Text>

          <View style={styles.iconsLogin}>
            <MaterialIcons name="facebook" size={24} color="black" />
            <Ionicons name="logo-google" size={22} color="black" />
        </View>

        <View>
        <Text style={styles.visitText}>
              ¿Querés entrar sin registrarte?
            </Text>
            <Pressable onPress={onPressFunction} style={styles.buttonVisit}>
              <Text style={styles.buttonText}>DAR UNA VUELTA</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  loginContainer: {
    top: -22,
    width: "100%",
    height: "30%",
    maxHeight: 264,
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingVertical: '20%',
    justifyContent: "center",
    backgroundColor: '#bbbbbb',
  },
  image: {
    width: 84,
    height: 84,
  },
  textContainer: {
    height: "auto",
    width: "auto",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    top: "28%",
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
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor:'#ffffff'
  },
  fieldsData: {
    marginTop: "2%",
    minHeight: 100,
    height: "12%",
    maxHeight: 156,
    width: "85%",
    maxWidth: 328,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#E8E8E8",
    width: "95%",
    maxWidth: 328,
    height: "50%",    
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  input: {
    minWidth: "90%",
    maxWidth: 0.9 * 328,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.15,
    minHeight: 24,
    maxHeight: "60%",
  },
  label: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "#000000",
  },
  icon: {
    margin: 0,
    padding: 0,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
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
  buttonIngresar: {
    width: 183,
    backgroundColor: "#DADADA",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 10,
    color: "#DADADA",
    marginVertical: 4
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.06,
    letterSpacing: 0.6,
    color: "#1C1427",
  },
  iconsLogin: {
    marginVertical: '2%',
    paddingVertical: 5,      
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: "row",
    width: 100
  },
  visitText: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18.75,
    letterSpacing: 0.5,
    color: "#1C1427",
    margin: 0,
    padding: 0
  },
  buttonVisit: {
    width: 183,
    backgroundColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 2,
    color: "#DADADA",
    alignSelf: 'center',
    margin: 0

  },
});
