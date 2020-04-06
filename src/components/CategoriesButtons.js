import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

export default function CategoriesButtons(props) {
  let buttonColor = "#000";
  let categorieName = "Todas";
  switch (props.Categorie) {
    case 0:
      buttonColor = MyStyles.colors.orange;
      categorieName = "Todas";
      break;

    case 1:
      buttonColor = "#D93453";
      categorieName = "Ajuda";
      break;

    case 2:
      buttonColor = "#7B80FF";
      categorieName = "Entretenimento";
      break;
    case 3:
      buttonColor = "#CCC13C";
      categorieName = "Educação";
      break;

    case 4:
      buttonColor = "#28B95A";
      categorieName = "Saúde";
      break;

    default:
      buttonColor = "#FF7B7B";
      categorieName = "Todas";
      break;
  }

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        width: 150,
        paddingVertical: 12,
        borderRadius: 50 / 2,
        //   borderWidth: 0.5,
        //   borderColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 4,
          height: 4
        },
        elevation: 2,
        // position: "absolute",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: buttonColor
      }}
    >
      <Text style={{ fontSize: 14, color: "#fff" }}>{categorieName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goButton: {
    width: 150,
    paddingVertical: 10,
    borderRadius: 50 / 2,
    //   borderWidth: 0.5,
    //   borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    // position: "absolute",
    // zIndex: 2000,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  }
});
