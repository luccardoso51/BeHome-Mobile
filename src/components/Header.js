import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
      {props.goBack ? (
        <TouchableOpacity onPress={props.onPressBack}>
          <Text
            style={{
              fontSize: 16,
              color: MyStyles.colors.primary
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.onPressOut}>
          <Text
            style={{
              fontSize: 16,
              color: MyStyles.colors.primary
            }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      )}

      {props.goBack ? null : (
        <TouchableOpacity
          onPress={props.OnPressMyPosts}
          style={{ paddingLeft: 20 }}
        >
          <Text
            style={{
              fontSize: 16,
              color: MyStyles.colors.primary
            }}
          >
            Minhas publicações
          </Text>
        </TouchableOpacity>
      )}

      <View>
        <Text>Lucas Cardoso</Text>
        <Text>ID:66093004</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    zIndex: 500
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
