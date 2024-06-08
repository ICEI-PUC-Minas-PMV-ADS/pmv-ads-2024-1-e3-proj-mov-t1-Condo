import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../services/auth.services';
import { useCondomino } from '../../context/CondominoContext';

const LoginCondominoTwo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCondomino, setSignedCondomino } = useCondomino();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password });
      console.log(res);
      if (res && res.user && res.accessToken) {
        const { user, accessToken } = res;
        if (user.razaoSocial && user.cnpj) {
          // Se o usuário tiver razaoSocial e cnpj, não permite o login
          Alert.alert('Atenção', 'Usuário ou senha inválidos!');
        } else {
          // Se o usuário não tiver razaoSocial e cnpj, permite o login
          setCondomino(user);
          setSignedCondomino(true);
          await AsyncStorage.setItem('@TOKEN_KEY', accessToken);
          Alert.alert('Sucesso', 'Login realizado com sucesso!');
        }
      } else {
        // Se res.user, res.accessToken ou ambos não estiverem presentes, exibe uma mensagem de erro
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login!');
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Entrar</Text>
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
    marginBottom: 20,
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
    color: '#000'
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
  }
});

export default LoginCondominoTwo;
