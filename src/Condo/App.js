// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Dependentes from './pages/Dependentes';
import MeusEspacos from './pages/MeusEspacos/MeusEspacos';
import Manutencao from './pages/Manutencao/Manutencao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dependentes" component={Dependentes} />
        <Stack.Screen name="MeusEspacos" component={MeusEspacos} />
        <Stack.Screen name="Manutencao" component={Manutencao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};