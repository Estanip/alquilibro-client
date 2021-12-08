import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import Reservations from "./Reservations";

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
//-------------------------

export default function ProfileDetail(props: Iprops) {
  const { title, iconName } = props;
  const [pressed, setPressed] = useState<boolean>(false);

  const handleOnPress = () => {
    setPressed(!pressed);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.cardDetail} onPress={handleOnPress}>
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </Pressable>
      <Reservations reservationList={reservedList} visible={pressed} />
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
