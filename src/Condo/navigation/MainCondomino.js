import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Image} from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeCondomino from '../pages/Home/HomeCondomino';
import Reservas from '../pages/Reservas/Reservas';
import ReservarEspaco from '../pages/Reservas/ReservarEspaco';
import ReservarEspacoTwo from '../pages/Reservas/ReservarEspacoTwo';
import MinhasReservas from '../pages/Reservas/MinhasReservas';
import Instrucoes from '../pages/Instrucoes/Instrucoes';
import Dependentes from '../pages/Dependentes/Dependentes';
import CadastroDependente from '../pages/Dependentes/CadastroDependente';
import MeusDependentes from '../pages/Dependentes/MeusDependentes';
import DadosMorador from '../pages/DadosMorador/DadosMorador';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeCondomino">
       <Drawer.Screen
        name="HomeCondomino"
        component={HomeCondomino}
        options={{
          title: '',
          drawerLabel: 'Home', // Título para a tela de Home no menu lateral
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <IconButton
              icon={() => <Icon name="notifications-outline" size={30} color="#7F7F7F" />}
              onPress={() => alert('Nenhuma notificação!')}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('../assets/logoCondoHeader.png')}
              style={{ width: 150, height: 40, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reservas"
        component={Reservas}
        options={{
          title: 'Reservas',
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar-outline" color={color} size={size} />
          ),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.goBack()}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name='ReservarEspaco'
        component={ReservarEspaco}
        options={{
          title: 'Reservar Espaço',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Reservas')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />

<Drawer.Screen
        name='ReservarEspacoTwo'
        component={ReservarEspacoTwo}
        options={{
          title: 'Reservar Espaço',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Reservas')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />

      <Drawer.Screen
        name='MinhasReservas'
        component={MinhasReservas}
        options={{
          title: 'Minhas Reservas',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Reservas')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />
<Drawer.Screen
        name='DadosMorador'
        component={DadosMorador}
        options={{
          title: 'Dados Cadastrais - Condômino',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Reservas')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />

      <Drawer.Screen
        name="Dependentes"
        component={Dependentes}
        options={{
          title: 'Dependentes',
          drawerIcon: ({ color, size }) => (
            <Icon name="people-outline" color={color} size={size} />
          ),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.goBack()}
              />
            );
          },
        }}
      />

<Drawer.Screen
        name='CadastroDependente'
        component={CadastroDependente}
        options={{
          title: 'Novo Dependente',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Dependentes')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />

<Drawer.Screen
        name='MeusDependentes'
        component={MeusDependentes}
        options={{
          title: 'Meus Dependentes',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.navigate('Dependentes')}
              />
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <IconButton
              icon={() => <Icon name="home-outline" size={24} color="#7F7F7F" />}
              onPress={() => navigation.goBack()}
            />
          );},
          drawerItemStyle: { display: 'none' }, // Oculta o item no menu lateral
        }}
      />

<Drawer.Screen
        name="Instrucoes"
        component={Instrucoes}
        options={{
          title: 'Instruções',
          drawerIcon: ({ color, size }) => (
            <Icon name="book-outline" color={color} size={size} />
          ),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <IconButton
                icon={() => <Icon name="arrow-back" size={30} color="#7F7F7F" />}
                onPress={() => navigation.goBack()}
              />
            );
          },
        }}
      />

    </Drawer.Navigator>
        
  );
};

export default DrawerNavigator;
