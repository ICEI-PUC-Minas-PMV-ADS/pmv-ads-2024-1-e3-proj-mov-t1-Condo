import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import CardEspacos from '../../components/CardEspacos';

const MeusEspacos = () => {
  return (
    <View style={styles.view}>
      <CardEspacos titulo="Quadra Esportiva" />
      <CardEspacos titulo="Piscina" />
      <CardEspacos titulo="Salão de Festas" />
      <CardEspacos titulo="Academia" />
      <CardEspacos titulo="Churrasqueira" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default MeusEspacos;
