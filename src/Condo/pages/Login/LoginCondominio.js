import React, { useState } from 'react';
import { View, Image, TextInput, Pressable, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { login } from '../../services/auth.services';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const LoginCondominio = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      if (res && res.user && res.accessToken) { // Verifica se res.user e res.accessToken estão presentes
        const { user, accessToken } = res; // Extrai o usuário e o token de acesso da resposta
        if (user.razaoSocial && user.cnpj) {
          // Usuário autenticado com sucesso, faça o que for necessário
          setUser(user);
          setSigned(true);
          setName(user.name); // Se o nome estiver disponível
          AsyncStorage.setItem('@TOKEN_KEY', accessToken).then(() => {
            // Token de acesso armazenado com sucesso
            console.log('Token de acesso armazenado:', accessToken);
          }).catch(error => {
            console.error('Erro ao armazenar o token de acesso:', error);
          });
        } else {
          // Se o usuário não tiver razaoSocial e cnpj, exibe uma mensagem de erro
          Alert.alert('Atenção', 'Usuário ou senha inválidos!');
        }
      } else {
        // Se res.user ou res.accessToken não estiverem presentes, exibe uma mensagem de erro
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    }).catch(error => {
      console.error('Erro ao fazer login:', error);
      // Exibe uma mensagem de erro caso ocorra algum problema na requisição de login
      Alert.alert('Atenção', 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
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
      <Pressable onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </Pressable>
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </Pressable>
      <Pressable onPress={handleSignUp}>
        <Text style={styles.signUp}>Não tem conta? Cadastre-se</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFFC6',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(36, 34, 32, 0.44)',
        backgroundColor: '#fff',
        placeholderTextColor: 'rgba(36, 34, 32, 0.44)',
        borderRadius: 67,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16, 
        fontWeight: '400',
        color: '#7F7F7F'
  },
  forgotPassword: {
    color: '#06B6DD',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#06B6DD',
      width: '80%',
      height: 50,
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
