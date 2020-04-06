import React from "react";
import { TouchableOpacity, Image, View, StyleSheet, Text } from "react-native";
import MyStyles from "../assets/styles/MyStyles";

// import { Container } from './styles';

import postImage from "../assets/images/postImage.jpg";

export default function PostBoxEdit(props) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et";

  const title = "Aula de violão gratis online";

  const author = "Chimbinha das guitarras";
  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity style={styles.eraseButton}>
        <Text style={{ color: MyStyles.colors.primary }}>Apagar</Text>
      </TouchableOpacity>
      <View style={{ width: "100%" }}>
        <Image
          style={{
            width: "100%",
            height: 260,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
          resizeMethod="resize"
          resizeMode="cover"
          source={{
            uri: props.Img_url
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 5,
          backgroundColor: MyStyles.colors.primary
        }}
      />
      <View style={{ width: "100%", paddingVertical: 5, paddingHorizontal: 5 }}>
        <View>
          <Text style={{ textAlign: "auto", fontSize: 16, fontWeight: "bold" }}>
            {props.Title}
          </Text>
          {/* <Text>{props.Author} </Text> */}
        </View>

        <View style={{ width: "100%", paddingVertical: 5 }}>
          <Text style={{ textAlign: "auto", fontSize: 14 }}>
            {props.Description}
          </Text>
        </View>

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
            onPress={props.OnPressContent}
            style={styles.goButton}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Acessar</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.likeButton}></TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    // paddingVertical: 20,
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
  },
  likeButton: {
    width: 50,
    height: 50,
    backgroundColor: MyStyles.colors.primary,
    borderRadius: 50 / 2,
    // borderWidth: 0.5,
    // borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  eraseButton: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 70 / 2,
    borderWidth: 0.5,
    borderColor: MyStyles.colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 100000,
    alignItems: "center",
    justifyContent: "center"
  },
  goButton: {
    width: 180,
    height: 50,
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
    alignItems: "center",
    justifyContent: "center"
  }
});
