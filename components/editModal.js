import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal as RNModal,
  Text,
} from "react-native";

export default function EditModal({ todosData, i }) {
  const {
    setModalIndex,
    modalIndex,
    setEditedTodos,
    editedTodos,
    todosItem,
    setTodosItem,
    editModal,
    setEditModal,
  } = todosData;
  
  const todosTitle = todosItem[modalIndex];
  
  useEffect(() => {
    if (modalIndex !== null) {
      setEditedTodos(todosTitle);
    }
  }, [modalIndex, todosTitle, setEditedTodos]);

  function handleUpdate(i) {
    const newTodos = [...todosItem];
    newTodos[i] = editedTodos;
    setTodosItem(newTodos);
    setModalIndex(null);
    setEditModal(false);
  }

  return (
    <RNModal
      transparent={true}
      visible={editModal}
      animationType="fade"
      onRequestClose={() => setEditModal(false)}
    >
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View style={styles.headingRow}>
            <Text style={styles.heading}>{todosTitle}</Text>
            <TouchableOpacity
              onPress={() => setEditModal(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>x</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            value={editedTodos}
            onChangeText={(val) => setEditedTodos(val)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleUpdate(i)}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  headingRow: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
