import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const Home=()=>{
  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/random" }}
      style={styles.background}
    >
      <View style={styles.buttonContainer}>
        <Button  style={styles.button}>
          Login
        </Button>
        <Button  style={styles.button}>
          Sign Up
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default Home;
