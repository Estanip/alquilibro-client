import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Iprops {
  title: string;
  textStyle: any;
  styles: any;
  handleSubmit: any;
  disabled: boolean;
  icon: any;
}

export default function ButtonIcon(props: Iprops) {
  const { title, textStyle, styles, handleSubmit, disabled, icon } = props;

  return (
    <>
      <Pressable onPress={handleSubmit} style={styles} disabled={disabled}>
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
