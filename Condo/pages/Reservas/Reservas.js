import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Divider, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';


const Reservas = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'initial' }}>


       

           <CustomButton title="Reservar Espaço" screen="ReservarEspaco" />
            <Divider />
            <Button mode="Text" onPress={() => console.log('Pressed')}>
                Minhas Reservas
            </Button>
            <Divider />

        </View>
    );

}

export default Reservas;
