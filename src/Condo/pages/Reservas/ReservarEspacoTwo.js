import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import CalendarHeader from '../../components/CalendarHeader'; // Importando o componente de cabeçalho do calendário
import Calendar from '../../components/Calendar'; // Importando o componente do calendário
import TimePicker from '../../components/TimePicker'; 

const ReservarEspacoTwo = ({ navigation }) => {
  const [month, setMonth] = useState('April');
  const [year, setYear] = useState(2024);

  const onNextMonth = () => {
    // Implementar lógica para avançar para o próximo mês
  };

  const onPrevMonth = () => {
    // Implementar lógica para voltar para o mês anterior
  };

  return (
    <View style={styles.containerReservarEspaco}>
      <Text style={styles.title}>Piscina</Text>
      <Calendar></Calendar>
      <TouchableOpacity onPress={() => navigation.navigate('ReservarEspacoTwoScreen')}>
        {/* Adicionando o botão de continuar */}
        <Text style={styles.continueButton}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerReservarEspaco: {
    flex: 1,
    alignItems: 'center', // Corrigindo alinhamento para center
    paddingHorizontal: 20,
    marginTop: 12,
    height: '100%',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  continueButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default ReservarEspacoTwo;
