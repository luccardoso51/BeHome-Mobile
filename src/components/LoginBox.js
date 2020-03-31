import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

export default function components(props) {
  return (
    <View
      style={{
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
      }}
    >
      <Text
        style={{
          fontSize: 22,
          paddingBottom: 20,
          color: MyStyles.colors.primary
        }}
      >
        {" "}
        Login{" "}
      </Text>
      <View
        style={{
          paddingVertical: 15,
          width: "100%",
          marginBottom: 20,
          // backgroundColor: "#000",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: MyStyles.colors.primary,
          alignItems: "center",
          borderRadius: 10
        }}
      >
        <TextInput
          style={{
            height: 15
          }}
          placeholder={"Entre com seu ID"}
        />
      </View>

      <TouchableOpacity
        style={{
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
        }}
        onPress={props.onPress}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}> Entrar </Text>
      </TouchableOpacity>
    </View>
  );
}
