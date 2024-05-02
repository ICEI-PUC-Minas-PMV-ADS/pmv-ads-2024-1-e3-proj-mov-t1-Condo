import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedTime}
        onValueChange={(itemValue) => handleChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="00:00" value="00:00" />
        <Picker.Item label="01:00" value="01:00" />
        <Picker.Item label="02:00" value="02:00" />
        {/* Adicione mais itens de acordo com a necessidade */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  picker: {
    height: 50, // Altura do seletor
    width: '100%', // Largura do seletor
  },
});

export default TimePicker;
