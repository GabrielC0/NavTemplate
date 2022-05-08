import {
    View,
    Text,
    Button as ButtonNative,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React from "react";
  export default function Button(props) {
    return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text>{props.title || "Button"}</Text>
      </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });