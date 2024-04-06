import React from 'react';
import { View } from 'react-native';
import ButtonDependente from '../../Condo/components/ButtonDependente';
import Vector from '../assets/Vector.png';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonDependente
        onPress={() => navigation.navigate('Dependentes')}
        icon={Vector}
      />
    </View>
  );
}
