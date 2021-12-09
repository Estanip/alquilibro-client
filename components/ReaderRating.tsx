import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import textStyle from "./styles/text";
import { Rating } from "react-native-ratings";

interface Iprops {
  ratingList: IList[];
  visible: boolean;
}

interface IList {
  stars: number;
  title: string;
}

export default function ReaderRating(props: Iprops) {
  const { ratingList, visible } = props;

  return (
    <View style={visible ? styles.container : styles.hidden}>
      {ratingList?.map((rating, idx) => (
        <View style={styles.row} key={idx}>
          <Rating
            type="custom"
            ratingColor="#000000"
            ratingBackgroundColor="#c8c7c8"
            tintColor="#FFFFFF"
            ratingCount={5}
            imageSize={16}
            fractions={1}
            readonly={true}
            startingValue={rating.stars}
            style={{ paddingRight: 10 }}
          />
          <Text style={textStyle.text16px}>{rating.title}</Text>
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
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
});
