import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { cadastrarDependente } from "../../services/auth.services";

const CadastroDependente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");

  const handleCadastro = async () => {
    if (nome.length > 100) {
      Alert.alert("Erro", "O nome deve ter no máximo 100 caracteres.");
      return;
    }
    if (!/^[a-zA-Z\s]*$/.test(nome)) {
      Alert.alert("Erro", "O nome deve conter apenas letras.");
      return;
    }
    if (idade !== "" && !/^\d{1,3}$/.test(idade)) {
      Alert.alert(
        "Erro",
        "A idade deve ser um número com no máximo 3 dígitos."
      );
      return;
    }

    const novoDependente = {
      nome,
      cpf,
      dataNascimento,
      idade,
    };

    try {
      const response = await cadastrarDependente(novoDependente);
      Alert.alert("Sucesso", "Dependente cadastrado com sucesso.");
      setNome("");
      setCpf("");
      setDataNascimento("");
      setIdade("");
    } catch (error) {
      Alert.alert("Erro", "Erro ao cadastrar dependente.");
    }
  };

  const formatarCPF = (cpf) => {
    const cleaned = cpf.replace(/\D/g, "");
    const formatted = cleaned.slice(0, 11);
    let result = formatted.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
    setCpf(result);
  };

  const formatarData = (data) => {
    const cleaned = data.replace(/\D/g, "");
    if (/^\d{0,2}(\d{0,2})?(\d{0,4})?$/.test(cleaned)) {
      let formatted = cleaned.replace(
        /^(\d{0,2})(\d{0,2})?(\d{0,4})?$/,
        (match, p1, p2, p3) => {
          let result = "";
          if (p1) result += p1;
          if (p2) result += `/${p2}`;
          if (p3) result += `/${p3}`;
          return result;
        }
      );
      setDataNascimento(formatted);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => {
            if (/^[a-zA-Z\s]*$/.test(text) || text === "") {
              setNome(text.slice(0, 100)); // Limita o nome a 100 caracteres
            } else {
              Alert.alert("Erro", "O nome deve conter apenas letras.");
            }
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={(text) => {
            if (/^[\d.-]*$/.test(text)) {
              formatarCPF(text);
            } else {
              Alert.alert(
                "Erro",
                "O CPF deve conter apenas números, pontos e traços."
              );
            }
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          value={dataNascimento}
          onChangeText={(text) => formatarData(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={(text) => {
            if (/^\d{0,3}$/.test(text)) {
              setIdade(text);
            } else {
              Alert.alert(
                "Erro",
                "A idade deve ser um número com no máximo 3 dígitos."
              );
            }
          }}
        />
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
});

export default CadastroDependente;
