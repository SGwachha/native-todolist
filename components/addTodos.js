import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function AddTodos({ todosData }) {
  const { newTodo, setNewTodo } = todosData;
  return (
    <View style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.addInput}
        placeholder={"Add New Todos"}
        textAlign="center"
        value={newTodo}
        onChangeText={(val) => setNewTodo(val)}
      />
    </View>
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
