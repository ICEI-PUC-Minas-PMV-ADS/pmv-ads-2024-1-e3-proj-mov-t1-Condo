import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import HomeCondomino from '../pages/Home/HomeCondomino';
import Reservas from '../pages/Reservas/Reservas';
import ReservarEspaco from '../pages/Reservas/ReservarEspaco';
import ReservarEspacoTwo from '../pages/Reservas/ReservarEspacoTwo';
import MinhasReservas from '../pages/Reservas/MinhasReservas';
import Instrucoes from '../pages/Instrucoes/Instrucoes';
import Dependentes from '../pages/Dependentes/Dependentes';
import CadastroDependente from '../pages/Dependentes/CadastroDependente';
import MeusDependentes from '../pages/Dependentes/MeusDependentes';
import ScreenNavigationCondomino from '../pages/ScreenNavigation/ScreenNavigationCondomino';

const Stack = createNativeStackNavigator();

const MainCondomino = () => {
  return (
    <Stack.Navigator initialRouteName="ScreenNavigationCondomino"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff', //Cor de fundo do cabeçalho
      },
      headerTitleStyle: {
        color: '#7F7F7F', //Cor do título do cabeçalho
      },
      headerTintColor: '#7F7F7F', //Cor das setas de navegação
    }}>
      <Stack.Screen
      name='ScreenNavigationCondomino'
      component={ScreenNavigationCondomino}
      options={{
        headerShown: null
      }}
      />
     <Stack.Screen
  name="HomeCondomino"
  component={HomeCondomino}
  options={{ header: () => null }}
/>

      <Stack.Screen
        name="Reservas"
        component={Reservas}
        options={({ navigation }) => ({
          title: 'Reservas',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ReservarEspaco"
        component={ReservarEspaco}
        options={({ navigation }) => ({
          title: 'Reservar Espaço',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ReservarEspacoTwo"
        component={ReservarEspacoTwo}
        options={({ navigation }) => ({
          title: 'Reservar Espaço',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })}
      />
      <Stack.Screen
       name='MinhasReservas'
       component={MinhasReservas}
       options={({ navigation }) => ({
        title: 'Minhas Reservas',
        headerRight: () => (
          <IconButton
              icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
              onPress={() => navigation.navigate('HomeCondomino')}
          />
        ),
      })}
       />
      <Stack.Screen name='Instrucoes' component={Instrucoes} options={({ navigation }) => ({
          title: 'Instruções',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })} />
      
      <Stack.Screen
        name="Dependentes"
        component={Dependentes}
        options={({ navigation }) => ({
          title: 'Dependentes',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CadastroDependente"
        component={CadastroDependente}
        options={({ navigation }) => ({
          title: 'Novo Dependente',
          headerRight: () => (
            <IconButton
                icon={() => <Icon name="home" size={22} color="#7F7F7F" />}
                onPress={() => navigation.navigate('HomeCondomino')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MeusDependentes"
        component={MeusDependentes}
        options={{ title: 'Meus Dependentes' }}
      />
      
    </Stack.Navigator>
  );

}

const styles = StyleSheet.create({
  Stack: {
    color: "#7F7F7F",
  }
});

export default MainCondomino;
