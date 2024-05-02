// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNavigation from '../pages/ScreenNavigation/ScreenNavigation';
import Home from '../pages/Home/Home';
import Reservas from '../pages/Reservas/Reservas';
import ReservarEspaco from '../pages/Reservas/ReservarEspaco';
import ReservarEspacoTwo from '../pages/Reservas/ReservarEspacoTwo';
import MeusEspacos from '../pages/MeusEspacos/MeusEspacos';
import Instrucoes from '../pages/Instrucoes/Instrucoes';
import Manutencao from '../pages/Manutencao/Manutencao';
import LoginCondominio from '../pages/Login/LoginCondominio';
import LoginCondomino from '../pages/Login/LoginCondomino';
import LoginCondominoTwo from '../pages/Login/LoginCondominoTwo';
import Dependentes from '../pages/Dependentes/Dependentes';
import CadastroDependente from '../pages/Dependentes/CadastroDependente';
import MeusDependentes from '../pages/Dependentes/MeusDependentes';
import CadastroEspacos from '../pages/CadastroEspacos/CadastroEspacos';
import CadastroApto from '../pages/CadastroApto/CadastroApto';
import ApartamentosCadastrados from '../pages/ApartamentosCadastrados/ApartamentosCadastrados';
import Blocos from '../pages/ApartamentosCadastrados/Blocos';





/*import DrawerManutencoes from '../components/DrawerManutencoes'; 
(Erro: 
navigation/Navigation.js (24:31)
Cannot find file '../components/DrawerManutencoes'.
(Dependencies)
navigation/Navigation.js (0:1)
Unable to resolve module 'module://components/DrawerManutencoes.js'
(Device))
*/
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenNavigation">
        <Stack.Screen name="ScreenNavigation" component={ScreenNavigation} />
        <Stack.Screen name="Home" component={Home} />
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
          name="MeusEspacos"
          component={MeusEspacos}
          options={() => ({
            title: 'Meus Espaços',
            headerRight: () => <SettingsIconManutencoes />,
          })}
        />
        <Stack.Screen name='Instrucoes' component={Instrucoes} options={{ title: 'Instruções' }} />
        <Stack.Screen name='Manutencao' component={Manutencao} options={{ title: 'Mantenção' }} />
        <Stack.Screen
          name='LoginCondominio'
          component={LoginCondominio}
          options={{ title: 'Login Condomínio' }}
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
        <Stack.Screen name='CadastroEspacos' component={CadastroEspacos} />
        <Stack.Screen name='CadastroApto' component={CadastroApto} />
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
    </NavigationContainer>
  );
}



function SettingsIconManutencoes() {
  const openDrawer = () => {

  };

  return (
    <IconButton
      icon='cog'
      size={24}
      color='black'
      onPress={openDrawer}
      style={{ marginRight: 10 }}
    />
  );
}

