import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import {
  dependente,
  excluirDependente,
  editarDependente,
} from "../../services/application.Services";

const MeusDependentes = () => {
  const [dependentes, setDependentes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [editandoNome, setEditandoNome] = useState("");
  const [editandoDataNasc, setEditandoDataNasc] = useState("");
  const [editandoCPF, setEditandoCPF] = useState(""); // Novo estado para CPF
  const [expandidoId, setExpandidoId] = useState(null); // Novo estado para controlar a expansão

  useEffect(() => {
    const fetchDependentes = async () => {
      try {
        const dependentesData = await dependente();
        setDependentes(dependentesData);
      } catch (error) {
        console.error("Erro ao obter dependentes:", error);
      }
    };

    fetchDependentes();
  }, []);

  const handleEditarDependente = async (id) => {
    const dependenteEditando = dependentes.find((dep) => dep.id === id);
    if (dependenteEditando) {
      setEditandoId(id);
      setEditandoNome(dependenteEditando.nomeDependente);
      setEditandoDataNasc(dependenteEditando.data_Nasc);
      setEditandoCPF(dependenteEditando.cpfDependente); // Definindo o CPF para edição
    }
  };

  const handleSalvarDependente = async () => {
    if (!editandoNome || !editandoDataNasc || !editandoCPF) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      await editarDependente(editandoId, {
        nomeDependente: editandoNome,
        data_Nasc: editandoDataNasc,
        cpfDependente: editandoCPF, // Salvando o CPF
      });

      const dependentesData = await dependente();
      setDependentes(dependentesData);

      setEditandoId(null);
      setEditandoNome("");
      setEditandoDataNasc("");
      setEditandoCPF(""); // Resetando o estado do CPF
    } catch (error) {
      console.error("Erro ao editar dependente:", error);
    }
  };

  const handleExcluirDependente = async (id) => {
    try {
      await excluirDependente(id);
      const dependentesData = await dependente();
      setDependentes(dependentesData);
    } catch (error) {
      console.error("Erro ao excluir dependente:", error);
    }
  };

  const toggleExpandido = (id) => {
    setExpandidoId(expandidoId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Dependentes</Text>
      {dependentes.map((dependente, index) => (
        <View key={index} style={styles.dependenteContainer}>
          <Pressable
            onPress={() => toggleExpandido(dependente.id)}
            style={styles.dependenteHeader}
          >
            <Text style={styles.dependenteName}>
              {dependente.nomeDependente}
            </Text>
            <Image
              source={require("../../assets/arrow-circle-down.png")}
              style={styles.arrow}
            />
          </Pressable>
          {expandidoId === dependente.id && (
            <View>
              {editandoId === dependente.id ? (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={editandoNome}
                    onChangeText={setEditandoNome}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento"
                    value={editandoDataNasc}
                    onChangeText={setEditandoDataNasc}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={editandoCPF}
                    onChangeText={setEditandoCPF} // Adicionando o campo para CPF
                  />
                  <Pressable
                    style={styles.button}
                    onPress={handleSalvarDependente}
                  >
                    <Text style={styles.buttonText}>Salvar</Text>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text style={styles.dependenteInfo}>
                    CPF: {dependente.cpfDependente}
                  </Text>
                  <Text style={styles.dependenteInfo}>
                    Data de Nascimento: {dependente.data_Nasc}
                  </Text>
                  <Pressable
                    style={styles.button}
                    onPress={() => handleEditarDependente(dependente.id)}
                  >
                    <Text style={styles.buttonText}>Editar</Text>
                  </Pressable>
                  <Pressable
                    style={styles.button}
                    onPress={() => handleExcluirDependente(dependente.id)}
                  >
                    <Text style={styles.buttonText}>Excluir</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}
          {index < dependentes.length - 1 && <View style={styles.separator} />} {/* Linha separadora */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  dependenteContainer: {
    marginBottom: 20,
    width: "100%",
  },
  dependenteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dependenteName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  dependenteInfo: {
    fontSize: 16,
    marginBottom: 3,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
});

export default MeusDependentes;
