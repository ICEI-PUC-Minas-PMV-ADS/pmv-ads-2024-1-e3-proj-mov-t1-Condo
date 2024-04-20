import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const MeusDependentes = () => {
  const [dependentes, setDependentes] = useState([
    {
      nome: "João",
      cpf: "123.456.789-00",
      sexo: "Masculino",
      dataNascimento: "01/01/1990",
      idade: "32",
      expanded: false,
    },
    {
      nome: "Maria",
      cpf: "987.654.321-00",
      sexo: "Feminino",
      dataNascimento: "15/05/1985",
      idade: "37",
      expanded: false,
    },
  ]);

  const toggleExpand = (index) => {
    const updatedDependentes = [...dependentes];
    updatedDependentes[index].expanded = !updatedDependentes[index].expanded;
    setDependentes(updatedDependentes);
  };

  const handleSave = (index) => {
    console.log("Alterações salvas para o dependente:", dependentes[index]);
  };

  return (
    <View style={styles.container}>
      {dependentes.map((dependente, index) => (
        <View key={index} style={styles.dependenteContainer}>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <View style={styles.dependenteHeader}>
              <Text style={styles.nome}>{dependente.nome}</Text>
              <Text style={styles.seta}>{dependente.expanded ? "↓" : "→"}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
          </View>
          {dependente.expanded && (
            <View style={styles.informacoes}>
              <Text>CPF: {dependente.cpf}</Text>
              <Text>Sexo: {dependente.sexo}</Text>
              <Text>Data de Nascimento: {dependente.dataNascimento}</Text>
              <Text>Idade: {dependente.idade}</Text>
              <TouchableOpacity
                onPress={() => handleSave(index)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Salvar Alterações</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  dependenteContainer: {
    marginBottom: 20,
    width: "100%",
  },
  dependenteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seta: {
    fontSize: 18,
  },
  separatorContainer: {
    width: "100%",
    alignItems: "center", // Centralizar a linha horizontalmente
  },
  separator: {
    height: 2,
    backgroundColor: "#ccc",
    width: width, // Largura igual à largura da tela
  },
  informacoes: {
    padding: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
  },
});

export default MeusDependentes;
