import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 50,
    paddingVertical: 100,
    backgroundColor: "powderblue",
  },
  text: {
    color: "#1d1d1f",
    fontSize: 30,
  },
});
