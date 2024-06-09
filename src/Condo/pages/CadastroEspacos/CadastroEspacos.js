import React, { useState, useCallback, useMemo } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native'; 
import { Text, TextInput, Button } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'; 
import { useUser } from '../../context/UserContext'; 
import { useTheme } from "react-native-paper";
import { TimePickerModal, registerTranslation, enGB } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { cadastrarEspaco } from '../../services/application.Services';
import MultiSelectComponent from '../../components/MultiSelectComponent';

registerTranslation("en-GB", enGB);

const CadastroEspacos = () => {
    const { user } = useUser();
    const [nomeEspaco, setNomeEspaco] = useState('');
    const [capacidadeMaxima, setCapacidadeMaxima] = useState('');
    const [tempoMaximo, setTempoMaximo] = useState(''); 
    const [textoInstrucoes, setTextoInstrucoes] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const navigation = useNavigation(); 
    const maxFontSizeMultiplier = 1.5

    const theme = useTheme();
    const [startTime, setStartTime] = useState({ hours: undefined, minutes: undefined });
    const [endTime, setEndTime] = useState({ hours: undefined, minutes: undefined });
    const [startTimeOpen, setStartTimeOpen] = useState(false);
    const [endTimeOpen, setEndTimeOpen] = useState(false);
    const locale = "pt";

    const onConfirmStartTime = useCallback(({ hours, minutes }) => {
        setStartTimeOpen(false);
        setStartTime({ hours, minutes });
    }, []);

    const onDismissStartTime = useCallback(() => {
        setStartTimeOpen(false);
    }, []);

    const onConfirmEndTime = useCallback(({ hours, minutes }) => {
        setEndTimeOpen(false);
        setEndTime({ hours, minutes });
    }, []);

    const onDismissEndTime = useCallback(() => {
        setEndTimeOpen(false);
    }, []);

    const timeFormatter = useMemo(
        () =>
            new Intl.DateTimeFormat(locale, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            }),
        [locale]
    );

    let startTimeDate = new Date();
    startTime.hours !== undefined && startTimeDate.setHours(startTime.hours);
    startTime.minutes !== undefined && startTimeDate.setMinutes(startTime.minutes);

    let endTimeDate = new Date();
    endTime.hours !== undefined && endTimeDate.setHours(endTime.hours);
    endTime.minutes !== undefined && endTimeDate.setMinutes(endTime.minutes);

    const handleSalvar = async () => {
        if (!user || !user.id) {
            console.error('ID do condomínio não está definido no objeto do usuário');
            Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
            return;
        }
        const formData = {
            nomeEspaco,
            capacidadeMaxima,
            tempoMaximo,
            textoInstrucoes,
            diasDeFuncionamento: selectedDays,
            condominio_id: user.id,
            horarioSelecionado: {
                inicio: startTime,
                fim: endTime,
            },
        };

        try {
            const response = await cadastrarEspaco(formData);
            Alert.alert('Sucesso', 'Espaço cadastrado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar espaço:', error);
            Alert.alert('Erro', 'Erro ao salvar espaço!');
        }
    };

    const diasDaSemana = [
        { id: '1', name: 'Segunda-feira' },
        { id: '2', name: 'Terça-feira' },
        { id: '3', name: 'Quarta-feira' },
        { id: '4', name: 'Quinta-feira' },
        { id: '5', name: 'Sexta-feira' },
        { id: '6', name: 'Sábado' },
        { id: '7', name: 'Domingo' },
    ];

    const handleTimeSelected = (time) => {
        setHorarioSelecionado(time);
    };

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.subTitles}>Nome do Espaço</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="Adicione um nome do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={nomeEspaco}
                        onChangeText={text => setNomeEspaco(text)}
                        underlineColor="transparent"
                    />
                </View>
                <View>
                    <Text style={styles.subTitles}>Capacidade máxima/Pessoas</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="capacidade máxima do espaço"
                        placeholderTextColor="#7F7
F7F7F"
                        value={capacidadeMaxima}
                        onChangeText={text => setCapacidadeMaxima(text)}
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>
                <View>
                    <Text style={styles.subTitles}>Tempo máximo da reserva</Text>
                    <TextInput
                        mode="outlined"
                        style={styles.textInput}
                        placeholder="03:00"
                        placeholderTextColor="#7F7F7F"
                        value={tempoMaximo.toString()} 
                        onChangeText={text => setTempoMaximo(parseInt(text) || 0)} 
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Instruções</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="Regras do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={textoInstrucoes}
                        onChangeText={text => setTextoInstrucoes(text)}
                        underlineColor="transparent"
                        multiline={true} 
                        numberOfLines={4}
                    />
                </View>
                <MultiSelectComponent
                    items={diasDaSemana}
                    onSelectedItemsChange={setSelectedDays}
                    selectedItems={selectedDays}
                />
                <View style={[styles.row, styles.marginVerticalEight]}>
                    <View style={styles.section}>
                        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} style={styles.bold}>Horário Início</Text>
                        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} variant="bodySmall">
                            {startTime && startTime.hours !== undefined && startTime.minutes !== undefined
                                ? timeFormatter.format(startTimeDate)
                                : 'Nenhum horário selecionado'}
                        </Text>
                    </View>
                    <Button onPress={() => setStartTimeOpen(true)} uppercase={false} mode="contained-tonal">
                        Escolher horário
                    </Button>
                    <TimePickerModal
                        locale={locale}
                        visible={startTimeOpen}
                        onDismiss={onDismissStartTime}
                        onConfirm={onConfirmStartTime}
                        hours={startTime.hours}
                        minutes={startTime.minutes}
                    />
                </View>
                <View style={[styles.row, styles.marginVerticalEight]}>
                    <View style={styles.section}>
                        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} style={styles.bold}>Horário Fim</Text>
                        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} variant="bodySmall">
                            {endTime && endTime.hours !== undefined && endTime.minutes !== undefined
                                ? timeFormatter.format(endTimeDate)
                                : 'Nenhum horário selecionado'}
                        </Text>
                    </View>
                    <Button onPress={() => setEndTimeOpen(true)} uppercase={false} mode="contained-tonal">
                        Escolher horário
                    </Button>
                    <TimePickerModal
                        locale={locale}
                        visible={endTimeOpen}
                        onDismiss={onDismissEndTime}
                        onConfirm={onConfirmEndTime}
                        hours={endTime.hours}
                        minutes={endTime.minutes}
                    />
                </View>
                <View>
                    <Button style={styles.buttonSalvar} onPress={handleSalvar}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </Button>
                </View>
                <Image style={styles.imageLogo}
                    source={require('../../assets/LogoCondo2.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
    },
    marginVerticalEight: {
        marginVertical: 8,
    },
    section: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bold: {
        fontWeight: 'bold',
    },
    subTitles: {
        fontSize: 20,
        fontWeight: '600',
        color: '#7F7F7F',
        marginBottom: 5,
        fontFamily: 'Roboto',
        textAlign: 'left',
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        backgroundColor: 'none',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: 50,
    },
    buttonSalvar: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#06B6DD', 
        width: '100%',
        paddingVertical: 10,
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

export default CadastroEspacos;
