import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import MyStyles from "../assets/styles/MyStyles";
import { useNavigation } from "react-navigation-hooks";

// import { Container } from './styles';

export default function CreatePostButton() {
  const { navigate, goBack } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate("CreatePost")}
      style={styles.goButton}
    >
      <Text
        style={{
          fontSize: 16,
          color: MyStyles.colors.white,
          fontWeight: "bold"
        }}
      >
        Criar uma nova publicação
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: MyStyles.colors.orange,
    borderRadius: 50 / 2,
    // borderWidth: 0.5,
    // borderColor: MyStyles.colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    // position: "absolute",
    alignItems: "center",
    marginTop: 60,
    bottom: 130,
    alignSelf: "center",
    justifyContent: "center"
  }
});
