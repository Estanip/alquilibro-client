import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Iprops {
  iconName: any;
  title: string;
}

export default function ProfileDetail(props: Iprops) {
  const { title, iconName } = props;

  return (
    <View style={styles.cardDetail}>
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardDetail: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 12,
    width: "90%",
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
