import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function SearchInput({ todosData }) {
  const { setSearchTodos, todosItem, searchTodos, setFilteredTodos } = todosData;

  useEffect(() => {
    const searchedTodo = todosItem?.filter((todo) =>
      todo?.toLowerCase().includes(searchTodos.toLowerCase())
    );
    setFilteredTodos(searchedTodo);
  }, [searchTodos, todosItem]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchTodos}
          onChangeText={(val) => setSearchTodos(val)}
          placeholder="Search Todos"
        />
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
