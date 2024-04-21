import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, Image } from 'react-native'; // Importando Picker do 'react-native'
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ButtonContinuar';
import chevronDoubleRight from '../../assets/chevrondoubleright.svg';


const ReservarEspaco = ({ navigation }) => {
  const [value, setValue] = useState('first');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((prevState) => !prevState); 
  };

  const handleSelectChange = (selectedValue) => {
    console.log('Selected value:', selectedValue); 
  };

 const renderPickerItem = (label, value) => (
    <TouchableOpacity
      style={styles.pickerItem}
      onPress={() => handleSelect(value)}
    >
      <Text>{label}</Text>
      {selectedLanguages.includes(value) && (
        <Image source={check} style={{ width: 15, height: 15 }} />
      )}
    </TouchableOpacity>
  );

const validarAcompanhantes = () => {
   
    if (selectedLanguages.length === 0 && isEnabled) {
      
      alert("Selecione pelo menos um acompanhante");
      return false; // Indica falha na validação
    }
    return true; 
  };


  const handleSelect = (value) => {
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((item) => item !== value)); 
    } else {
      setSelectedLanguages([...selectedLanguages, value]); 
    }
  };


  return (
    <View style={styles.containerReservarEspaco}>
      <Text style={styles.title}>Confirme os dados da reserva</Text>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Para quem é a reserva?</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}>
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
        <Picker 
          style={styles.select}
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}>
          <Picker.Item label="João Silva" value="joao_silva" />
          <Picker.Item label="Maria Santos" value="maria_santos" />
          <Picker.Item label="Pedro Oliveira" value="pedro_oliveira" />
          <Picker.Item label="Ana Souza" value="ana_souza" />
          <Picker.Item label="José Lima" value="jose_lima" />
        </Picker>
        <View style={styles.container}>
          <Text style={styles.label}>Acompanhantes?</Text>
          <Switch
           trackColor={{false: '#767577', true: '#26B3E0'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
          />
        </View>
        {isEnabled && (
          <View style={[styles.select, { height: 200 }]}>
            {renderPickerItem('João Silva', 'joao_silva')}
            {renderPickerItem('Maria Santos', 'maria_santos')}
            {renderPickerItem('Pedro Oliveira', 'pedro_oliveira')}
            {renderPickerItem('Ana Souza', 'ana_souza')}
            {renderPickerItem('José Lima', 'jose_lima')}
          </View>
        )}
        <View style={styles.bottomContent}>
          <Text style={styles.label}>Selecione o espaço</Text>
          <Picker 
            style={styles.select}
            selectedValue={value}
            onValueChange={(itemValue) => setValue(itemValue)}>
            <Picker.Item label="Piscina" value="piscina" />
            <Picker.Item label="Quadra Esportiva" value="quadra_esportiva" />
            <Picker.Item label="Academia" value="academia" />
            <Picker.Item label="Salão de Festas" value="salao_festas" />
            <Picker.Item label="Churrasqueira" value="churrasqueira" />
          </Picker>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={jogging}
            style={styles.image}
          />
        </View>
        <ButtonContinuar
          onPress={() => navigation.navigate('ReservarEspacoTwoScreen')}
          icon={'chevrondoubleright'}
        />
      </View>
    </View>
  );
};


//Componentes CSS

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
