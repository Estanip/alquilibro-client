import * as React from "react";
import { Pressable, Text } from "react-native";

interface Iprops {
  name: string;
  textStyle: any;
  styles: any;
  onPress: any;
  disabled: boolean;
}

export default function ButtonText(props: Iprops) {
  const { name, textStyle, styles, onPress , disabled } = props;

  return (
    <>
      <Pressable onPress={onPress} style={styles} disabled={disabled}>
        <Text style={textStyle}>{name}</Text>
      </Pressable>
    </>
  );
}
