import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, RefreshControl, Alert } from 'react-native';
import { format, parseISO, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Modal, Button } from 'react-native-paper';
import { useUser } from '../../context/UserContext';
import { useCondomino } from '../../context/CondominoContext';
import { fetchReservas, excluirReserva } from '../../services/application.Services';

const MinhasReservas = ({ navigation }) => {
    const { user } = useUser();
    const { userCondomino } = useCondomino();

    const [refreshing, setRefreshing] = useState(false);
    const [reservas, setReservas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const [scrollEnabled, setScrollEnabled] = useState(true);

    useEffect(() => {
        const loadReservas = async () => {
            try {
                if (!userCondomino) return;

                const reservasData = await fetchReservas(userCondomino.id);
                setReservas(reservasData);
            } catch (error) {
                console.error('Erro ao carregar as reservas:', error);
                // Trate o erro conforme necessário, como exibir uma mensagem ao usuário
            }
        };

        loadReservas();
    }, [userCondomino]);

    // Função para capitalizar a primeira letra
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Função para formatar a data e o horário
    const formatDateTime = (data, horario) => {
        const date = parseISO(data);
        if (!isValid(date)) {
            console.error(`Data inválida: ${data}`);
            return 'Data inválida';
        }
        const formattedDate = format(date, "EEEE - dd/MM/yyyy", { locale: ptBR });
        return `${capitalizeFirstLetter(formattedDate)} às ${horario}`;
    };

    const showDialog = (data) => {
        setModalData(data);
        setModalVisible(true);
        setScrollEnabled(false); // Desabilita o ScrollView quando o modal está aberto
    };

    const hideDialog = () => {
        setModalVisible(false);
        setModalData({});
        setScrollEnabled(true); // Habilita o ScrollView quando o modal é fechado
    };

    const handleDelete = async () => {
        try {
            await excluirReserva(modalData.id);
            setReservas(prevReservas => prevReservas.filter(reserva => reserva.id !== modalData.id));
            hideDialog();
            Alert.alert('Sucesso', 'Reserva cancelada com sucesso.');
        } catch (error) {
            console.error('Erro ao cancelar a reserva:', error);
            Alert.alert('Erro', 'Não foi possível cancelar a reserva.');
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={scrollEnabled} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text style={styles.title}></Text>
                {reservas.length > 0 ? (
                    <View>
                        {reservas.map(reserva => (
                            <View key={reserva.id}>
                                <View style={styles.reservaCard}>
                                    <Text style={styles.reservaData}>{formatDateTime(reserva.data, reserva.horario)}</Text>
                                    <Text style={styles.reservaAtividade}>{reserva.nomeEspaco}</Text>
                                    <Text style={styles.reservaInfo}>{reserva.nomeTitular} | Número de pessoas</Text>
                                    <Text style={styles.reservaCheckOut}>Check-Out</Text>
                                    <View style={styles.reservaButtons}>
                                        <Pressable style={[styles.button, { backgroundColor: '#BEBEBE' }]} onPress={() => showDialog(reserva)}>
                                            <Text style={styles.buttonText}>Não posso ir</Text>
                                        </Pressable>
                                        <Pressable style={[styles.button, { backgroundColor: '#06B6DD' }]} onPress={() => {}}>
                                            <Text style={styles.buttonText}>Detalhes</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text>Nenhuma reserva encontrada.</Text>
                )}
            </ScrollView>

            {/* Modal */}
            <Modal visible={modalVisible} onDismiss={hideDialog} contentContainerStyle={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Cancelar Reserva</Text>
                    <Text style={styles.modalText}>Tem certeza que deseja cancelar a reserva?</Text>
                    <View style={styles.modalActions}>
                        <Button  onPress={hideDialog}>
                            Cancelar
                        </Button>
                        <Button onPress={handleDelete}>
                            Confirmar
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: -25,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
    },
    reservaCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
    },
    reservaData: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    reservaAtividade: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    reservaInfo: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    reservaCheckOut: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    reservaButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    modalButton: {
        marginHorizontal: 10,
    },
});

export default MinhasReservas;