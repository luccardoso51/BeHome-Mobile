import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import RegisterBox from "../components/RegisterBox";
import { useNavigation } from "react-navigation-hooks";
import api from "../services/api";

import MyStyles from "../assets/styles/MyStyles";

import BehomeLogo from "../assets/images/BeHome.png";
import BehomeSecond from "../assets/images/SecondName.png";
import loginImage from "../assets/images/loginImage.png";

// import { Container } from './styles';

export default function screens() {
  const { navigate } = useNavigation();

  const [info, setInfo] = useState({
    name: "",
    email: ""
  });

  async function handleRegister() {
    // e.preventDefault();

    console.log(info);

    const data = {
      name: info.name,
      email: info.email
    };

    try {
      const response = await api.post("users", data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      navigate("Login");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageViewLogo}>
        <Image
          style={{ width: "100%", paddingHorizontal: 20 }}
          resizeMethod="resize"
          resizeMode="contain"
          source={BehomeLogo}
        />
        <Image
          style={{
            width: 320,
            marginBottom: 10,
            zIndex: 2,
            marginTop: -30
          }}
          resizeMethod="resize"
          resizeMode="contain"
          source={BehomeSecond}
        />
      </View>

      <RegisterBox
        onPress={() => {
          handleRegister();
        }}
        onChangeName={name => setInfo({ ...info, name })}
        onChangeEmail={email => setInfo({ ...info, email })}
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text
          style={{
            fontSize: 18,
            paddingTop: 70,
            color: MyStyles.colors.primary
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  imageViewLogo: {
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
