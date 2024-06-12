import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, RefreshControl, Alert } from 'react-native';
import Calendar from '../../components/ReservasComponents/Calendar';
import { Picker } from '@react-native-picker/picker';
import { fetchEspacoById } from '../../services/application.Services';
import moment from 'moment'; 

const ReservarEspacoTwo = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [espaco, setEspaco] = useState(null);
  const { espacoId } = route.params;

  useEffect(() => {
    const fetchEspacoData = async () => {
      try {
        const espacoData = await fetchEspacoById(espacoId);
        console.log('Buscando dados para o espaço ID:', espacoId);
        console.log('Dados do espaço recebidos:', espacoData);
        setEspaco(espacoData);
      } catch (error) {
        console.error('Erro ao buscar dados do espaço:', error);
        Alert.alert('Erro', 'Erro ao buscar dados do espaço!');
      }
    };
    fetchEspacoData();
  }, [espacoId]);

  useEffect(() => {
    if (espaco) {
      const times = calculateAvailableTimes(espaco);
      setAvailableTimes(times);
    }
  }, [espaco]);

  const onDaySelect = (selectedDay) => {
    const selectedDayOfWeek = selectedDay.day(); // Retorna o dia da semana (0 para domingo, 1 para segunda, etc.)
    const isDayOpen = espaco.diasDeFuncionamento.includes(selectedDayOfWeek.toString());
    
    if (isDayOpen) {
      const availableTimes = calculateAvailableTimes(selectedDay);
      setAvailableTimes(availableTimes);
    } else {
      setAvailableTimes([]); // Limpa os horários disponíveis se o dia não estiver aberto
    }
  };
  
  

  const calculateAvailableTimes = () => {
    const { inicio, fim } = espaco.horarioFuncionamento;
    const timeSlots = [];
    let currentTime = moment(inicio); // Começa com o horário de início de funcionamento
  
    // Enquanto o horário atual for antes do horário de fechamento
    while (currentTime.isBefore(fim)) {
      // Adiciona o horário atual à lista de horários disponíveis
      timeSlots.push(currentTime.format('HH:mm'));
      // Adiciona o tempo máximo de reserva ao horário atual
      currentTime.add(espaco.tempoMaximo, 'minutes');
    }
  
    return timeSlots;
  };
  
  
  

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.containerReservarEspaco}>
        {espaco && (
          <>
            <Text style={styles.title}>{espaco.nomeEspaco}</Text>
            <Calendar onDayPress={onDaySelect} />
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue) => setSelectedTime(itemValue)}
            >
              <Picker.Item label="Selecione o horário" value={null} />
              {availableTimes.map((time, index) => (
                <Picker.Item key={index} label={time} value={time} />
              ))}
            </Picker>
            <Pressable onPress={() => navigation.navigate('ReservarEspacoTwo')}>
              <Text style={styles.continueButton}>Continuar</Text>
            </Pressable>
          </>
        )}
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
