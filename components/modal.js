import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal as RNModal,
} from "react-native";
import DeleteConfirmation from "./deleteConfirmation";
import EditModal from "./editModal";

export default function Modal({ todosData, i }) {
  const {
    modalIndex,
    setModalIndex,
    todosItem,
    onConfirm,
    setOnConfirm,
    editModal,
    setEditModal,
  } = todosData;
  const todosTitle = todosItem[modalIndex];

  return (
    <RNModal
      transparent={true}
      visible={modalIndex !== null}
      animationType="fade"
      onRequestClose={() => setModalIndex(null)}
    >
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View style={styles.headingRow}>
            <Text style={styles.heading}>{todosTitle}</Text>
            <TouchableOpacity
              onPress={() => setModalIndex(null)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>x</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setOnConfirm(true)}
            style={styles.modalButton}
          >
            <Text style={styles.modalButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setEditModal(true)}
          >
            <Text style={styles.modalButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {onConfirm && <DeleteConfirmation todosData={todosData} i={i} />}
      {editModal && <EditModal todosData={todosData} i={i}/>}
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
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
    color: "#000",
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
});
