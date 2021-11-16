import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

interface Iprops {
  label: string;
  name: string;
  placeHolder: string;
  icon: boolean;
  handleChange: any;
  handleBlur: any;
  value: string;
}

export default function InputLogin(props: Iprops) {
  const { label, name, placeHolder, icon, handleChange, value, handleBlur } =
    props;
  const [NoVisiblePass, setVisiblePass] = useState<boolean>(true);

  return (
    <View style={styles.inputField}>
      <View style={styles.textArea}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          onChangeText={handleChange(name)}
          value={value}
          onBlur={handleBlur(name)}
          secureTextEntry={icon && NoVisiblePass}
        />
      </View>
      {icon && (
        <View style={styles.icon}>
          {NoVisiblePass ? (
            <Ionicons
              name="eye"
              size={24}
              color="#777777"
              onPress={() => setVisiblePass(!NoVisiblePass)}
            />
          ) : (
            <Ionicons
              name="md-eye-off"
              size={24}
              color="#777777"
              onPress={() => setVisiblePass(!NoVisiblePass)}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "#E8E8E8",
    width: 328,
    height: 56,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  textArea: {
    flexDirection: "column",
    width: "85%",
  },
  label: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "#000000",
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 0.15,
    maxHeight: "70%",
  },
  icon: {
    margin: 0,
    padding: 0,
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
