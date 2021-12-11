import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { RootTabScreenProps } from "../../types";

import textStyle from "../../components/Text/textStyles";
import { styles } from "./homeStyles";
import HomeCards from "../../components/Card/HomeCards";
import SearchInputHome from "../../components/Input/SearchInputHome";
import buttonStyle from "../../components/Button/buttonStyles";
import ButtonText from "../../components/Button/ButtonText";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const handleOnClick = () => {
    navigation.navigate("Upload");
  };

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
            title={"SUBIR LIBRO"}
            textStyle={textStyle.buttonTextBlack}
            styles={buttonStyle.white}
            onPress={handleOnClick}
            disabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};