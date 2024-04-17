import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Divider, TextInput, Button } from 'react-native-paper';

const CadastroEspacos = () => {
    const [nomeEspaco, setNomeEspaco] = useState("");
    const [capacidadeMaxima, setCapacidadeMaxima] = useState("");
    const [tempoMaximo, setTempoMaximo] = useState("");
    const [textoInstrucoes, setTextoInstrucoes] = useState("");

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Button icon="arrow-left" style={styles.button}></Button>
                <Text style={styles.title}>Cadastrar Espaço</Text>
                <Button icon="view-grid-outline" style={styles.button}></Button>
            </View>

            <View>

                <View>
                    <Text style={styles.subTitles}>Nome do Espaço</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Adicione um nome do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={nomeEspaco}
                        onChangeText={text => setNomeEspaco(text)}
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Capacidade máximo de pessoas</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Coloque a capacidade máxima do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={capacidadeMaxima}
                        onChangeText={text => setCapacidadeMaxima(text)}
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Tempo máximo de reserva (Minutos)</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Coloque a tempo máximo de reserva"
                        placeholderTextColor="#7F7F7F"
                        value={tempoMaximo}
                        onChangeText={text => setTempoMaximo(text)}
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Instruções</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Coloque as regras do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={textoInstrucoes}
                        onChangeText={text => setTextoInstrucoes(text)}
                        underlineColor="transparent"
                        multiline={true} // Habilita a entrada multilinha
                        numberOfLines={4} // Define o número inicial de linha
                    />
                </View>

                <View>
                    <Button style={styles.buttonSalvar} onPress={() => console.log('Pressed')}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </Button>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        borderBottomWidth: 2, // Ajusta a espessura do divisor
        borderBottomColor: '#7F7F7F', // Cor do divisor
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
        minHeight: '3%',
        maxHeight: 'auto',
    },

    buttonSalvar: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#06B6DD', // Azul
        width: '100%',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },

    button: {
        margin: 0, // Remove o espaçamento padrão dos botões
    },

});

export default CadastroEspacos;
