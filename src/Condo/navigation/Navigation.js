// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import Dependentes from '../pages/Dependentes/Dependentes';
import Reservas from '../pages/Reservas-Josue/Reservas';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dependentes" component={Dependentes} />
        <Stack.Screen name='Reservas' component={Reservas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
