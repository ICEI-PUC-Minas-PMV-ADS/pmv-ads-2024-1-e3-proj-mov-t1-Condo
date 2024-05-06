import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonDependente from '../../components/ButtonDependente';
import ButtonReservas from '../../components/ButtonReservas';
import CalendarIcon from '../../assets/calendario.svg';
import Vector from '../../assets/vector.png';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonDependente
        onPress={() => navigation.navigate('Dependentes')}
        icon={Vector}
      />

      <ButtonReservas
       onPress={() => navigation.navigate('Reservas')}
       icon={CalendarIcon}
       />

    
    </View>

    

  );
}


    

