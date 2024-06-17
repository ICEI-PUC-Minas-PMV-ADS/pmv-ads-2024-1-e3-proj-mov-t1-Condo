/*import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Dialog, Portal, Button, Provider as PaperProvider } from 'react-native-paper';

const ReservaCard = ({ data, atividade, nome, pessoas, checkOut }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
  <View>
      <View style={styles.reservaCard}>
        <Text style={styles.reservaData}>{data}</Text>
        <Text style={styles.reservaAtividade}>{atividade}</Text>
        <Text style={styles.reservaInfo}>{nome} | {pessoas}</Text>
        <Text style={styles.reservaCheckOut}>Check-Out - {checkOut}</Text>
        <View style={styles.reservaButtons}>
          <Pressable style={[styles.button1, { backgroundColor: '#BEBEBE' }]} onPress={showDialog}>
            <Text style={styles.buttonText}>Não posso ir</Text>
          </Pressable>
          <Pressable style={[styles.button1, { backgroundColor: '#06B6DD' }]} onPress={() => {}}>
            <Text style={styles.buttonText}>Detalhes</Text>
          </Pressable>
        </View>
      </View>
  <PaperProvider>
      <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialogContent}>
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content>
              <Text>Tem certeza de que não poderá comparecer?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancelar</Button>
              <Button onPress={() => {
                // Lógica para lidar com a ação "Não posso ir"
                hideDialog();
              }}>Confirmar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ReservaCard;

*/