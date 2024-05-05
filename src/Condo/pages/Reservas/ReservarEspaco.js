import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ButtonContinuar';
import { espaco, titular, dependente } from '../../services/auth.services';

const ReservarEspaco = ({ navigation }) => {
  const [value, setValue] = useState('first');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [espacos, setEspacos] = useState([]);
  const [selectedEspaco, setSelectedEspaco] = useState(null);
  const [titulares, setTitulares] = useState([]);
  const [selectedTitular, setSelectedTitular] = useState(null);
  const [dependentes, setDependentes] = useState([]);
  const [selectedDependente, setSelectedDependente] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const espacosData = await espaco();
        const titularesData = await titular();
        const dependentesData = await dependente();
        setEspacos(espacosData);
        setTitulares(titularesData);
        setDependentes(dependentesData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, []);

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
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  return (
    <View style={styles.containerReservarEspaco}>
      <Text style={styles.title}>Confirme os dados da reserva</Text>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Para quem é a reserva?</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={styles.radioGroup}>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioLabel}>Titular</Text>
              <RadioButton value="first" />
            </View>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioLabel}>Dependente</Text>
              <RadioButton value="second" />
            </View>
          </View>
        </RadioButton.Group>
        <RNPickerSelect
          style={styles.select}
          value={value === 'first' ? selectedTitular : selectedDependente}
          onValueChange={(value) => {
            if (value === 'first') {
              setSelectedTitular(value);
            } else {
              setSelectedDependente(value);
            }
          }}
          items={value === 'first' ? titulares.map(titular => ({
            label: titular.nomeTitular,
            value: titular.id,
          })) : dependentes.map(dependente => ({
            label: dependente.nomeDependente,
            value: dependente.id,
          }))}
        />
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
{isEnabled && (
  <View style={[styles.select, { height: 200 }]}>
    {value === 'first' && selectedTitular && (
      <View>
        {/*Renderização dos dependentes do titular selecionado */}
        {titulares
          .filter(dependente => dependente.Condomino_Titular_Id === selectedTitular.id)
          .map(dependente => (
            renderPickerItem(dependente.nomeDependente, dependente.id)
          ))
        }
      </View>
    )}

    {value === 'second' && selectedDependente && (
      <View>
        {/*Renderização dos dependentes */}
        {dependentes
          .filter(dependente => dependente.Condomino_Titular_Id === selectedDependente.Condomino_Titular_Id)
          .map(dependente => (
            renderPickerItem(dependente.nomeDependente, dependente.id)
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
            items={espacos.map(espaco => ({
              label: espaco.nomeEspaco,
              value: espaco.id,
            }))}
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
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
    marginRight: 10,
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
