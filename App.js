import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Todos from "./components/todos";
import AddTodos from "./components/addTodos";
import SearchInput from "./components/searchInput";
import Modal from "./components/modal";

export default function App() {
  const [todosItem, setTodosItem] = useState([]);
  const [modalIndex, setModalIndex] = useState(null);
  const [onConfirm, setOnConfirm] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editedTodos, setEditedTodos] = useState([]);
  const [searchTodos, setSearchTodos] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const scrollViewRef = useRef()

  const todosData = {
    modalIndex,
    setModalIndex,
    todosItem,
    setTodosItem,
    onConfirm,
    setOnConfirm,
    editModal,
    setEditModal,
    editedTodos,
    setEditedTodos,
    searchTodos,
    setSearchTodos,
    filteredTodos,
    setFilteredTodos,
    newTodo,
    setNewTodo,
  };

  function handleAddTodos() {
    if (newTodo.trim() !== "") {
      setTodosItem([...todosItem, newTodo]);
      setNewTodo("");
      setFilteredTodos(
        [...todosItem, newTodo].filter((todo) =>
          todo?.toLowerCase().includes(searchTodos.toLowerCase())
        )
      );
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }

  function handleModal(i) {
    setModalIndex(i === modalIndex ? null : i);
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>
        <View style={styles.searchInput}>
          <SearchInput todosData={todosData} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollViewRef}>
          <View style={styles.itemsContainer}>
            {filteredTodos.map((item, i) => (
              <View key={i}>
                <TouchableOpacity onPress={() => handleModal(i)}>
                  <Todos todosItem={item} />
                </TouchableOpacity>
                <View style={styles.modalContainer}>
                  {modalIndex === i && <Modal todosData={todosData} i={i} />}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.btns}>
        <View style={styles.addTodos}>
          <AddTodos todosData={todosData} />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={handleAddTodos}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  todoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  itemsContainer: {
    marginTop: 30,
  },
  btns: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addTodos: {
    flex: 1,
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 35,
    color: "#000",
  },
  searchInput: {
    marginBottom: 15
  },
});
