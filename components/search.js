import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default function Search() {
  return (
    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={'Search Todos'}
        placeholderTextColor='#000'
        textAlign='center'
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: '75%',
    alignSelf: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  searchInput: {
    color: '#000',
    textAlign: 'center',
  },
});
