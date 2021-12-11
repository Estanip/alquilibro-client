import * as React from "react";
import { Pressable, Text } from "react-native";

interface Iprops {
  title: string;
  textStyle: any;
  styles: any;
  onPress: any;
  disabled: boolean;
}

export default function ButtonText(props: Iprops) {
  const { title, textStyle, styles, onPress , disabled } = props;

  return (
    <>
      <Pressable onPress={onPress} style={styles} disabled={disabled}>
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    </>
  );
}
