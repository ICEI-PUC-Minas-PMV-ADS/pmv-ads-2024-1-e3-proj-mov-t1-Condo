import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#000" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => alert('Notificações')}>
          <Ionicons name="notifications-outline" size={30} color="#000" style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
          <Image source={require('../../assets/LogoCondo2.png')} style={styles.logo1}/>
      </View>
      <View style={styles.parque}>
        <Text style={styles.parque2}> Parque das Orquedeas </Text>
      </View>

      <View style={{ bottom: 35, borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}  />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarEspaco')}>
        <Ionicons name="grid" size={20} color="#333" style={styles.icon} />
        <Text style={styles.buttonText}>Cadastrar Espaço</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarApartamento')}>
        <Ionicons name="business" size={20} color="#333" style={styles.icon2} />
        <Text style={styles.buttonText2}>Cadastrar Apartamento</Text>
      </TouchableOpacity>
      <View style={styles.gerenciamento}>
        <Text style={styles.ger}>Gerenciamento</Text>
      </View>
      <View style={styles.managementContainer}>
        <TouchableOpacity style={styles.managementButton} onPress={() => navigation.navigate('')}>
          <Ionicons name="time" size={20} color="#7F7F7F" style={styles.icon3}/>
          <Text style={styles.managementButtonText}>Meus Espaços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.managementButton2} onPress={() => navigation.navigate('')}>
          <Ionicons name="home" size={20} color="#7F7F7F" style={styles.icon3}/>
          <Text style={styles.managementButtonText}>Apartamentos Cadastrados</Text>
        </TouchableOpacity>
      </View>

      <View>
          <Image source={require('../../assets/LogoCondo2.png')} style={styles.logo2}/>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {  
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    bottom: 50,
   },
   logo2: {
    width: 134,
    height: 130,
    right:10,
    top: 96,
   },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#009FE3',
  },
  button: {
    backgroundColor: '#D1F4FA',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    left: 25,
    bottom: 10,
    width: 300,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    right: 16,
    color: '#000',
  },
  buttonText2: {
    fontSize: 18,
    textAlign: 'center',
    left: 10,
    color: '#000',
  },
  managementContainer: {
   marginTop: 20,
   left: 60,
  
  },
  managementButtonText: {
    fontSize: 16,
    color: '#7F7F7F',
  },
  menuIcon: {
    marginLeft: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  parque: {
   bottom: 60,
   fontSize: 20,
  },
  parque2: {
    fontSize: 26,
    color: '#06B6DD',
    fontFamily: 'sans-serif-medium',
   },
   icon: {
    right: 120,
    top: 25,
    
   },
   icon2: {
    right: 120,
    top: 25,
    
   },

   icon3: {
    right: 30,
    top: 24,
    
   },

   ger: {
    color: '#7F7F7F',
    fontSize:18,
    left: 32,
    top: 10,
   },
});
