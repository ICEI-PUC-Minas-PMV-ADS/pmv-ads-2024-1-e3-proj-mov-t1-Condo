import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import CalendarIcon from '../assets/calendario.svg';
import EllipseIcon from '../assets/Ellipse 4.png';




export default function ButtonReservas({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>

      <Image
        source={EllipseIcon}
        style={styles.background}
      />

      <Image
        source={CalendarIcon}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({



  button: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 160,
    marginHorizontal: -100,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  icon: {
    width: 46,
    height: 36,
    position: 'absolute',
    top: 27,
    left: 22,
  },
});
