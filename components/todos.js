import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Todos({ todosItem }) {
  if (!todosItem) return;

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemTitle}>{todosItem}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemTitle: {
    color: "#000",
    fontSize: 18,
    flexWrap: "wrap",
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
});
