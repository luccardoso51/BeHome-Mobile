import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LoginBox from "../components/LoginBox";
import { useNavigation } from "react-navigation-hooks";
import api from "../services/api";

import BehomeLogo from "../assets/images/BeHome.png";
import BehomeSecond from "../assets/images/SecondName.png";
import loginImage from "../assets/images/loginImage.png";

// import { Container } from './styles';

export default function screens() {
  const [id, setId] = useState("");
  const { navigate } = useNavigation();

  async function handleLogin() {
    // e.preventDefault();

    try {
      // const response = await api.post("sessions", { id });

      // localStorage.setItem("ongId", id);
      // localStorage.setItem("ongName", response.data.name);

      navigate("Feed");
      // console.log(response);
    } catch (err) {
      alert("Falha no login, tente novamente.");
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

      <LoginBox onChangeID={txt => setId(txt)} onPress={handleLogin} />

      <TouchableOpacity
        onPress={() => {
          navigate("Register");
        }}
      >
        <Text style={{ fontSize: 18, paddingTop: 10, color: "#000" }}>
          Não tenho cadastro
        </Text>
      </TouchableOpacity>

      <View style={styles.imageView}>
        <Image
          style={{ width: "100%", height: 225, marginTop: 30 }}
          resizeMethod="resize"
          resizeMode="contain"
          source={loginImage}
        />
      </View>
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
