// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Login.js';
import CadastroScreen from './Cadastro.js';
import PerfilScreen from './Perfil.js';
import RecuperarScreen from './RecuperarSenha.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




