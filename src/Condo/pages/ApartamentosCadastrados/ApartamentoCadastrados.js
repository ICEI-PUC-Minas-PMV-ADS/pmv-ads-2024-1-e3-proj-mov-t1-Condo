import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const ApartamentosCadastrados = () => {
  return (
    <View>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontVariant: 'bold',
          fontWeight: 'Poppins',
          textAlign: 'center',
        }}>
        Apartamentos Cadastrados
      </Text>

      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Bloco 001
      </Button>

      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Bloco 002
      </Button>

      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Bloco 003
      </Button>
    </View>
  );
};

export default ApartamentosCadastrados;
