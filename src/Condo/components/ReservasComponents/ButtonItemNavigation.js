import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonItemNavigation = ({ onPress, icon }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.iconWrapper}>
        {icon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    borderWidth: 1.5,
    borderColor: 'rgba(36, 34, 32, 0.56)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.5)', // Ajuste a cor de fundo conforme necessário
  },
});

export default ButtonItemNavigation;
