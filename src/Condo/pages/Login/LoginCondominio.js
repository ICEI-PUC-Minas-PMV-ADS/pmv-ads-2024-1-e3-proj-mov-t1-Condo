import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginCondominio = () => {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    // Redirecionar para a tela de recuperação de senha
    navigation.navigate('...');
  };

  const handleSignUp = () => {
    // Redirecionar para a tela de cadastro
    navigation.navigate('...');
  };

  const handleLogin = () => {
    // Lógica para validar os campos e realizar o login
    if (cnpj === 'cnpj_correto' && senha === 'senha_correta') {
     
      navigation.navigate('Home');
    } else {
    
      alert('CNPJ ou senha incorretos. Por favor, tente novamente.');
    }
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
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
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
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  signUp: {
    color: 'blue',
  },
});

export default LoginCondominio;
