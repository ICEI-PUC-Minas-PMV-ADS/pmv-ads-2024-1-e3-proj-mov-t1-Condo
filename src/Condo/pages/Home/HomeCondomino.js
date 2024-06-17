import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonReservas from '../../components/ReservasComponents/ButtonItemNavigation';
import ButtonDependente from '../../components/ReservasComponents/ButtonItemNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider, Modal, Button } from 'react-native-paper';
import { ptBR } from 'date-fns/locale';
import { format, parseISO, isValid } from 'date-fns';
import { useCondomino } from '../../context/CondominoContext';
import Icon from 'react-native-vector-icons/FontAwesome';

import { fetchReservas, excluirReserva } from '../../services/application.Services';

const HomeCondomino = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const { userCondomino } = useCondomino();
  const [reservas, setReservas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [scrollEnabled, setScrollEnabled] = useState(true);


  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    const loadReservas = async () => {
        try {
            if (!userCondomino) return;

            let reservasData = await fetchReservas(userCondomino.id);
            
            // Ordenar as reservas pela data e horário mais próximos
            reservasData.sort((a, b) => {
                const dateA = parseISO(`${a.data}T${a.horario}`);
                const dateB = parseISO(`${b.data}T${b.horario}`);
                return dateA - dateB;
            });

            // Limitar as reservas a no máximo 5
            const reservasLimitadas = reservasData.slice(0, 5);

            setReservas(reservasLimitadas);
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


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.parque2}>Parque das Orquídeas</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonReservas onPress={() => navigation.navigate('Reservas')} icon={<Ionicons name="calendar-outline" size={46} color="#787879" />} />
          <Text style={styles.menuLabel}>Reservas</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonDependente onPress={() => navigation.navigate('Dependentes')} icon={<Ionicons name="people-outline" size={46} color="#787879" />} />
          <Text style={styles.menuLabel}>Dependentes</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonReservas onPress={() => navigation.navigate('Instrucoes')} icon={<Ionicons name="book-outline" size={46} color="#787879" />} />
          <Text style={styles.menuLabel}>Instruções</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.reservasContainer}>
          <Text style={styles.reservasproximas}>Reservas Próximas</Text>
          {reservas.length > 0 ? (
                    <View>
                        {reservas.map(reserva => (
                            <View key={reserva.id}>
                                <View style={styles.reservaCard}>
                                    <Text style={styles.reservaData}> <Icon name="calendar" size={16} color="#7F7F7F" /> {formatDateTime(reserva.data, reserva.horario)}</Text>
                                    <Divider style={styles.divider} />
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
        </View>
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
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  parque2: {
    fontSize: 26,
    color: '#06B6DD',
    fontFamily: 'sans-serif-medium',
    textAlign: 'initial',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Alinha os itens verticalmente
    marginBottom: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  menuLabel: {
    color: '#4F555A',
    fontSize: 17,
    marginTop: 5,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  reservasContainer: {
    paddingHorizontal: 20,
  },
  reservasproximas: {
    fontSize: 22,
    color: '#4F5957',
    marginBottom: 10,
  },
  divider : {
    height: 1.5,
    borderRadius: 3,
    marginBottom: 5,
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
     color: "#7F7F7F",
     fontWeight: 'bold',
     marginLeft: -5,
     marginBottom: 8,
 },
 reservaAtividade: {
     fontSize: 15,
     fontWeight: '700',
     color: '#4F555A',
     marginBottom: 5,
 },
 reservaInfo: {
     fontSize: 14,
     color: '#555',
     marginBottom: 5,
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
 buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
},
button: {
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 5,
},
  button1: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
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

export default HomeCondomino;

