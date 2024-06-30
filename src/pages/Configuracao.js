import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Configuracao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
