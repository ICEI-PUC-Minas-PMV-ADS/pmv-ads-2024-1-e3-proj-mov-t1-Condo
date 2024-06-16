import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Pressable, Image, ScrollView, RefreshControl, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from "react-native-paper";
import jogging from '../../assets/jogging.png';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ReservasComponents/ButtonContinuar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useUser } from '../../context/UserContext';
import { useCondomino } from '../../context/CondominoContext';
import { fetchTitulares, fetchDependentes, fetchEspacos } from '../../services/application.Services';

const ReservarEspaco = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTitular, setSelectedTitular] = useState([]);
  const [selectedDependente, setSelectedDependente] = useState(null);
  const [espacos, setEspacos] = useState([]); // Alterado para armazenar os espaços carregados
  const [titulares, setTitulares] = useState([]);
  const [selectedEspaco, setSelectedEspaco] = useState(null); // Alterado para armazenar o espaço selecionado

  const { userCondomino } = useCondomino(); // Aqui corrigimos a desestruturação

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (userCondomino && userCondomino.condominio_id) {
        try {
          console.log('Buscando dados para condominio_id:', userCondomino.condominio_id);
          const espacos = await fetchEspacos(userCondomino.condominio_id);
          const titulares = userCondomino; //usa o titular logado como definição
          console.log('Titulares recebidos:', titulares); //Log de teste
          console.log('Espaços recebidos:', espacos); //Log de teste
          setEspacos(espacos);
          setTitulares(titulares);
        } catch (error) {
          console.error('Erro ao buscar dados dos espaços:', error);
          Alert.alert('Erro', 'Erro ao buscar dados dos espaços!');
        }
      } else {
        console.log('Usuário ou condominio_id não disponível', userCondomino);
      }
    };
    fetchUserData();
  }, [userCondomino]);

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
  };

  const renderPickerItem = (label, value) => (
    <Pressable style={styles.pickerItem} onPress={() => handleSelect(value)} key={value}>
      <Text>{label}</Text>
      {selectedLanguages.includes(value) && <Image source={check} style={{ width: 15, height: 15 }} />}
    </Pressable>
  );

  const handleSelect = value => {
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter(item => item !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  const handleContinue = () => {
    if (selectedTitular && selectedEspaco) {
      navigation.navigate('ReservarEspacoTwo', { espacoId: selectedEspaco, titularId: selectedTitular });
    } else {
      Alert.alert('Campos Obrigatórios', 'Selecione um titular e um espaço antes de continuar.');
    }
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.containerReservarEspaco}>
        <Text style={styles.title}>Confirme os dados da reserva</Text>
        <View style={styles.pickerContent}>
          <Text style={styles.label}>Para quem é a reserva?</Text>
          
          <RNPickerSelect
            style={pickerSelectStyles}
            value={selectedTitular}
            onValueChange={(value) => setSelectedTitular(value)}
            items={[{
              label: titulares.nomeTitular,
              value: titulares.id,
              key: titulares.id,
            }]}
            useNativeAndroidPickerStyle={false}
            Icon={() => (
              <View style={styles.iconContainer}>
                <FontAwesome name="chevron-down" size={16} color="#7F7F7F" />
              </View>
            )}
          />
        

        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Acompanhantes?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#26B3E0' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {isEnabled && selectedTitular && selectedDependente && (
          <View style={[styles.select, { height: 200 }]}>
            {selectedTitular && selectedDependente.length > 0 && (
              <View>
                {selectedDependente
                  .filter(dependente => dependente.condomino_Titular_Id === selectedTitular)
                  .map(dependente => renderPickerItem(dependente.nomeDependente, dependente.id))}
              </View>
            )}

            {selectedDependente && selectedTitular.length > 0 && (
              <View>
                {selectedTitular
                  .filter(titular => titular.id !== selectedDependente.condomino_Titular_Id)
                  .map(titular => renderPickerItem(titular.nomeTitular, titular.id))}
              </View>
            )}
          </View>
        )}

        <View style={styles.pickerContent}>
          <Text style={styles.label}>Selecione o espaço</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={selectedEspaco}
            onValueChange={(value) => setSelectedEspaco(value)}
            items={espacos.map(espaco => ({
              label: espaco.nomeEspaco,
              value: espaco.id,
              key: espaco.id.toString(),
            }))}
            useNativeAndroidPickerStyle={false}
            Icon={() => (
              <View style={styles.iconContainer}>
                <FontAwesome name="chevron-down" size={16} color="#7F7F7F" />
              </View>
            )}
          />
        </View>

        <View style={styles.containerImage}>
          <Image source={jogging} style={styles.image} />
        </View>
        <Button>
        <Pressable onPress={handleContinue}>
  <Text style={styles.continueButton}>Continue  <FontAwesome name="angle-double-right" size={19} color="#4F555A" /></Text>
 
</Pressable>
</Button>

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
    color: "#7F7F7F",
    marginBottom: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: "#7F7F7F",
    marginBottom: 5,
    marginRight: 15,
  },
  select: {
    height: 40,
    width: 238,
    backgroundColor: '#f0f0f0',
    borderRadius: 13,
    borderColor: '7F7F7F',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    backgroundColor: 'none', // Cor do fundo do círculo
    borderRadius: 20, // Metade da altura do ícone
    borderColor: '#7F7F7F',
    borderWidth: 1.5,
    padding: 2,
    marginRight: 5,
  },
  pickerContent: {
    marginTop: 20,
    borderRadius: 13,
    borderColor: '7F7F7F',
    width: "90%",
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    width: 143,
    height: 113,
    resizeMode: 'contain',
  },
  continueButton: {
    color: "#4F555A",
    fontSize: 19,
    fontWeight: '700',
  }
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
    paddingRight: 30, // para garantir que o texto não sobreponha o ícone
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
    color: "#7F7F7F",
    paddingRight: 30, // para garantir que o texto não sobreponha o ícone
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    width: '100%',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default ReservarEspaco;
