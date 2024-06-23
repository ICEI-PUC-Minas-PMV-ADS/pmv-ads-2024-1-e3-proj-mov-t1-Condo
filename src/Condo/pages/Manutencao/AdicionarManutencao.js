import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DropdownEspacos from '../../components/DropdownEspacos';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DatePickerModal, registerTranslation, pt } from 'react-native-paper-dates';
import { useUser } from '../../context/UserContext';
import { ActivityIndicator } from 'react-native-paper';
import { fetchEspacos, insertManutencao } from '../../services/application.Services';
registerTranslation("pt", pt);

const AdicionarManutencao = () => {
  const [motivo, setMotivo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedEspaco, setEspaco] = useState([]);
  const [espacos, setEspacos] = useState([]); // Alterado para armazenar os espaços carregados
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const locale = "pt";
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const today = new Date();

  const onConfirmStartDate = (params) => {
    setShowStartDatePicker(false);
    setStartDate(params.date);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.id) {
        setLoading(true);
        try {
          const data = await fetchEspacos(user.id);
          setEspacos(data);
        } catch (error) {
          console.error('Erro ao buscar espacos:', error);
          Alert.alert('Erro', 'Erro ao buscar dados!');
        } finally {
          setLoading(false);
        }
      } else {
        console.log('Condomínio ou id não disponível', user);
      }
    };
    fetchData();

  }, [user]);

  const onConfirmEndDate = (params) => {
    setShowEndDatePicker(false);
    setEndDate(params.date);
  };

  const handleContinue = async () => {
    if (!motivo && !selectedEspaco) {
      Alert.alert('Campos Obrigatórios', 'Selecione um espaço, motivo e o período.');

    } else {
      if (endDate < startDate) {
        Alert.alert('Período', 'A data final do período não pode ser menor que a inicial.');
      } else {
        const formData = {
          tempoDuracaoInicio: startDate,
          tempoDuracaoFim: endDate,
          motivo: motivo,
          espaco_id: selectedEspaco,
          condominio_id: user.id,
        };

        try {
          await insertManutencao(formData);
          Alert.alert('Sucesso', 'Manutenção inserida com sucesso!');
          navigation.goBack();
        } catch (error) {
          console.error('Erro ao inserir manutenção:', error);
          Alert.alert('Erro', 'Erro ao inserir a manutenção!');
        }
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator animating={true} size="large" color="#c4e5ed" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.view}>
            <RNPickerSelect
              style={pickerSelectStyles}
              value={selectedEspaco}
              onValueChange={(value) => setEspaco(value)}
              items={espacos.map(espaco => ({
                label: espaco.nomeEspaco,
                value: espaco.id,
                key: espaco.id.toString(),
              }))}
              placeholder={{
                label: 'Selecione um item...',
                value: null,
              }}
              useNativeAndroidPickerStyle={false}
              Icon={() => (
                <View style={styles.iconContainer}>
                  <FontAwesome name="chevron-down" size={16} color="#7F7F7F" />
                </View>
              )}
            />
            <View>
              <Text style={styles.textWithPadding}>{"Período"}</Text>
              <View style={styles.inputsContainer}>
                <Pressable onPress={() => setShowStartDatePicker(true)} style={styles.dateInput}>
                  <Text>{startDate.toLocaleDateString()}</Text>
                </Pressable>
                <Pressable onPress={() => setShowEndDatePicker(true)} style={styles.dateInput}>
                  <Text>{endDate.toLocaleDateString()}</Text>
                </Pressable>

              </View>
            </View>
            <Text style={styles.text}>{"Motivo"}</Text>
            <TextInput
              style={styles.card}
              value={motivo}
              onChangeText={setMotivo}
            />
            <View style={{ alignItems: 'center' }}>
              <Pressable style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>{"Adicionar a manutenção"}</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/LogoCondo2.png')}
              style={styles.image}
            />
          </View>
        </View>
        {DatePickerModal ? (
          <>
            <DatePickerModal
              locale={locale}
              mode="single"
              visible={showStartDatePicker}
              onDismiss={() => setShowStartDatePicker(false)}
              date={startDate}
              onConfirm={onConfirmStartDate}
              label="Escolha a data de início"
              saveLabel="Salvar"
              validRange={{ startDate: today }}
              uppercase={false}
            />

            <DatePickerModal
              locale={locale}
              mode="single"
              validRange={{ startDate: startDate }}
              visible={showEndDatePicker}
              onDismiss={() => setShowEndDatePicker(false)}
              date={endDate}
              onConfirm={onConfirmEndDate}
              label="Escolha a data de fim"
              saveLabel="Salvar"
              uppercase={false}
            />
          </>
        ) : (
          <Text>Erro: `DatePickerModal` não foi carregado corretamente.</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    padding: 20,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#c4e5ed',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  dateInput: {
    width: 160,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c4e5ed',
    borderRadius: 8,
    backgroundColor: '#c4e5ed',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: '#848382',
    fontWeight: '900',
  },
  textWithPadding: {
    fontSize: 17,
    color: '#848382',
    fontWeight: '900',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#06B6DD',
    width: '100%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  imageContainer: {
    width: '50%',
    alignItems: 'flex-end', // use 'flex-end' instead of 'end'
  },
  inputDate: {
    backgroundColor: '#c4e5ed',
    padding: 0, minWidth: 100,
    borderRadius: 8,
    borderColor: '#c4e5ed',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // para garantir que o texto não sobreponha o ícone
    backgroundColor: '#c4e5ed',
    marginBottom: 16,
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#7F7F7F",
    paddingRight: 30, // para garantir que o texto não sobreponha o ícone
    backgroundColor: '#c4e5ed',
    marginBottom: 16,
    width: '100%',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default AdicionarManutencao;
