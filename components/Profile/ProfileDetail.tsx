import React, {useState} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FavoritesBooks from "../Card/FavoritesCard";
import ProfileRating from "./ProfileRating";
import ProfileReservations from "./ProfileReservations";

interface Iprops {
  iconName: any;
  title: string;
}

//-------Array para mapear reservados---
//-------Reemplazar por info de API--------
const reservedList = [
  {
    bookName: "Crónicas del Angel Gris",
    bookOwner: "ferca",
    state: true,
  },
  {
    bookName: "Un mundo feliz",
    bookOwner: "pili2",
    state: true,
  },
  {
    bookName: "1984",
    bookOwner: "paco",
    state: false,
  },
];
//-----FAVORITOS test------------

const favorites = [
  {
    bookName: "Renuncio.",
    bookAuthor: "Hernán Casciari",
  },
  {
    bookName: "Papeles en el viento.",
    bookAuthor: "Eduardo Sacheri",
  },
  {
    bookName: "Deshoras.",
    bookAuthor: "Julio Cortazar",
  },
];
//-------Rating de lector--------------

const ratings = [
  {
    stars: 4,
    title: "General",
  },
  {
    stars: 3,
    title: "Puntualidad en la devolución.",
  },
  {
    stars: 5,
    title: "Cuidado del libro.",
  },
];
//-----------------

export default function ProfileDetail(props: Iprops) {
  const { title, iconName } = props;
  const [pressed, setPressed] = useState<boolean>(false);

  const handleOnPress = () => {
    setPressed(!pressed);
  };

  const contentType = (content: string) => {
    switch (content) {
      case "Reservas Realizadas":
        return (
          <ProfileReservations reservationList={reservedList} visible={pressed} />
        );
      case "Mis Favoritos":
        return <FavoritesBooks favoritesList={favorites} visible={pressed} />;
      case "Mi reputación como lector/a":
        return <ProfileRating ratingList={ratings} visible={pressed} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.cardDetail} onPress={handleOnPress}>
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </Pressable>
      {contentType(title)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    width: "95%",
  },
  cardDetail: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    alignItems: "center",
    textAlign: "left",
    marginLeft: 20,
  },
});
