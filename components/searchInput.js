import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search Todos"></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
  },
  input: {
    textAlign: "center",
  },
});
