import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import PostBox from "../components/PostBox";
import { useNavigation } from "react-navigation-hooks";
import CreatePostButton from "../components/CreatePostButton";
import CategoriesButtons from "../components/CategoriesButtons";

// import { Container } from './styles';

export default function components() {
  const { navigate, goBack } = useNavigation();

  const Categories = [
    {
      id: "111",
      type: 0
    },
    {
      id: "22",
      type: 1
    },
    {
      id: "000",
      type: 4
    },
    {
      id: "333",
      type: 2
    },
    {
      id: "323",
      type: 3
    }
  ];

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
            width: "100%"
            // marginBottom: 45
          }}
        >
          <FlatList
            horizontal={true}
            style={{
              // height: 50,
              width: "100%",
              // position: "absolute",
              zIndex: 200000,
              // top: 70,
              // marginHorizontal: 20,
              backgroundColor: "transparent"
            }}
            data={Categories}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 15 }}>
                <CategoriesButtons Categorie={item.type} />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              paddingTop: 20,
              paddingHorizontal: 15,
              width: "100%",
              marginBottom: 45
            }}
          >
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
          </View>
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
