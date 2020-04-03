import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

export default function RegisterBox(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          paddingBottom: 20,
          color: MyStyles.colors.primary
        }}
      >
        Cadaste-se
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={{
            height: 45,
            textAlign: "center",
            width: "100%"
          }}
          // keyboardType="number-pad"
          placeholder={"Nome e sobrenome"}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={{
            height: 45,
            textAlign: "center",
            width: "100%"
          }}
          // keyboardType="number-pad"
          placeholder={"Seu email"}
        />
      </View>

      <TouchableOpacity style={styles.goButton} onPress={props.onPress}>
        <Text style={{ fontSize: 18, color: "#fff" }}> Cadastrar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: "100%",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  imageViewLogo: {
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  goButton: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: MyStyles.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  inputView: {
    paddingVertical: 5,
    width: "100%",
    marginBottom: 20,
    // backgroundColor: "#000",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: MyStyles.colors.primary,
    alignItems: "center",
    borderRadius: 10
  }
});
