import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonReservas from '../../components/ReservasComponents/ButtonReservas';
import ButtonDependente from '../../components/ReservasComponents/ButtonReservas';
import CalendarIcon from '../../assets/calendario.svg';
import Vector from '../../assets/Vector.png';

const ReservaCard = ({ data, atividade, nome, pessoas, checkOut }) => {
  return (
    <View style={styles.reservaCard}>
      <Text style={styles.reservaData}>{data}</Text>
      <Text style={styles.reservaAtividade}>{atividade}</Text>
      <Text style={styles.reservaInfo}>{nome} | {pessoas}</Text>
      <Text style={styles.reservaCheckOut}>Check-Out - {checkOut}</Text>
      <View style={styles.reservaButtons}>
      <Pressable style={[styles.button1, { backgroundColor: '#BEBEBE' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Não posso ir</Text>
      </Pressable>
      <Pressable style={[styles.button1, { backgroundColor: '#06B6DD' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </Pressable>
      </View>
    </View>
  );
};

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
        <ButtonReservas onPress={() => navigation.navigate('Reservas')} />
      </View>
      <View style={styles.menu2}>
        <ButtonDependente onPress={() => navigation.navigate('Dependentes')} icon={Vector} />
      </View>
      <View style={styles.menu3}>
        <ButtonReservas onPress={() => navigation.navigate('Reservas')} icon={CalendarIcon}/>
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
        <Text style={styles.reservasproximas}>Reservas Proximas</Text>
        <ReservaCard 
          data="Quinta-Feira - 20/06/2024 às 10:20"
          atividade="Piscina"
          nome="Josué Batista de Almeida"
          pessoas="3"
          checkOut="12:20"
        />
        <ReservaCard 
          data="Sexta-Feira - 21/06/2024 às 16:00"
          atividade="Quadra esportiva"
          nome="Mariane Oliveira Duarte"
          pessoas="5"
          checkOut="19:00"
        />
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
  top: 30,
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
    bottom: 18,
    width: 124,
    height: 105,
   },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#009FE3',
  },
  parque: {
    bottom: 38,
    left: 12,
    fontSize: 20,
   },
   parque2: {
    fontSize: 26,
    color: '#06B6DD',
    fontFamily: 'sans-serif-medium',
   },

  reservasproximas: {
     bottom: 35,
     left: 36,
     fontSize: 22,
     color: '#4F5957',
  },  
  menu: {
    bottom: 210,
    right: 28,
  },
  menu2: {
    bottom: 210,
    left: 100,
  },
  menu3: {
    bottom: 210,
    left: 220,
  },
  reservas: {
    color: '#4F555A',
    bottom: 10,
    left: 40,
    fontSize: 17,
  },
  dependentes: {
    color: '#4F555A',
    bottom: 35,
    left: 145,
    fontSize: 17,
  },
  instrucoes: {
    color: '#4F555A',
    bottom: 60,
    left: 280,
    fontSize: 17,
  },
  reservaCard: {
    backgroundColor: '#fff',
    borderRadius: 10, 
    padding: 10,
    marginBottom: 10,
    width: '85%',
    alignSelf: 'center',
    bottom: 20,
    borderWidth: 1,  
    borderColor: '#7F7F7F',  
  },
  reservaData: {
    fontSize: 14, 
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reservaAtividade: {
    fontSize: 12, 
    marginBottom: 4,
  },
  reservaInfo: {
    fontSize: 12, 
    color: '#7F7F7F',
    marginBottom: 4,
  },
  reservaCheckOut: {
    fontSize: 12, 
    color: '#7F7F7F',
    marginBottom: 6,
  },
  reservaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button1: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 80, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
export default HomeCondominio;
