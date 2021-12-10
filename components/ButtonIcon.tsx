import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Iprops {
  title: string;
  textStyle: any;
  styles: any;
  onPress: any;
  disabled: boolean;
  icon: any;
}

export default function ButtonIcon(props: Iprops) {
  const { title, textStyle, styles, onPress, disabled, icon } = props;

  return (
    <>
      <Pressable onPress={onPress} style={styles} disabled={disabled}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name={icon}
            size={24}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text style={textStyle}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
}
