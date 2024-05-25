import React, { useState } from 'react';
import { View, StyleSheet, Text , TouchableOpacity, TextInput} from 'react-native';
import { Button, Dialog } from 'react-native-paper';
import DateInputManutencao from '../../components/DateInputManutencao';

const EditarManutencao = (props) => {
    const [motivo, setMotivo] = useState('');

    return (
        <Dialog visible={props.visible} onDismiss={props.hideDialog} style={styles.dialogContent}>
            <Dialog.Content>
                <Text style={styles.title}>Espaço Selecionado</Text>
                <Text style={styles.subtitle}>{props.title}</Text>
                <Text style={styles.textTitle}>{"Período"}</Text>
                <View style={styles.inputsContainer}>
                    <DateInputManutencao titulo="Início" edit={true} />
                    <DateInputManutencao titulo="Fim" edit={true} />
                </View>
                <Text style={styles.textTitle}>{"Motivo"}</Text>
                <TextInput
                    style={styles.card}
                    value={motivo}
                    mode="outlined"
                    underlineColor="#000"
                    onChangeText={setMotivo}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>{"Salvar Alterações"}</Text>
                    </TouchableOpacity>
                </View>
            </Dialog.Content>
        </Dialog>
    );
};

const styles = StyleSheet.create({
    dialogContent: {
        backgroundColor: '#FDE9DF',
        borderRadius: 30,
        elevation: 30
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 17,
        color: '#848382',
        fontWeight: '900',
    },
    inputsContainer: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
    },
    inputDate: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
    },
    card: {
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      marginTop: 8,
    },
    button: {
      backgroundColor: '#FDE9DF',
      width: '100%',
      height: 49,
      borderColor: '#000',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      margin: 20,
    },
});

export default EditarManutencao;
