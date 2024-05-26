import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Divider, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

const NavigationToDo = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Adicione aqui a lógica para atualizar os dados.
    // Simulando uma atualização com um timeout.
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>--------------- Home ---------------</Text>
        <CustomButton title="Home - Condômino" screen="HomeCondomino" />

        <Text style={{ textAlign: 'center' }}>--------------- Dados Cadastrais ---------------</Text>
        <CustomButton title="Dados Cadastrais - Condômino" screen="" />

        <Text style={{ textAlign: 'center' }}>--------------- Reservas ---------------</Text>
        <CustomButton title="Reservas" screen="Reservas" />
        <CustomButton title="Reservar Espaço" screen="ReservarEspaco" />
        <CustomButton title="Reservar Espaço" screen="ReservarEspacoTwo" />
        <CustomButton title="Minhas Reservas" screen="" />

        <Text style={{ textAlign: 'center' }}>--------------- Dependentes ---------------</Text>
        <CustomButton title="Dependentes" screen="Dependentes" />

        <Text style={{ textAlign: 'center' }}>--------------- Instruções ---------------</Text>
        <CustomButton title="Instrucoes" screen="Instrucoes" />
      </View>
    </ScrollView>
  );
};

export default NavigationToDo;
