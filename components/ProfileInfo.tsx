import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import ProfileDetail from "./ProfileDetail";

interface Iprops {
  title: string;
  details: IDetails[];
}

interface IDetails {
  iconName: any;
  detailTitle: string;
}

export default function ProfileInfo(props: Iprops) {
  const { title, details } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      {details?.map((detail: IDetails, idx: number) => (
        <ProfileDetail
          key={idx}
          iconName={detail.iconName}
          title={detail.detailTitle}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "flex-start",
    marginTop: 15,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "#7ECA9C",
    alignItems: "center",
    textAlign: "left",
  },
});
