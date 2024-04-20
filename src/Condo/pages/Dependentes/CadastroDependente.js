import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CadastroDependente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");

  const handleSexoSelecionado = (sexoSelecionado) => {
    setSexo(sexoSelecionado);
  };

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

      <View style={styles.sexoContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <View style={styles.sexoOptions}>
          <TouchableOpacity
            style={[
              styles.sexoOption,
              sexo === "Masculino" && styles.sexoOptionSelected,
            ]}
            onPress={() => handleSexoSelecionado("Masculino")}
          >
            <Text style={styles.sexoOptionText}>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sexoOption,
              sexo === "Feminino" && styles.sexoOptionSelected,
            ]}
            onPress={() => handleSexoSelecionado("Feminino")}
          >
            <Text style={styles.sexoOptionText}>Feminino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sexoOption,
              sexo === "Outro" && styles.sexoOptionSelected,
            ]}
            onPress={() => handleSexoSelecionado("Outro")}
          >
            <Text style={styles.sexoOptionText}>Outro</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.inputContainer, { width: "50%" }]}>
          <Text style={styles.label}>Data de Nascimento:</Text>
          <TextInput
            style={styles.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>
        <View style={[styles.inputContainer, { width: "50%" }]}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  inputContainer: {
    marginBottom: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    color: "black",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#4F555A",
  },
  sexoContainer: {
    marginBottom: 10,
    width: "100%",
  },
  sexoOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sexoOption: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 5,
  },
  sexoOptionSelected: {
    backgroundColor: "#7F7F7F",
  },
  sexoOptionText: {
    fontSize: 16,
    color: "#4F555A",
  },
});

export default CadastroDependente;
