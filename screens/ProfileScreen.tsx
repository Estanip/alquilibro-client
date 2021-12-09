import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileCard from "../components/ProfileCard";
import { Ionicons } from "@expo/vector-icons";
import ProfileInfo from "../components/ProfileInfo";

const profileTemp = require("../assets/images/profilTemp.png");

export default function ProfileScreen() {
  const navigation = useNavigation();

  //datos de prueba-----------

  const temporalProfile = {
    image: profileTemp,
    name: "Carla Meller",
  };
  //----------------------------
  const perfilLector = [
    {
      detailTitle: "Reservas Realizadas",
      iconName: "clipboard-list",
    },
    {
      detailTitle: "Mis Favoritos",
      iconName: "cards-heart",
    },
    {
      detailTitle: "Mi reputación como lector/a",
      iconName: "star",
    },
  ];
  const perfilDueño = [
    {
      detailTitle: "Reservas Recibidas",
      iconName: "email-check",
    },
    {
      detailTitle: "Mis Libros Subidos",
      iconName: "book-open",
    },
    {
      detailTitle: "Mi reputación como dueño/a de libros",
      iconName: "star",
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <ProfileCard
          image={temporalProfile.image}
          name={temporalProfile.name}
        />
        <View style={styles.misDatos}>
          <Ionicons name="settings-sharp" size={24} color="black" />
          <Text style={styles.misDatosText}>Mis datos</Text>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <ProfileInfo title={"Perfil Lector/a"} details={perfilLector} />
          <ProfileInfo
            title={"Perfil Dueño/a de Libros"}
            details={perfilDueño}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  scroll: {
    flexGrow: 1,
  },
  misDatos: {
    flexDirection: "row",
    alignItems: "center",
  },
  misDatosText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#000000",
    paddingHorizontal: 5,
  },
  profileInfo: {
    flex: 7,
    justifyContent: "space-evenly",
  },
});
