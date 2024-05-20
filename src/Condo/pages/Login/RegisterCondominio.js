import React, {useState} from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


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

  const handleLogin = () => {
    if (senha === repetirSenha) {
      // Redirecionar para a tela de Login se as senhas forem iguais
      navigation.navigate('LoginCondominio');
    } else {
      // Exibir alerta se as senhas não forem iguais
      Alert.alert('Erro', 'As senhas não são iguais');
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
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
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
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Cadastrar</Text>
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
    forgotPassword: {
      color: 'blue',
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
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
    },
    signUp: {
      color: '#06B6DD',
    },
  });

export default RegisterCondominio;