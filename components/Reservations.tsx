import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import textStyle from "./styles/text";

interface Iprops {
  reservationList: IList[];
  visible: boolean;
}

interface IList {
  bookName: string;
  bookOwner: string;
  state: any;
}

export default function Reservations(props: Iprops) {
  const { reservationList, visible } = props;

  return (
    <View style={visible ? styles.container : styles.hidden}>
      {reservationList?.map((book) => (
        <View style={styles.detail}>
          <Text style={styles.text}>
            <Text style={textStyle.text16px}>{book.bookName}</Text>
            <Text style={textStyle.text16pxBold}>{book.bookOwner}</Text>
          </Text>
          {book.state ? (
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="green"
            />
          ) : (
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="red"
            />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  container: {
    justifyContent: "center",
    alignSelf: "flex-end",
    width: "90%",
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    justifyContent: "space-between",
  },
});
