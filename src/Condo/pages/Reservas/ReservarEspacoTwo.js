import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, RefreshControl, Alert } from 'react-native';
import Calendar from '../../components/ReservasComponents/Calendar';
import RNPickerSelect from 'react-native-picker-select';
import { fetchEspacoById } from '../../services/application.Services';
import { postReservas } from '../../services/application.Services';
import moment from 'moment';
import { useCondomino } from '../../context/CondominoContext';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReservarEspacoTwo = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [espaco, setEspaco] = useState(null);
  const [errors, setErrors] = useState({});
  const { espacoId, titularId } = route.params;
  const { userCondomino } = useCondomino();
  const { navigate } = useNavigation();

  useEffect(() => {
    const fetchEspacoData = async () => {
      try {
        const espacoData = await fetchEspacoById(espacoId);
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

    // Validar se a data selecionada é maior ou igual à data atual
    if (moment(selectedDay).isSameOrAfter(moment().format('YYYY-MM-DD'))) {
      setSelectedDate(selectedDay);
      setErrors((prevErrors) => ({ ...prevErrors, selectedDate: null }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedDate: 'Não é possível selecionar uma data anterior à atual!',
      }));
    }
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
    const newErrors = {};

    if (!selectedDate) {
      newErrors.selectedDate = 'Data é obrigatória!';
    }

    if (!selectedTime) {
      newErrors.selectedTime = 'Horário é obrigatório!';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!userCondomino || !userCondomino.condominio_id) {
      console.error('ID do condomínio não está definido no objeto do usuário');
      Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
      return;
    }

    const formData = {
      data: selectedDate,
      horario: selectedTime,
      espaco_id: espacoId,
      nomeEspaco: espaco.nomeEspaco,
      nomeTitular: userCondomino.nomeTitular,
      condominio_id: userCondomino.condominio_id,
      titular_id: titularId,
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
            <View style={styles.pickerContent}>
              <Text style={styles.title}>{espaco.nomeEspaco}</Text>
            </View>
            <Calendar onDayPress={onDaySelect} />
            {errors.selectedDate && <Text style={styles.errorText}>{errors.selectedDate}</Text>}
            {selectedDate && availableTimes.length > 0 ? (
              <View style={styles.pickerContent}>
                <Text style={styles.label}>Horário</Text>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  onValueChange={(value) => {
                    setSelectedTime(value);
                    setErrors((prevErrors) => ({ ...prevErrors, selectedTime: null }));
                  }}
                  items={availableTimes.map((time) => ({
                    label: time,
                    value: time,
                  }))}
                  placeholder={{ label: 'Selecione', value: null }}
                  useNativeAndroidPickerStyle={false}
                  Icon={() => (
                    <View style={styles.iconContainer}>
                      <FontAwesome name="chevron-down" size={16} color="#7F7F7F" />
                    </View>
                  )}
                />
                {errors.selectedTime && <Text style={styles.errorText}>{errors.selectedTime}</Text>}
              </View>
            ) : (
              <Text style={styles.messageText}>Nenhum horário disponível.</Text>
            )}
            <Pressable onPress={handleSalvar}>
              <Text style={styles.continueButton}>
                Finalizar Reserva <FontAwesome name="angle-double-right" size={19} color="#4F555A" />
              </Text>
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
  },
  title: {
    fontSize: 20,
    color: '#7F7F7F',
    marginRight: 15,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
  pickerContent: {
    marginTop: 20,
    borderRadius: 13,
    borderColor: '#7F7F7F',
    width: '90%',
  },
  iconContainer: {
    backgroundColor: 'none',
    borderRadius: 20,
    borderColor: '#7F7F7F',
    borderWidth: 1.5,
    padding: 2,
    marginRight: 5,
  },
  label: {
    fontSize: 20,
    color: '#7F7F7F',
    marginBottom: 5,
    marginRight: 15,
  },
  continueButton: {
    color: '#4F555A',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 50,
  },
  errorText: {
    color: '#7F7F7F',
    marginBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: '#7F7F7F',
    paddingRight: 30,
    backgroundColor: '#f0f0f0',
    marginBottom: 
    16,
    width: '100%',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default ReservarEspacoTwo;
