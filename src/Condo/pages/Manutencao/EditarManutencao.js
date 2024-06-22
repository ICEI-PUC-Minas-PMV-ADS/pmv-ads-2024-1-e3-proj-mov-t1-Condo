import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dialog, Button } from 'react-native-paper';
import { DatePickerModal, registerTranslation, pt } from 'react-native-paper-dates';
import { updateManutencao } from '../../services/application.Services';

registerTranslation("pt", pt);

const EditarManutencao = (props) => {
    const [motivo, setMotivo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const locale = "pt";
    const navigation = useNavigation();

    useEffect(() => {
        if (props.manutencao) {
            setMotivo(props.manutencao.motivo || '');

            // Verificar se o timestamp é válido e convertê-lo para uma data
            try {
                const startTimestamp = new Date(props.manutencao.tempoDuracaoInicio);
                const endTimestamp = new Date(props.manutencao.tempoDuracaoFim);

                // Verifica se as datas são válidas
                if (startTimestamp instanceof Date && !isNaN(startTimestamp)) {
                    setStartDate(startTimestamp);
                } else {
                    console.error("Invalid start date:", props.manutencao.tempoDuracaoInicio);
                }

                if (endTimestamp instanceof Date && !isNaN(endTimestamp)) {
                    setEndDate(endTimestamp);
                } else {
                    console.error("Invalid end date:", props.manutencao.tempoDuracaoFim);
                }
            } catch (error) {
                console.error("Error parsing timestamps:", error);
            }
        }
    }, [props.manutencao]);

    const validateForm = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Zerando as horas para comparar apenas as datas

        if (
            motivo &&  // Verifica se o motivo não está vazio
            startDate instanceof Date && !isNaN(startDate) &&  // Verifica se a startDate é válida
            endDate instanceof Date && !isNaN(endDate) // Verifica se a endDate é válida
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid((motivo == props.manutencao.motivo &&
                parseInt(props.manutencao.tempoDuracaoInicio, 10) == startDate &&
                parseInt(props.manutencao.tempoDuracaoFim, 10) == endDate));
        }
    };

    useEffect(() => {
        validateForm();
    }, [motivo, startDate, endDate]);

    const onConfirmStartDate = (params) => {
        setShowStartDatePicker(false);
        setStartDate(params.date);
    };

    const handleSalvar = async () => {
        const formData = {
            id: props.manutencao.id,
            tempoDuracaoInicio: startDate,
            tempoDuracaoFim: endDate,
            motivo: motivo,
            espaco_id: props.manutencao.espaco_id,
            condominio_id: props.manutencao.condominio_id,
        };

        try {
            await updateManutencao(formData);
            Alert.alert('Sucesso', 'Manutenção atualizada com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao atualizar manutenção:', error);
            Alert.alert('Erro', 'Erro ao atualizar a manutenção!');
        }
    };

    const onConfirmEndDate = (params) => {
        setShowEndDatePicker(false);
        setEndDate(params.date);
    };

    return (
        <Dialog visible={props.visible} onDismiss={props.hideDialog} style={styles.dialogContent}>
            <Dialog.Content>
                <Text style={styles.title}>Espaço Selecionado</Text>
                {props.manutencao && props.manutencao.espaco && (
                    <Text style={styles.subtitle}>{props.manutencao.espaco.nomeEspaco}</Text>
                )}

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
                    <Pressable style={[styles.button, { backgroundColor: isFormValid ? '#06B6DD' : null }]} onPress={isFormValid ? handleSalvar : () => { }}>
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
