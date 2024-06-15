import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
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
    <Stack.Navigator initialRouteName="ScreenNavigationCondomino">
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
        options={{ title: 'Reservas' }}
      />
      <Stack.Screen
        name="ReservarEspaco"
        component={ReservarEspaco}
        options={{ title: 'Reservar Espaço' }}
      />
      <Stack.Screen
        name="ReservarEspacoTwo"
        component={ReservarEspacoTwo}
        options={{ title: 'Reservar Espaço' }}
      />
      <Stack.Screen
       name='MinhasReservas'
       component={MinhasReservas}
       options={{title: 'Minhas Reservas'}}
       />
      <Stack.Screen name='Instrucoes' component={Instrucoes} options={{ title: 'Instruções' }} />
      
      <Stack.Screen
        name="Dependentes"
        component={Dependentes}
        options={{ title: 'Dependentes' }}
      />
      <Stack.Screen
        name="CadastroDependente"
        component={CadastroDependente}
        options={{ title: 'Novo Dependente' }}
      />
      <Stack.Screen
        name="MeusDependentes"
        component={MeusDependentes}
        options={{ title: 'Meus Dependentes' }}
      />
      
    </Stack.Navigator>
  );

}

export default MainCondomino;
