import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { login } from '../../services/auth.services';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const LoginCondominio = () => {
  
  const [email, setEmail] = useState('josuepayments@gmail.com');
  const [password, setPassword] = useState('12345678');
  const { setSigned, setName, setUser } = useUser();
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    // Redirecionar para a tela de recuperação de senha
    navigation.navigate('UpdatePassword');
  };

  const handleSignUp = () => {
    // Redirecionar para a tela de cadastro
    navigation.navigate('RegisterCondominio');
  };

  const handleLogin = () => {
    login({
      email: email,
      password: password
    }).then(res => {
      console.log(res);
      if (res && res.user) {
        setUser(res.user);
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/LogoCondo2.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
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
  forgotPassword: {
    color: '#06B6DD',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#06B6DD',
      width: '80%',
      height: 49,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 67,
      marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center',
  },
  signUp: {
    color: '#06B6DD',
  },
});



export default LoginCondominio;
