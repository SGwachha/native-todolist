import React from "react";
import { TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function AddTodos({ todosData }) {
  const { newTodo, setNewTodo } = todosData;
  return (
    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.addInput}
        placeholder={"Add New Todos"}
        textAlign="center"
        value={newTodo}
        onChangeText={(val) => setNewTodo(val)}
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
  addInput: {
    color: "#000",
    textAlign: "center",
  },
});
