import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import chevrondoubleright from '../../assets/chevrondoubleright.svg';

const ButtonContinuar = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.botao}>
      <Text style={styles.textoBotao}>Continuar</Text>
        <Image
        source={chevrondoubleright}
        style={styles.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
 botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', 
    padding: 10,
    marginTop: 20,
  },
  textoBotao: {
    fontSize: 20,
  },
  icon: {
       alignItems: 'center',
   justifyContent: 'center',
  marginTop: 4,
  }
});

export default ButtonContinuar;
