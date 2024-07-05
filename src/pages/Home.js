import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation})  {
  return (
    <View style={styles.container}>
      <Text>Novidades e durações das trilhas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mapa')}
      >
        <Text style={styles.buttonText}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Configuracao')}
      >
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});
