import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ButtonContinuar';
import { Axios } from "axios";
import { useUser } from '../../context/UserContext'; // Importe o hook useUser
import { fetchTitulares, fetchDependentes } from '../../services/application.Services';


const ReservarEspaco = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedEspaco, setSelectedEspaco] = useState([]);
  const [selectedTitular, setSelectedTitular] = useState(null);
  const [selectedDependente, setSelectedDependente] = useState(null);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);
  const { user, espacosData } = useUser();


  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.id) {
        try {
          const titulares = await fetchTitulares(user.condominio_id);
          const dependentes = await fetchDependentes(user.condominio_id);
          setTitularesData(titulares);
          setDependentesData(dependentes);
        } catch (error) {
          console.error('Erro ao buscar dados dos titulares ou dependentes:', error);
          Alert.alert('Erro', 'Erro ao buscar dados dos titulares ou dependentes!');
        }
      }
    };
    fetchUserData();
  }, [user]);

  
  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
  };

  const renderPickerItem = (label, value) => (
    <TouchableOpacity style={styles.pickerItem} onPress={() => handleSelect(value)}>
      <Text>{label}</Text>
      {selectedLanguages.includes(value) && <Image source={check} style={{ width: 15, height: 15 }} />}
    </TouchableOpacity>
  );

  const handleSelect = value => {
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter(item => item !== value));
    } else {
      setSelectedLanguages(selectedLanguages, value);
    }
  };

  return (
    <View style={styles.containerReservarEspaco}>
      <Text style={styles.title}>Confirme os dados da rese</Text>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Para quem é a reserva?</Text>
        {/* Selecionando o Reservante Principal */}
        <RNPickerSelect
          style={styles.select}
          value={selectedTitular || selectedDependente}
          onValueChange={(value) => {
            if (value === 'first') {
              setSelectedTitular('');
              setSelectedDependente(value);
            } else {
              setSelectedTitular(value);
              setSelectedDependente('');
            }
          }}
          items={(titularesData || []).concat(dependentesData || []).map(item => ({
            label: item.nomeTitular || item.nomeDependente,
            value: item.id,
            key: item.id.toString(),
          }))}
        />

        {/* Selecione Acompanhantes */}
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

        {/* Se o Switch for ativado mostre no isEnabled o titular ou dependente exceto aquele que foi selecionado no RNPicker */}
        {isEnabled && titularesData && dependentesData && (
          <View style={[styles.select, { height: 200 }]}>
            {selectedTitular && dependentesData.length > 0 && (
              <View>
                {/* Renderização dos dependentes do titular selecionado */}
                {dependentesData
                  .filter(dependente => dependente.condomino_Titular_Id === selectedTitular.id)
                  .map(dependente => (
                    renderPickerItem(dependente.nomeDependente, dependente.id)
                  ))
                }
              </View>
            )}

            {selectedDependente && titularesData.length > 0 && (
              <View>
                {/* Renderização dos titulares que não são o dependente selecionado */}
                {titularesData
                  .filter(titular => titular.id !== selectedDependente.condomino_Titular_Id)
                  .map(titular => (
                    renderPickerItem(titular.nomeTitular, titular.id)
                  ))
                }
              </View>
            )}
          </View>
        )}

        <View style={styles.bottomContent}>
          <Text style={styles.label}>Selecione o espaço</Text>
          <RNPickerSelect
            style={styles.select}
            value={selectedEspaco}
            onValueChange={(value) => setSelectedEspaco(value)}
            items={espacosData?.map(espaco => ({
              label: `${espaco.nomeEspaco}`,
              value: `${espaco.id}`,
              key: `${espaco?.id}`,
            })).flat() || []}
          />
        </View>

        <View style={styles.containerImage}>
          <Image source={jogging} style={styles.image} />
        </View>
        <ButtonContinuar onPress={() => navigation.navigate('ReservarEspacoTwo')} icon={'chevrondoubleright'} />
      </View>
    </View>
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
  textContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginRight: 15,
  },
  select: {
    height: 40,
    width: 238,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  bottomContent: {
    marginTop: 20,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 143,
    height: 113,
    resizeMode: 'contain',
  },
});

export default ReservarEspaco;