import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginCondomino from './LoginCondomino';

const LoginCondominoTwo = () => {
  const [bloco, setBloco] = useState('');
  const [apto, setApto] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // validação de login
    if (bloco === 'bloco_correto' && apto === 'apto_correto' && cpf === 'cpf_correto') {
      
      navigation.navigate('Home'); 
    } else {
      
      alert('Por favor, verifique os campos e tente novamente.');
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/LogoCondo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, styles.inputHalf]}
          placeholder="BLOCO"
          value={bloco}
          onChangeText={setBloco}
        />
        <TextInput
          style={[styles.input, styles.inputHalf]}
          placeholder="APTO"
          value={apto}
          onChangeText={setApto}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/jogging.svg')}
        style={styles.joggingLogo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputHalf: {
    width: '48%',
  },
  continueButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  joggingLogo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 50,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  menuButtonText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
});

export default LoginCondominoTwo;
