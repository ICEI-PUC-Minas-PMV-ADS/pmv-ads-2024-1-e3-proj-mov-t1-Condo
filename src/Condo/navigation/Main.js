import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import MeusEspacos from '../pages/MeusEspacos/MeusEspacos';
import Instrucoes from '../pages/Instrucoes/Instrucoes';
import Manutencao from '../pages/Manutencao/Manutencao';
import LoginCondominio from '../pages/Login/LoginCondominio';
import RegisterCondominio from '../pages/Login/RegisterCondominio';
import LoginCondomino from '../pages/Login/LoginCondomino';
import LoginCondominoTwo from '../pages/Login/LoginCondominoTwo';
import AdicionarManutencao from '../pages/Manutencao/AdicionarManutencao';
import CadastroEspacos from '../pages/CadastroEspacos/CadastroEspacos';
import CadastroApto from '../pages/CadastroApto/CadastroApto';
import ApartamentosCadastrados from '../pages/ApartamentosCadastrados/ApartamentosCadastrados';
import Blocos from '../pages/ApartamentosCadastrados/Blocos';
import HomeCondominio from '../pages/Home/HomeCondomino';
import ScreenNavigationCondominio from '../pages/ScreenNavigation/ScreenNavigationCondominio'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="ScreenNavigationCondominio">
      <Stack.Screen
        name="ScreenNavigationCondominio"
        component={ScreenNavigationCondominio}
        options={{ header: () => null }}
      />
      <Stack.Screen 
      name='HomeCondominio'
      component={HomeCondominio}
      options={{header: null}}
      />
      <Stack.Screen
        name="MeusEspacos"
        component={MeusEspacos}
        options={() => ({
          title: 'Meus Espaços',
          headerRight: () => <SettingsIconManutencoes />,
        })}
      />
      <Stack.Screen name='Instrucoes' component={Instrucoes} options={{ title: 'Instruções' }} />
      <Stack.Screen name='Manutencao' component={Manutencao} options={{ title: 'Em Manutenção' }} />
      <Stack.Screen
        name='LoginCondominio'
        component={LoginCondominio}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='RegisterCondominio'
        component={RegisterCondominio}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="LoginCondomino"
        component={LoginCondomino}
        options={{ title: 'Login Condômino' }}
      />
      <Stack.Screen
        name='LoginCondominoTwo'
        component={LoginCondominoTwo}
        options={{ title: 'Login Condômino' }}
      />
      <Stack.Screen
        name="AdicionarManutencao"
        component={AdicionarManutencao}
        options={{
          title: 'Manutenção',
          headerRight: () => <AddIconManutencoes />
        }}
      />
      <Stack.Screen 
      name='CadastroEspacos' 
      component={CadastroEspacos} 
      options={{ title: 'Cadastrar Espaço' }}
      />

      <Stack.Screen 
      name='CadastroApto' 
      component={CadastroApto} 
      options={{ title: 'Cadastrar Apartamento' }}
      />
      <Stack.Screen
        name="ApartamentosCadastrados"
        component={ApartamentosCadastrados}
        options={{ title: 'Apartamentos Cadastrados' }}
      />
      <Stack.Screen
        name="Blocos"
        component={Blocos}
        options={{ title: 'Blocos Cadastrados' }}
      />
    </Stack.Navigator>
  );

  function SettingsIconManutencoes() {
    const openDrawer = () => { };

    return (
      <IconButton
        icon="cog"
        size={24}
        color="black"
        onPress={openDrawer}
        style={{ marginRight: 10 }}
      />
    );
  }

  function AddIconManutencoes() {

    return (
      <IconButton
        icon="plus"
        size={24}
        color="black"
        onPress={() => { }}
        style={{ marginRight: 10 }}
      />
    );
  }
};

export default Main;
