import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { RootTabScreenProps } from "../../types";

import textStyle from "../../components/Text/textStyles";
import { styles } from "./homeStyles";
import HomeCards from "../../components/Card/HomeCards";
import SearchInputHome from "../../components/Input/SearchInputHome";
import buttonStyle from "../../components/Button/buttonStyles";
import ButtonText from "../../components/Button/ButtonText";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const handleOnClick = () => {
    navigation.navigate("Upload");
  };

  const dispatch = useDispatch();

  const notlog = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View style={styles.homeContainer}>
        <View style={styles.titleOneContainer}>
          <Text style={textStyle.title}>¿Buscas un libro en especial?</Text>
        </View>
        <SearchInputHome />
        <View style={styles.titleTwoContainer}>
          <Text style={textStyle.title}>¿No sabés qué leer?</Text>
        </View>
        <HomeCards />
        <View style={styles.titleThreeContainer}>
          <Text style={textStyle.title}>¿Querés alquilar tus libros?</Text>
          <ButtonText
            name={"SUBIR LIBRO"}
            textStyle={textStyle.buttonTextBlack}
            styles={buttonStyle.white}
            onPress={handleOnClick}
            disabled={false}
          />
                    <ButtonText
            name={"CERRAR SESION"}
            textStyle={textStyle.buttonTextBlack}
            styles={buttonStyle.white}
            onPress={notlog}
            disabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};