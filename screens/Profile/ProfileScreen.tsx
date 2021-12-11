import React from "react";
import { ScrollView, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileCard from "../../components/Profile/ProfileCard";
import { styles } from "./profileStyles";

const profileTemp = require("../../assets/images/profilTemp.png");

export default function ProfileScreen() {

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
  )
};
