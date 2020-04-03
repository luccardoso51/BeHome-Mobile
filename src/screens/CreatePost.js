import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import { useNavigation } from "react-navigation-hooks";
import MyStyles from "../assets/styles/MyStyles";
import PostBoxEdit from "../components/PostBoxEdit";
import CreatePostButton from "../components/CreatePostButton";

// import { Container } from './styles';

export default function CreatePost() {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Header goBack={true} onPressBack={() => navigate("Feed")} />
      <View
        style={{
          justifyContent: "center"
        }}
      >
        <ScrollView
          style={{
            paddingHorizontal: 20,
            width: "100%",
            marginBottom: 45
          }}
        >
          <Text
            style={{
              fontSize: 20,
              paddingVertical: 20,
              color: MyStyles.colors.primary
            }}
          >
            Minhas publicações
          </Text>

          <PostBoxEdit />
          <PostBoxEdit />
          <PostBoxEdit />
          <PostBoxEdit />
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
