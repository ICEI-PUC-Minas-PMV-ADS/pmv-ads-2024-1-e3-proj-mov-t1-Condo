import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CadastroDependente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");

  const handleCadastro = () => {
    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("Sexo:", sexo);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Idade:", idade);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Masculino" value="masculino" color="black" />
            <Picker.Item label="Feminino" value="feminino" color="black" />
          </Picker>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, { width: '50%' }]}>
          <Text style={styles.label}>Data de Nascimento:</Text>
          <TextInput
            style={styles.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>
        <View style={[styles.inputContainer, { width: '50%' }]}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput style={styles.input} value={idade} onChangeText={setIdade} />
        </View>
      </View>
      <Button title="Salvar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: '100%',
  },
  picker: {
    height: 48,
  },
});

export default CadastroDependente;
