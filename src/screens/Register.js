import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import RegisterBox from "../components/RegisterBox";
import { useNavigation } from "react-navigation-hooks";
import MyStyles from "../assets/styles/MyStyles";

import BehomeLogo from "../assets/images/BeHome.png";
import BehomeSecond from "../assets/images/SecondName.png";
import loginImage from "../assets/images/loginImage.png";

// import { Container } from './styles';

export default function screens() {
  const { navigate } = useNavigation();

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
          navigate("Feed");
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigate("Login");
        }}
      >
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
