import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Picker } from 'react-native-paper';

const CadastroApto = () => {
    const [tempoMaximo, setTempoMaximo] = useState("");
    const [genero, setGenero] = useState("Masculino");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button icon="arrow-left" style={styles.button}></Button>
                <Text style={styles.title}>Cadastrar Apartamentos</Text>
                <Button icon="view-grid-outline" style={styles.button}></Button>
            </View>

            <View>
                <View>
                    <Text style={styles.subTitles}>Tempo máximo de reserva (Minutos)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Coloque o tempo máximo de reserva"
                        placeholderTextColor="#7F7F7F"
                        value={tempoMaximo}
                        onChangeText={text => setTempoMaximo(text)}
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Outra informação...</Text>
                    {/* Adicione outros campos aqui conforme necessário */}
                </View>

                <View>
                    <Text style={styles.subTitles}>Gênero</Text>
                    <Picker
                        selectedValue={genero}
                        onValueChange={(itemValue) => setGenero(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione o gênero" value="" />
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Feminino" value="Feminino" />
                        <Picker.Item label="Outro" value="Outro" />
                    </Picker>
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
        minHeight: 40, // Alterado para um valor absoluto
    },

    picker: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: 40, // Alterado para um valor absoluto
    },

    button: {
        margin: 0,
    },
});

export default CadastroApto;
