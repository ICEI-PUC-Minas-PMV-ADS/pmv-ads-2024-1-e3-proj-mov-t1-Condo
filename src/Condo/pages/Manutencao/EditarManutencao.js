import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import { Dialog, Button } from 'react-native-paper';
import { DatePickerModal, registerTranslation, pt } from 'react-native-paper-dates';

registerTranslation("pt", pt);

const EditarManutencao = (props) => {
    const [motivo, setMotivo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const locale = "pt";

    const onConfirmStartDate = (params) => {
        setShowStartDatePicker(false);
        setStartDate(params.date);
    };

    const onConfirmEndDate = (params) => {
        setShowEndDatePicker(false);
        setEndDate(params.date);
    };

    return (
        <Dialog visible={props.visible} onDismiss={props.hideDialog} style={styles.dialogContent}>
            <Dialog.Content>
                <Text style={styles.title}>Espaço Selecionado</Text>
                <Text style={styles.subtitle}>{props.title}</Text>

                <Text style={styles.textTitle}>Período</Text>
                <View style={styles.inputsContainer}>
                    <Button
                        onPress={() => setShowStartDatePicker(true)}
                        mode="outlined"
                        style={styles.inputDate}
                    >
                        {startDate.toLocaleDateString()}
                    </Button>
                    <Button
                        onPress={() => setShowEndDatePicker(true)}
                        mode="outlined"
                        style={styles.inputDate}
                    >
                        {endDate.toLocaleDateString()}
                    </Button>
                </View>

                <Text style={styles.textTitle}>Motivo</Text>
                <TextInput
                    style={styles.card}
                    value={motivo}
                    mode="outlined"
                    underlineColor="#000"
                    onChangeText={setMotivo}
                />

                <View style={{ alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>{"Salvar Alterações"}</Text>
                    </Pressable>
                </View>
            </Dialog.Content>

            {DatePickerModal ? (
                <>
                    <DatePickerModal
                        locale={locale}
                        mode="single"
                        visible={showStartDatePicker}
                        onDismiss={() => setShowStartDatePicker(false)}
                        date={startDate}
                        onConfirm={onConfirmStartDate}
                        label="Escolha a data de início"
                        saveLabel="Salvar"
                        uppercase={false}
                    />

                    <DatePickerModal
                        locale={locale}
                        mode="single"
                        visible={showEndDatePicker}
                        onDismiss={() => setShowEndDatePicker(false)}
                        date={endDate}
                        onConfirm={onConfirmEndDate}
                        label="Escolha a data de fim"
                        saveLabel="Salvar"
                        uppercase={false}
                    />
                </>
            ) : (
                <Text>Erro: `DatePickerModal` não foi carregado corretamente.</Text>
            )}
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
