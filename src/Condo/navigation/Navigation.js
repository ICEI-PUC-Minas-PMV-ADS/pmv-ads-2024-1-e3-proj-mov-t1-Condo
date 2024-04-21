// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNavigation from '../pages/ScreenNavigation/ScreenNavigation';
import Home from '../pages/Home/Home';
import Dependentes from '../pages/Dependentes/Dependentes';
import Reservas from '../pages/Reservas/Reservas';
import ReservarEspaco from '../pages/Reservas/ReservarEspaco';
import ReservarEspacoTwoScrenn from '../pages/Reservas/ReservarEspacoTwoScreen';
import LoginCondominio from '../pages/Login/LoginCondominio';
import LoginMorador from '../pages/Login/LoginMorador';
import LoginMorador2 from '../pages/Login/LoginMorador2';
import CadastroEspacos from '../pages/CadastroEspacos/CadastroEspacos';
import CadastroApto from '../pages/CadastroApto/CadastroApto';
import MeusEspacos from '../pages/MeusEspacos/MeusEspacos';
import ApartamentosCadastrados from '../pages/ApartamentosCadastrados/ApartamentoCadastrados';
import Manutencao from '../pages/Manutencao/Manutencao';
import Instrucoes from '../pages/Instrucoes/Instrucoes';
import CadastroDependente from '../pages/Dependentes/CadastroDependente';
import MeusDependentes from '../pages/Dependentes/MeusDependentes';
import Bloco001 from '../pages/ApartamentosCadastrados/Bloco001';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenNavigation">
        <Stack.Screen name='ScreenNavigation' component={ScreenNavigation}/>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Dependentes' component={Dependentes} options={{ title: 'Dependentes' }} />
        <Stack.Screen name='Reservas' component={Reservas} options={{ title: 'Reservas' }}/>
        <Stack.Screen name='ReservarEspaco' component={ReservarEspaco} options={{ title: 'Reservar Espaço' }} />
        <Stack.Screen name='ReservarEspacoTwoScreen' component={ReservarEspacoTwoScrenn} options={{ title: 'Reservar Espaço' }}/>
        <Stack.Screen name='LoginCondominio' component={LoginCondominio} options={{ title: 'Login Condomínio' }}/>
        <Stack.Screen name='LoginMorador' component={LoginMorador} options={{ title: 'Login Condômino' }}/>
        <Stack.Screen name='LoginMorador2' component={LoginMorador2} options={{ title: 'Login Condômino' }}/>
        <Stack.Screen name='CadastroEspacos' component={CadastroEspacos}/>
        <Stack.Screen name='CadastroApto' component={CadastroApto}/>
        <Stack.Screen name='MeusEspacos' component={MeusEspacos}/>
        <Stack.Screen name='ApartamentosCadastrados' component={ApartamentosCadastrados} options={{ title: 'Apartamentos Cadastrados' }}/>
        <Stack.Screen name='Manutencao' component={Manutencao}/>
        <Stack.Screen name='Instrucoes' component={Instrucoes}/>
        <Stack.Screen name='CadastroDependente' component={CadastroDependente} options={{ title: 'Novo Dependente' }}/>
        <Stack.Screen name='MeusDependentes' component={MeusDependentes} options={{ title: 'Meus Dependentes' }}/>
        <Stack.Screen name='Bloco001' component={Bloco001} options={{ title: 'Bloco 001' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
