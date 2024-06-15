import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Divider, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';


const Reservas = () => {

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


       

           <CustomButton title="Reservar Espaço" screen="ReservarEspaco" />
            <Divider />
            <CustomButton title="Minhas reservas" screen="MinhasReservas"/>
            <Divider />

        </View>
        </ScrollView>
    );

}

export default Reservas;
