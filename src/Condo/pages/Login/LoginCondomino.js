import React, { useState } from 'react';
import { View, Image, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchUserByCPF } from '../../services/auth.services'; // Supondo que você tenha uma função para buscar o usuário pelo CPF

const LoginCondomino = () => {
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const emailFicticio = `${cpf}@gmail.com`;

    try {
      const users = await fetchUserByCPF(cpf);
      if (users.length > 0) {
        const user = users[0];
        if (user.email === emailFicticio) {
          // Email fictício, direciona para atualização cadastral
          navigation.navigate('AtualizaTitular', { cpf });
        } else {
          // Email atualizado, direciona para login
          navigation.navigate('LoginCondominoTwo', { userData: user });
        }
      } else {
        alert('CPF incorreto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
    }
  };

  const formatarCPF = (cpf) => {
    const cleaned = cpf.replace(/\D/g, "");
    const formatted = cleaned.slice(0, 11);
    let result = formatted.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
    setCpf(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/LogoCondo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite o CPF"
        value={cpf}
        onChangeText={text => formatarCPF(text)}

      />
      <Pressable style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
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
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(36, 34, 32, 0.44)',
    placeholderTextColor: 'rgba(36, 34, 32, 0.44)',
    borderRadius: 67,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16, 
    fontWeight: '400',
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#06B6DD',
    width: '80%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 67,
    marginBottom: 20,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
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
});

export default LoginCondomino;
