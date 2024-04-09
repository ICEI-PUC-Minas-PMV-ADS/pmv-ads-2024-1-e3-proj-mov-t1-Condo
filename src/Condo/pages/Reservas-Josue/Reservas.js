import React from 'react';
import { View, Text } from 'react-native';

import { Divider, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
const Reservas = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'initial' }}>


            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} /> Reservas
            </Appbar.Header>

            <Button mode="Text" onPress={() => console.log('Pressed')}>
                Reservar
            </Button>
            <Divider />
            <Button mode="Text" onPress={() => console.log('Pressed')}>
                Minhas Reservas
            </Button>
            <Divider />

        </View>
    );

}

export default Reservas;
