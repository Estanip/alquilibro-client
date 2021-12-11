import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import textStyle from "../Text/textStyles";

interface Iprops {
  favoritesList: IList[];
  visible: boolean;
}

interface IList {
  bookName: string;
  bookAuthor: string;
}

export default function FavoritesBooks(props: Iprops) {
  const { favoritesList, visible } = props;

  return (
    <View style={visible ? styles.container : styles.hidden}>
      {favoritesList?.map((book) => (
        <View style={styles.text} key={book.bookName}>
          <Text style={textStyle.text16px}>
            {book.bookName}
            <Text style={textStyle.text16pxItalic}>{book.bookAuthor}</Text>
          </Text>
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
    width: "85%",
  },
  text: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 15,
  },
});
