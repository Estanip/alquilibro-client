import React from "react";
import { View, Text, Alert } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./uploadedBookStyles";
import UploadedBookCard from "../../components/Card/UploadedBookCard";
import ButtonText from "../../components/Button/ButtonText";
import textStyle from "../../components/Text/textStyles";
import buttonStyle from "../../components/Button/buttonStyles";

export default function UploadedBookScreen({ route }):any {

  let price = route.params.price;

  return (
    <>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <Entypo
            name="upload-to-cloud"
            size={34}
            color="black"
            style={{ marginRight: 10, marginBottom: 10 }}
          />
          <AntDesign name="checkcircle" size={34} color="black" />
        </View>

        <Text style={styles.titleText}>
          {"FELICITACIONES!\nSUBISTE UN NUEVO LIBRO CON EXITO!"}
        </Text>
      </View>

      <View style={styles.offerDetailContainer}>
        <Text style={styles.offerText}>Ya estas ofrenciendo tu libro: </Text>
      </View>

      <UploadedBookCard price={price} />

      <View style={styles.buttonsContainer}>
        <ButtonText
          name={"MIS LIBROS SUBIDOS"}
          textStyle={textStyle.buttonTextBlack}
          styles={buttonStyle.white}
          onPress={() => Alert.alert("Upload Image")}
          disabled={false}
        />
        <ButtonText
          name={"SUBIR MÁS LIBROS"}
          textStyle={textStyle.buttonTextBlack}
          styles={buttonStyle.greenNoBorder}
          onPress={() => Alert.alert("SUBIR MAS")}
          disabled={false}
        />
      </View>
    </>
  );
}


