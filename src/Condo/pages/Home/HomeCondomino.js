import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonReservas from '../../components/ReservasComponents/ButtonReservas';
import ButtonDependente from '../../components/ReservasComponents/ButtonReservas';
import CalendarIcon from '../../assets/calendario.svg';
import Vector from '../../assets/Vector.png';

const HomeCondominio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerh}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={30} color="#242220" style={styles.menuIcon} />
            </Pressable>
            <Text style={styles.headerText}></Text>
            <Pressable onPress={() => alert('Nenhuma notificação!')}>
            <Ionicons name="notifications-outline" size={30} color="#242220" style={styles.notificationIcon} />
          </Pressable>
        </View>
          <View style={styles.logoContainer}>
          <Image source={require('../../assets/LogoCondo2.png')} style={styles.logo1} />
          </View>
      <View style={styles.parque}>
        <Text style={styles.parque2}>Parque das Orquedeas</Text>
      </View>
    </ScrollView>
    
      <View style={styles.menu}>
      <ButtonReservas
       onPress={() => navigation.navigate('Reservas')}
       />
     </View>
     <View style={styles.menu2}>
     <ButtonDependente
        onPress={() => navigation.navigate('Dependentes')}
        icon={Vector}
      />
     </View>
     <View style={styles.menu3}>
      <ButtonReservas
       onPress={() => navigation.navigate('Reservas')}
       icon={CalendarIcon}
       />
     </View>
     <View>
        <Text style={styles.reservas}>Reservas</Text>
      </View>
      <View>
        <Text style={styles.dependentes}>Dependentes</Text>
      </View>
      <View>
        <Text style={styles.instrucoes}>Instruções</Text>
      </View>

     <View>
        <Text style={styles.reservasp}>Reservas Proximas</Text>
      </View>
  </View>    
  );
};

const styles = StyleSheet.create({
  containerh: {
    flex: 1,
   backgroundColor: '#fff',
  },
  container: {  
  padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#009FE3',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
   logo1: {
    width: 124,
    height: 105,
    bottom: 40,
   },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#009FE3',
  },
  parque: {
    bottom: 65,
    left: 12,
    fontSize: 20,
   },
   parque2: {
    fontSize: 28,
    color: '#06B6DD',
    fontFamily: 'sans-serif-medium',
   },
  menu: {
    bottom: 590,
    right: 30,
  },
  reservasp: {
     bottom: 320,
     left: 40,
     fontSize: 24,
     color: '#4F5957',
  },
  
  menu: {
    bottom: 530,
    right: 28,
  },
  menu2: {
    bottom: 530,
    left: 100,
  },
  menu3: {
    bottom: 530,
    left: 220,
  },
  reservas: {
    color: '#4F555A',
    bottom: 324,
    left: 40,
    fontSize: 17,
  },
  dependentes: {
    color: '#4F555A',
    bottom: 348,
    left: 145,
    fontSize: 17,
  },
  instrucoes: {
    color: '#4F555A',
    bottom: 373,
    left: 280,
    fontSize: 17,
  },
});

export default HomeCondominio;

