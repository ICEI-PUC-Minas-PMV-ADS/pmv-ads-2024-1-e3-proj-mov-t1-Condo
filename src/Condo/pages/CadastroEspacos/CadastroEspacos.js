import React, { useState, useCallback, useMemo, useEffect  } from 'react';
import { View, StyleSheet, Image, Alert, Modal, Pressable } from 'react-native'; 
import { Text, TextInput, Button } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'; 
import { useUser } from '../../context/UserContext'; 
import { useTheme } from "react-native-paper";
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { TimePickerModal, registerTranslation, pt } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { cadastrarEspaco } from '../../services/application.Services';
import MultiSelectComponent from '../../components/TimePickerComponent/MultiSelectComponent';

registerTranslation("pt", pt);

const CadastroEspacos = () => {
    const { user } = useUser();
    const [nomeEspaco, setNomeEspaco] = useState('');
    const [capacidadeMaxima, setCapacidadeMaxima] = useState('');
    const [tempoMaximo, setTempoMaximo] = useState(''); 
    const [textoInstrucoes, setTextoInstrucoes] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); // Estado para validar o formulário
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

     // Função para validar o formulário
     const validateForm = () => {
        if (
            nomeEspaco &&
            capacidadeMaxima &&
            tempoMaximo &&
            textoInstrucoes &&
            selectedDays.length > 0 &&
            startTime.hours !== undefined &&
            startTime.minutes !== undefined &&
            endTime.hours !== undefined &&
            endTime.minutes !== undefined
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    useEffect(() => {
        validateForm();
    }, [nomeEspaco, capacidadeMaxima, tempoMaximo, textoInstrucoes, selectedDays, startTime, endTime]);


    const formatarNumero = (texto) => {
        // Remove caracteres não numéricos
        let numeroFormatado = texto.replace(/[^0-9]/g, '');
        // Limita o comprimento máximo a 4 dígitos
        numeroFormatado = numeroFormatado.slice(0, 4);
        // Se o número for maior que zero, parseie para um número inteiro
        if (numeroFormatado.length > 0) {
            numeroFormatado = parseInt(numeroFormatado);
        }
        return numeroFormatado;
    };


    const handleChangeText = (texto) => {
        const numeroFormatado = formatarNumero(texto);
        setCapacidadeMaxima(numeroFormatado.toString());
    };


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
            horarioFuncionamento: {
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
        { id: '0', name: 'Domingo' },
        { id: '1', name: 'Segunda-feira' },
        { id: '2', name: 'Terça-feira' },
        { id: '3', name: 'Quarta-feira' },
        { id: '4', name: 'Quinta-feira' },
        { id: '5', name: 'Sexta-feira' },
        { id: '6', name: 'Sábado' },
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
                        placeholder="Ex: Piscina"
                        placeholderTextColor="#7F7F7F"
                        value={nomeEspaco}
                        onChangeText={text => setNomeEspaco(text)}
                        underlineColor="transparent"
                    />
                </View>
                <View>
            <Text style={styles.subTitles}>Capacidade máxima/Pessoas</Text>
            <TextInput
                style={styles.textInput}
                mode="outlined"
                placeholder="Somente números"
                placeholderTextColor="#7F7F7F"
                value={capacidadeMaxima}
                onChangeText={handleChangeText}
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
                <Button style={styles.buttonDiasFuncionamento}onPress={() => setIsModalVisible(true)} mode="contained-tonal">
                    Dias de funcionamento
                </Button>
                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Selecione os Dias de Funcionamento</Text>
                            <MultiSelectComponent
                                items={diasDaSemana}
                                onSelectedItemsChange={setSelectedDays}
                                selectedItems={selectedDays}
                            />
                            <Button onPress={() => setIsModalVisible(false)} mode="contained">
                                Fechar
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View style={[styles.row, styles.marginVerticalEight]}>
    <View style={styles.section}>
        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} style={styles.bold}>Abertura ⏰</Text>
        <Pressable onPress={() => setStartTimeOpen(true)}>
            <Text maxFontSizeMultiplier={maxFontSizeMultiplier} variant="bodySmall">
                {startTime && startTime.hours !== undefined && startTime.minutes !== undefined
                    ? timeFormatter.format(startTimeDate)
                    : 'Selecione'}
            </Text>
        </Pressable>
        <TimePickerModal
            locale={locale}
            visible={startTimeOpen}
            onDismiss={onDismissStartTime}
            onConfirm={onConfirmStartTime}
            hours={startTime.hours}
            minutes={startTime.minutes}
        />
    </View>
    <View style={styles.section}>
        <Text maxFontSizeMultiplier={maxFontSizeMultiplier} style={styles.bold}>Fechamento ⏰</Text>
        <Pressable onPress={() => setEndTimeOpen(true)}>
            <Text maxFontSizeMultiplier={maxFontSizeMultiplier} variant="bodySmall">
                {endTime && endTime.hours !== undefined && endTime.minutes !== undefined
                    ? timeFormatter.format(endTimeDate)
                    : 'Selecione'}
            </Text>
        </Pressable>
        <TimePickerModal
            locale={locale}
            visible={endTimeOpen}
            onDismiss={onDismissEndTime}
            onConfirm={onConfirmEndTime}
            hours={endTime.hours}
            minutes={endTime.minutes}
        />
    </View>
</View>


                <View style={styles.buttonContainer}>
                <Button
                  style={[styles.buttonSalvar, { backgroundColor: isFormValid ? '#06B6DD' : '#999' }]}
                    onPress={handleSalvar}
                    disabled={!isFormValid}
                >
                     <Text style={styles.buttonText}>Salvar</Text>
                    </Button>
                    <Text style={styles.buttonDetail}>Preencha todos os campos para habilitar o botão.</Text>

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
        backgroundColor: '#f0f0f0',
    },
    row: {
        flexDirection: 'row',
        marginLeft: 10,
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
    buttonDiasFuncionamento: {
      borderRadius: 10,
      marginTop: 2,
      marginBottom: 5,
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
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonDetail:{
        color: 'gray',
        fontSize: 12,
        paddingTop: 5,
    },
    imageLogo: {
        position: 'absolute',
        bottom: -290,
        left: -10,
        width: 180,
        height: 230,
        resizeMode: 'stretch',
        opacity: 0.5,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CadastroEspacos;
