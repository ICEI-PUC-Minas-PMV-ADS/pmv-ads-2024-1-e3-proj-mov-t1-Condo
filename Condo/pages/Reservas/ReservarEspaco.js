import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, Picker, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ButtonContinuar';
import chevronDoubleRight from '../../assets/chevrondoubleright.svg';

const ReservarEspaco = ({ navigation }) => {
  const [value, setValue] = useState('first');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const handleSelectChange = (selectedValue) => {
    console.log('Selected value:', selectedValue);
  };

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setShowSelect(!isSwitchOn); 
  };

  const renderPickerItem = (label, value) => (
   <TouchableOpacity
  style={styles.pickerItem}
  onPress={() => handleSelect(value)}>
  <Text>{label}</Text>
  {selectedLanguages.includes(value) && (
    <Image
      source={check}
      style={{ width: 15, height: 15 }} 
    />
  )}
</TouchableOpacity>
  );

  const handleSelect = (value) => {
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((item) => item !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  const irParaOutraPagina = () => {
    navigation.navigate('OutraPagina');
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
        <select
          style={styles.select}
          onChange={(e) => handleSelectChange(e.target.value)}>
          <option value="joao_silva">João Silva</option>
          <option value="maria_santos">Maria Santos</option>
          <option value="pedro_oliveira">Pedro Oliveira</option>
          <option value="ana_souza">Ana Souza</option>
          <option value="jose_lima">José Lima</option>
        </select>
        <View style={styles.container}>
          <Text style={styles.label}>Acompanhantes?</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        {showSelect && (
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
          <select
            style={styles.select}
            onChange={(e) => handleSelectChange(e.target.value)}>
            <option value="piscina">Piscina</option>
            <option value="quadra_esportiva">Quadra Esportiva</option>
            <option value="academia">Academia</option>
            <option value="salão_festas">Salão de Festas</option>
            <option value="churrasqueira">Churrasqueira</option>
          </select>
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
