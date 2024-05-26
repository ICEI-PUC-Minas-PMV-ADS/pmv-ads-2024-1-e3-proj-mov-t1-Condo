import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { updateUserPassword } from '../../services/auth.services';  // Importe a função de registro
import { getUserByEmail } from '../../services/auth.services';

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('josuepayments@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [repetirPassword, setRepetirPassword] = useState('12345678');

  const handleSignUp = () => {
    //Redirecionar para a tela de Login
    navigation.navigate('LoginCondominio');
  };

  const handleChangePassword = async () => {
    //Busca o ID do usuário pelo email
    const user = await getUserByEmail(email);
    
    if (user) {
      const userId = user.id;
      
      if (password === repetirPassword) {
        const params = {
          email,
          password
        };
  
        //Atualiza a senha do usuário pelo ID
        const result = await updateUserPassword(userId, params);
  
        if (result) {
          Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
          navigation.navigate('LoginCondominio');
        } else {
          Alert.alert('Erro', 'Não foi possível atualizar a senha. Verifique os dados e tente novamente.');
        }
      } else {
        Alert.alert('Erro', 'As senhas não coincidem');
      }
    } else {
      Alert.alert('Erro', 'Usuário não encontrado');
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Nova Senha"
        secureTextEntry
        value={repetirPassword}
        onChangeText={setRepetirPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleChangePassword}>
        <Text style={styles.loginButtonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp}>Já tem conta? Faça login</Text>
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

export default UpdatePassword;
