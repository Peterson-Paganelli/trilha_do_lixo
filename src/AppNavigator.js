import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Configuracao from './pages/Configuracao';
import Mapa from './pages/Mapa';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Configuracao"
          component={Configuracao}
          options={{ title: 'Configuracao' }}
        />
        <Stack.Screen 
          name='Perfil'
          component={Perfil}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{ title: 'Mapa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
