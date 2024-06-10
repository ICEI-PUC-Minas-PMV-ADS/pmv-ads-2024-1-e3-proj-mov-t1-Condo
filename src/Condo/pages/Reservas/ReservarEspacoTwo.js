import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Calendar from '../../components/ReservasComponents/Calendar'; // Importando o componente do calendário
import { Picker } from '@react-native-picker/picker';

const ReservarEspacoTwo = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null); // Estado para armazenar o horário selecionado
  const [availableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00']); // Lista de horários disponíveis

  const onRefresh = () => {
    setRefreshing(true);
    // Lógica para atualizar os dados...
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.containerReservarEspaco}>
        <Text style={styles.title}>Piscina</Text>
        <Calendar />
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
        >
          <Picker.Item label="Selecione o horário" value={null} />
          {availableTimes.map((time, index) => (
            <Picker.Item key={index} label={time} value={time} />
          ))}
        </Picker>
        <TouchableOpacity onPress={() => navigation.navigate('ReservarEspacoTwoScreen')}>
          <Text style={styles.continueButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerReservarEspaco: {
    flex: 1,
    alignItems: 'center',
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
