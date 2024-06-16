import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal as RNModal,
} from "react-native";

export default function DeleteConfirmationModal({ todosData, i }) {
  const {
    modalIndex,
    setModalIndex,
    todosItem,
    setTodosItem,
    onConfirm,
    setOnConfirm,
  } = todosData;

  const todosTitle = todosItem[modalIndex];

  function handleDeleteTodos(i) {
    const newTodos = [...todosItem];
    newTodos.splice(i, 1);
    setTodosItem(newTodos);
    setModalIndex(null);
    setOnConfirm(false);
  }

  return (
    <RNModal
      transparent={true}
      visible={onConfirm}
      animationType="fade"
      onRequestClose={() => setOnConfirm(false)}
    >
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirm Deletion</Text>
          <Text style={styles.message}>
            Are you sure you want to delete this {todosTitle} Todo?
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOnConfirm(true)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={() => handleDeleteTodos(i)}
            >
              <Text style={styles.confirmButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButtonText: {
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#ff3b30",
  },
  confirmButtonText: {
    color: "#fff",
  },
});
