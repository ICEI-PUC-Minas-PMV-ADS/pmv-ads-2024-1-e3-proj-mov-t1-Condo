import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, screen }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(screen);
  };

  return (
    <Pressable style={styles.button} onPress={navigateToScreen}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default CustomButton;
