import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { salvarDadosCondominio } from '../../services/application.Services'; 
import { useUser } from '../../context/UserContext';

const DadosCondominio = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');

  const formatarCNPJ = (cnpj) => {
    const cleaned = cnpj.replace(/\D/g, '');
    const formatted = cleaned.slice(0, 14);
    let result = formatted.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    setCnpj(result);
  };

  const handleSalvar = async () => {
    if (!user || !user.id) {
      console.error('ID do condomínio não está definido no objeto do usuário');
      Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
      return;
    }

    const formData = {
      razaoSocial,
      cnpj,
      email,
      condominio_id: user.id,
    };

    try {
      const response = await salvarDadosCondominio(formData);
      Alert.alert('Sucesso', 'Dados do condomínio salvos com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar dados do condomínio:', error);
      Alert.alert('Erro', 'Erro ao salvar dados do condomínio!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do Condomínio</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Razão Social"
          placeholderTextColor="#7F7F7F"
          value={razaoSocial}
          onChangeText={text => setRazaoSocial(text)}
          underlineColor="transparent"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#7F7F7F"
          value={cnpj}
          onChangeText={text => formatarCNPJ(text)}
          keyboardType="numeric"
          underlineColor="transparent"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7F7F7F"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          underlineColor="transparent"
        />
      </View>
      <Pressable style={styles.saveButton} onPress={handleSalvar}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7F7F7F',
  },
  field: {
    marginBottom: 15,
    width: '90%',
  },
  input: {
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#e0f7fa',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#06B6DD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '70%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DadosCondominio;

