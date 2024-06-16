import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet , Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateUserEmailAndPassword } from '../../services/auth.services';

const AtualizaTitular = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { cpf } = route.params;

  const handleUpdate = async () => {
    try {
      await updateUserEmailAndPassword(cpf, newEmail, newPassword);
      alert('Cadatro atualizado com Sucesso!');
      navigation.navigate('LoginCondominoTwo');
    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar o e-mail e senha. Por favor, tente novamente.');
    }
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
      <Text style={styles.title}>Atualize Seu Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Pressable style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Cofirmar</Text>
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
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#06B6DD',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(36, 34, 32, 0.44)',
    placeholderTextColor: 'rgba(36, 34, 32, 0.44)',
    borderRadius: 67,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16, 
    fontWeight: '400',
    color: '#7F7F7F',
  },
  updateButton: {
    backgroundColor: '#06B6DD',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 67,
    marginBottom: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default AtualizaTitular;
