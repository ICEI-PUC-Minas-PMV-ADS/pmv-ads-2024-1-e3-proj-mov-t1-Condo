import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { salvarApartamento, salvarTitular } from '../../services/application.Services';
import { useUser } from '../../context/UserContext';

const CadastroApto = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const [nomeTitular, setNomeTitular] = useState('');
  const [cpfTitular, setCpfTitular] = useState('');
  const [bloco, setBloco] = useState('');
  const [numeroApartamento, setNumeroApartamento] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');

  console.log('CadastroApto user:', user);

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

  const formatarCPF = (cpf) => {
    const cleaned = cpf.replace(/\D/g, "");
    const formatted = cleaned.slice(0, 11);
    let result = formatted.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
    setCpfTitular(result);
  };

  const handleSalvar = async () => {
    if (!user || !user.id) {
      console.error('ID do condomínio não está definido no objeto do usuário');
      Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
      return;
    }
  
    // Dados do titular
    const formDataTitular = {
      nomeTitular,
      cpfTitular,
      dataNascimento,
      idade,
      genero,
      condominio_id: user.id,
    };
  
    try {
      // Salvar titular e obter o id do titular salvo
      const responseTitular = await salvarTitular(formDataTitular);
      const titularId = responseTitular.id; // Ajuste conforme necessário para obter o id corretamente
  
      // Dados do apartamento
      const formDataApartamento = {
        bloco,
        numeroApartamento,
        condominio_id: user.id,
        titular_id: titularId, // Usar o id do titular salvo
      };
  
      // Salvar apartamento
      const responseApartamento = await salvarApartamento(formDataApartamento);
  
      Alert.alert('Sucesso', 'Apartamento e titular cadastrados com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar apartamento ou titular:', error);
      Alert.alert('Erro', 'Erro ao salvar apartamento ou titular!');
    }
  };
  
  
    return (
    <ScrollView contentContainerStyle={styles.container}>

        <View>
            <View>
                <Text style={styles.subTitles}>Nº Bloco (Número)</Text>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    placeholder="Bloco e complemento"
                    placeholderTextColor="#7F7F7F"
                    value={bloco}
                    onChangeText={text => setBloco(text)}
                    keyboardType="numeric"
                    underlineColor="transparent"
                />
            </View>
            <View>
                <Text style={styles.subTitles}>Nº do Apartamento (Número)</Text>
                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    placeholder="Somente o número."
                    placeholderTextColor="#7F7F7F"
                    value={numeroApartamento}
                    onChangeText={text => setNumeroApartamento(text)}
                    keyboardType="numeric"
                    underlineColor="transparent"
                />
            </View>
            <View>
                <Text style={styles.subTitles}>Nome do Titular</Text>
                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    placeholder="Coloque seu nome completo."
                    placeholderTextColor="#7F7F7F"
                    value={nomeTitular}
                    onChangeText={text => setNomeTitular(text)}
                    underlineColor="transparent"
                />
            </View>
            <View>
                <Text style={styles.subTitles}>CPF</Text>
                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    placeholder="Coloque somente os números"
                    placeholderTextColor="#7F7F7F"
                    value={cpfTitular}
                    onChangeText={text => formatarCPF(text)}
                    keyboardType="numeric"
                    underlineColor="transparent"
                />
            </View>

            <View>
                <Text style={styles.subTitles}>Data de Nascimento</Text>
                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#7F7F7F"
                    value={dataNascimento}
                    onChangeText={text => formatarData(text)} // Aplicar formatação de data
                    keyboardType="numeric"
                    underlineColor="transparent"
                />
            </View>

            <View>
                <Text style={styles.subTitles}>Idade</Text>
                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    placeholder="Digite sua idade"
                    placeholderTextColor="#7F7F7F"
                    value={idade}
                    onChangeText={text => setIdade(text)}
                    keyboardType="numeric"
                    underlineColor="transparent"
                />
            </View>

            <View>
                <Text style={styles.subTitles}>Gênero</Text>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    value={genero}
                    onValueChange={(genero) => setGenero(genero)}
                    items={[
                        { label: 'Masculino', value: 'Masculino' },
                        { label: 'Feminino', value: 'Feminino' },
                        { label: 'Outro', value: 'Outro' },
                    ]}
                />
            </View>

            <View>
                <Button style={styles.buttonSalvar} onPress={handleSalvar}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </Button>
            </View>

            <Image style={styles.imageLogo} source={require('../../assets/LogoCondo2.png')} />
        </View>
    </ScrollView>
)
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: 40,
        padding: 10,
    },
    inputAndroid: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: 40,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
});

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#7F7F7F',
        marginBottom: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        color: '#7F7F7F',
    },
    subTitles: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#7F7F7F',
        marginBottom: 5,
        fontFamily: 'poppins',
        textAlign: 'left',
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        backgroundColor: 'none',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: 40,
    },
    button: {
        margin: 0,
    },
    buttonSalvar: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#06B6DD',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    imageLogo: {
        position: 'absolute',
        bottom: -290,
        left: -10,
        width: 180,
        height: 230,
        resizeMode: 'stretch',
        opacity: 0.5,
    }
});

export default CadastroApto;