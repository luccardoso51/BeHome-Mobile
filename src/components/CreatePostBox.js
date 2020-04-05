import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

import postImage from "../assets/images/postImage.jpg";

export default function CreatePostBox(props) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et";

  const title = "Aula de violão gratis online";

  const author = "Chimbinha das guitarras";

  const uploadImage = false;
  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity style={{ width: "100%" }}>
        {uploadImage ? (
          <Image
            style={{
              width: "100%",
              height: 260
            }}
            resizeMethod="resize"
            resizeMode="cover"
            source={postImage}
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: 150,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: MyStyles.colors.primary,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text> Faça o upload de uma imagem</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.inputView}>
        <TextInput
          style={{
            height: 40,
            width: "100%"
          }}
          placeholder={"Titulo da publicação"}
        />
      </View>

      {/* <View style={styles.inputViewDescription}> */}
      <TextInput
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        style={styles.inputViewDescription}
        placeholder={"Descrição"}
        returnKeyType="done"
        returnKeyType="done"
      />

      <View style={styles.inputView}>
        <TextInput
          style={{
            height: 40,
            width: "100%"
          }}
          placeholder={"Link de acesso"}
        />
      </View>
      {/* </View> */}

      <View style={{ width: "100%", marginVertical: 5, paddingHorizontal: 5 }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            justifyContent: "center",

            width: "100%",
            paddingTop: 10
          }}
        >
          {/* <TouchableOpacity style={styles.likeButton}></TouchableOpacity> */}
          <TouchableOpacity
            onPress={props.onPressPost}
            style={styles.postButton}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Publicar</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.likeButton}></TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    padding: 10,
    width: "100%",
    // marginHorizontal: 20,
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    marginBottom: 50
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  inputView: {
    paddingVertical: 2,
    width: "100%",
    marginVertical: 20,
    // backgroundColor: "#000",
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: MyStyles.colors.primary,
    // alignItems: "center",
    borderRadius: 10
  },
  inputViewDescription: {
    width: "100%",
    borderWidth: 1,
    // height: 200,
    borderColor: MyStyles.colors.primary,
    // alignItems: "left",
    borderRadius: 10
  },
  postButton: {
    paddingHorizontal: 60,
    paddingVertical: 15,
    backgroundColor: MyStyles.colors.primary,
    borderRadius: 50 / 2,
    //   borderWidth: 0.5,
    //   borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    // position: "absolute",
    alignItems: "center",

    alignSelf: "center",
    justifyContent: "center"
  }
});
