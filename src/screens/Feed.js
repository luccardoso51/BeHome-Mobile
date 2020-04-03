import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import PostBox from "../components/PostBox";
import { useNavigation } from "react-navigation-hooks";
import CreatePostButton from "../components/CreatePostButton";

// import { Container } from './styles';

export default function components() {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        onPressOut={() => navigate("Login")}
        OnPressMyPosts={() => navigate("MyPosts")}
      />
      <View
        style={{
          justifyContent: "center"
        }}
      >
        <ScrollView
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            width: "100%",
            marginBottom: 45
          }}
        >
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
        </ScrollView>

        <CreatePostButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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