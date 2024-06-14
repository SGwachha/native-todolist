import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Todos from "./components/todos";
import Search from "./components/search";

export default function App() {
  const text = [{ title: "Todo 1" }, { title: "Todo 2" }, { title: "Todo 3" }];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.todoWrapper}>
          <Text style={styles.sectionTitle}>Todo List</Text>
          <View style={styles.itemsContainer}>
            {text.map((item, i) => (
              <View key={i}>
                <Todos text={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.btns}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <TouchableOpacity style={styles.addBtn}>
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
  searchContainer: {
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
});
