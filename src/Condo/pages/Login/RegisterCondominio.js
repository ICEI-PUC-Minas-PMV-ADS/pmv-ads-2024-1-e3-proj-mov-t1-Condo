import React, { useState } from "react";
import { View, Image, TextInput, Pressable, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { register } from '../../services/auth.services';  // Importe a função de registro

const RegisterCondominio = () => {
  const navigation = useNavigation();
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const handleSignUp = () => {
    // Redirecionar para a tela de Login
    navigation.navigate('LoginCondominio');
  };

  const handleRegister = async () => {
    if (password === repetirPassword) {
      const formattedCNPJ = formatCNPJ(cnpj); // Formatar o CNPJ antes de enviar para o registro
      const params = {
        razaoSocial,
        cnpj: formattedCNPJ,
        email,
        password
      };

      const result = await register(params);

      if (result) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('LoginCondominio');
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro. Verifique os dados e tente novamente.');
      }
    } else {
      Alert.alert('Erro', 'As senhas não são iguais');
    }
  };

  const formatCNPJ = (input) => {
    // Remove caracteres não numéricos
    const numericCnpj = input.replace(/\D/g, '');
    // Limita a quantidade de caracteres a 14
    const limitedCnpj = numericCnpj.slice(0, 14);
    // Adiciona a formatação
    const formattedCNPJ = limitedCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    return formattedCNPJ;
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
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={(input) => {
          const formattedCNPJ = formatCNPJ(input);
          setCnpj(formattedCNPJ);
        }}
        keyboardType="numeric"
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
      <TextInput
        style={styles.input}
        placeholder="Repetir Senha"
        secureTextEntry
        value={repetirPassword}
        onChangeText={setRepetirPassword}
      />
      <Pressable style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Cadastrar</Text>
      </Pressable>
      <Pressable onPress={handleSignUp}>
        <Text style={styles.signUp}>Já tem conta? Faça login</Text>
      </Pressable>
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
    color: '#000',
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
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  signUp: {
    color: '#06B6DD',
  },
});

export default RegisterCondominio;
