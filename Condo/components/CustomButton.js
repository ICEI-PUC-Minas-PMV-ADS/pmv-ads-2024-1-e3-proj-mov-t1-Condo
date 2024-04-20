import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, screen }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(screen);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={navigateToScreen}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
