import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import VectorIcon from '../assets/vector.png';
import EllipseIcon from '../assets/Ellipse4.png';

export default function ButtonDependente({ onPress }) {
  return (
    <Pressable
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  icon: {
    width: 46,
    height: 36,
  },
});
