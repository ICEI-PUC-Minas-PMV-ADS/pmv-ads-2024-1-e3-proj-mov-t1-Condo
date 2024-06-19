import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const DadosCondominio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do Condomínio</Text>
      <View style={styles.field}>
        <TextInput style={styles.input} placeholder="Nome" />
      </View>
      <View style={styles.field}>
        <TextInput style={styles.input} placeholder="CNPJ" />
      </View>
      <View style={styles.field}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      <Pressable style={styles.saveButton}>
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

