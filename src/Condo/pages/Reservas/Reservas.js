import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, Image, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import jogging from '../../assets/jogging.png';

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

            <View style={styles.containerImage}>
          <Image source={jogging} style={styles.image} />
        </View>

        </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({ 

  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});

export default Reservas;
