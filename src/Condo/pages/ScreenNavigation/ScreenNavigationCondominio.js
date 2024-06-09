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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={{ flex: 1, justifyContent: 'initial' }}>
        <Text style={{ textAlign: 'center' }}>--------------- Home ---------------</Text>
        <CustomButton title="Home - Condomínio" screen="HomeCondominio" />

        <Text style={{ textAlign: 'center' }}>--------------- Dados Cadastrais ---------------</Text>

        <CustomButton title="Dados Cadastrais - Condomínio" screen="" />

        <Text style={{ textAlign: 'center' }}>--------------- Espaços e Apartamentos ---------------</Text>
        <CustomButton title="Cadastrar Espaço" screen="CadastroEspacos" />
        <CustomButton title="Cadastrar Apartamento" screen="CadastroApto" />
        <CustomButton title="Meus Espaços" screen="MeusEspacos" />
        <CustomButton title="Apartamentos Cadastrados" screen="ApartamentosCadastrados" />
        <CustomButton title="Blocos" screen="Blocos" />

        <Text style={{ textAlign: 'center' }}>--------------- Manutenção ---------------</Text>
        <CustomButton title="Manutenção" screen="Manutencao" />
        <CustomButton title="Adicionar Manutenção" screen="AdicionarManutencao" />
      </View>
    </ScrollView>
  );
};

export default NavigationToDo;
