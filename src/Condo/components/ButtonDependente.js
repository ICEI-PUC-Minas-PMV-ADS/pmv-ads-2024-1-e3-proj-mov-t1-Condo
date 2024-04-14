import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import VectorIcon from '../assets/Vector.png';
import EllipseIcon from '../assets/Ellipse4.png';

export default function ButtonDependente({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>

      <Image
        source={EllipseIcon}
        style={styles.background}
      />

      <Image
        source={VectorIcon}
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
