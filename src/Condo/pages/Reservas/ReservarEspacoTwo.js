import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, RefreshControl, Alert } from 'react-native';
import Calendar from '../../components/ReservasComponents/Calendar';
import RNPickerSelect from 'react-native-picker-select';
import { fetchEspacoById } from '../../services/application.Services';
import { postReservas } from '../../services/application.Services'; // Importar função de cadastro
import moment from 'moment'; 
import { useCondomino } from '../../context/CondominoContext';
import { useNavigation } from '@react-navigation/native';


const ReservarEspacoTwo = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [espaco, setEspaco] = useState(null);
  const { espacoId, titularId } = route.params; // Receber o titularId e espacoId das params
  const { userCondomino } = useCondomino(); 
  const { navigate } = useNavigation(); 

  useEffect(() => {
    const fetchEspacoData = async () => {
      try {
        const espacoData = await fetchEspacoById(espacoId);
        console.log('Buscando dados para o espaço ID:', espacoId);
        console.log('Dados do espaço recebidos:', espacoData);
        console.log('Buscando Dados de quem foi selecionado:', titularId);
        setEspaco(espacoData);
      } catch (error) {
        console.error('Erro ao buscar dados do espaço:', error);
        Alert.alert('Erro', 'Erro ao buscar dados do espaço!');
      }
    };
    fetchEspacoData();
  }, [espacoId, titularId]);

  useEffect(() => {
    if (espaco) {
      calculateAvailableTimes(selectedDate);
    }
  }, [espaco, selectedDate]);

  const onDaySelect = (day) => {
    const selectedDay = day.dateString;
    setSelectedDate(selectedDay);
  };

  const calculateAvailableTimes = (selectedDate) => {
    if (!selectedDate) {
      setAvailableTimes([]);
      return;
    }

    const selectedDayOfWeek = moment(selectedDate).day();
    const isDayOpen = espaco.diasDeFuncionamento.includes(selectedDayOfWeek.toString());

    if (isDayOpen) {
      const { inicio, fim } = espaco.horarioFuncionamento;
      const timeSlots = [];
      let currentTime = moment(inicio);

      while (currentTime.isBefore(fim)) {
        timeSlots.push(currentTime.format('HH:mm'));
        currentTime.add(espaco.tempoMaximo, 'minutes');
      }

      setAvailableTimes(timeSlots);
    } else {
      setAvailableTimes([]);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleSalvar = async () => {
    if (!userCondomino || !userCondomino.condominio_id) {
      console.error('ID do condomínio não está definido no objeto do usuário');
      Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
      return;
    }

    if (!selectedDate || !selectedTime) {
      Alert.alert('Erro', 'Data e horário devem ser selecionados!');
      return;
    }

    const formData = {
      data: selectedDate,
      horario: selectedTime,
      espaco_id: espacoId,
      nomeEspaco: espaco.nomeEspaco,
      nomeTitular: userCondomino.nomeTitular,
      condominio_id: userCondomino.condominio_id,
      titular_id: titularId, // Usar titularId das params
    };

    try {
      const response = await postReservas(formData);
      Alert.alert('Sucesso', 'Reserva realizada com sucesso!');
      navigate('MinhasReservas'); 
    } catch (error) {
      console.error('Erro ao realizar reserva:', error);
      Alert.alert('Erro', 'Erro ao salvar espaço!');
    }
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
            {selectedDate && availableTimes.length > 0 ? (
              <RNPickerSelect
                onValueChange={(value) => setSelectedTime(value)}
                items={availableTimes.map((time) => ({
                  label: time,
                  value: time
                }))}
                placeholder={{ label: "Selecione o horário", value: null }}
              />
            ) : (
              <Text style={styles.messageText}>Nenhum horário disponível.</Text>
            )}
            <Pressable onPress={handleSalvar}>
              <Text style={styles.continueButton}>Finalizar Reserva</Text>
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
  messageText: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
  continueButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default ReservarEspacoTwo;
