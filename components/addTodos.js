import React from "react";
import { TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function AddTodos({ todosData }) {
  const { todos, setTodos } = todosData;
  return (
    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={"Add New Todos"}
        textAlign="center"
        value={todos}
        onChangeText={(val) => setTodos(val)}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "75%",
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
  },
  searchInput: {
    color: "#000",
    textAlign: "center",
  },
});
