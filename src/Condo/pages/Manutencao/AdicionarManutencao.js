import React from 'react';
import { View, StyleSheet } from 'react-native';
import DropdownEspacos from '../../components/DropdownEspacos';
import DateInputManutencao from '../../components/DateInputManutencao';

const AdicionarManutencao = () => {
  return (
    <View style={styles.container}>
      <DropdownEspacos />
      <View style={styles.inputsContainer}>
        <DateInputManutencao titulo="Início" />
        <DateInputManutencao titulo="Fim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default AdicionarManutencao;