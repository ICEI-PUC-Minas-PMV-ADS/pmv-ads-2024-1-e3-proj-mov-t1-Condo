import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {  Dialog } from 'react-native-paper';

const DeletarManutencao = (props) => {

    return (
        <Dialog visible={props.visible} onDismiss={props.hideDialog} style={styles.dialogContent}>
            <Dialog.Content>
                <Text style={styles.title}>{"Tem certeza disso?"}</Text>
                <Text style={styles.subtitle}>{"Esta ação não poderá ser desfeita, remover"} {props.title} {"da manutenção?"}</Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>{"Remover"}</Text>
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
        elevation: 30,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
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

export default DeletarManutencao;
