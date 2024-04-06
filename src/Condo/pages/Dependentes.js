import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dependentes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Dependentes</Text>
      {/* Adicione aqui os componentes e funcionalidades da tela de dependentes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dependentes;
