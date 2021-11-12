import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
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
    navigation.replace("Main");
  };

  const [secure, setSecure] = useState<boolean>(true);
  const [ username, setUserName] = useState<string>('');
  const [ password, setPassword] = useState<string>('');
  const [ error, setError ] = useState<string>('')


  const validation = () =>  {
    if(!username){
      setError('Debe ingresar un usuario')
    } else if(!password){
      setError('Debe ingresar una contraseña')
    }
    else if(username !== 'test' || password !== 'test'){
      setError('Usuario o password incorrectos')
    } else {
      onPressFunction()
    }
  }

  const handlePress = () =>  {
    validation()
  }

  return (
    <View style={styles.screen}>
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
      <ScrollView>
      <View style={styles.loginArea}>
        <View style={styles.fieldsData}>
          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Usuario</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ingresar usuario" 
                onChangeText={text => setUserName(text)}
                defaultValue={username}
                />
            </View>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                secureTextEntry={secure}
                style={styles.input}
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                placeholder="Ingresar contraseña"
              />
            </View>
            <View style={styles.icon}>
              {secure ? (
                <Ionicons
                  name="eye"
                  size={24}
                  color="#777777"
                  onPress={() => setSecure(!secure)}
                />
              ) : (
                <Ionicons
                  name="md-eye-off"
                  size={24}
                  color="#777777"
                  onPress={() => setSecure(!secure)}
                />
              )}
            </View>
          </View>
          <Text style={styles.text}>
            ¿Ovidaste tu contraseña? Hacé click acá.
          </Text>
        </View>
        <View style={styles.buttonsSection}>
          <Pressable onPress={handlePress} style={styles.buttonIngresar}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </Pressable>
          { error.length ? <Text style={styles.error}> {error} </Text> : null

          }
          <Text style={styles.text}>¿No tenés cuenta? ¡Registrate!</Text>
          

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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    height: "100%",    
    flex: 1,
    flexDirection: 'column',
    
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
    minHeight: "30%",
    maxHeight: "35%",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: 'space-evenly'
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
    color: 'red'
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
    flexDirection: 'column',
    alignItems: "center",  
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical:10,
  },
  fieldsData: {
    width: "85%",
    maxWidth: 328,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#E8E8E8",
    width: "100%",
    height: 56,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  input: {
    width: "90%",
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
  buttonsSection: {   
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: "space-around",
    alignItems: 'center',
    paddingBottom: '2%'
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
