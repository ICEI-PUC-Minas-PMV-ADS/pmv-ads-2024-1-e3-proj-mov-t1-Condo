import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const DateInputManutencao = (props) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${currentDate.getFullYear()}`;
    setDate(formattedDate);
  }, []);

  const handleDateChange = (formatted) => {
    setDate(formatted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.titulo}</Text>
      <TextInputMask
        style={props.edit ? styles.cardEdit : styles.card}
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        placeholder="DD/MM/YYYY"
        value={date}
        onChangeText={handleDateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  card: {
    backgroundColor: '#c4e5ed',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  cardEdit: {
    backgroundColor: '#fff',
    padding: 10, borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: '#848382',
    fontWeight: '700',
  },
});

export default DateInputManutencao;
