
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Perfil({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Configuracao')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Perfil</Text>
      <Text>Recompensas pelos lixos coletados</Text>
      <Text>Como resgatar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
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
