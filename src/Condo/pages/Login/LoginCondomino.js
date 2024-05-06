import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginCondomino = () => {
  const [residentialId, setResidentialId] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // validação de login
    if (residentialId === 'id_correto') {
      
      navigation.navigate('LoginCondominoTwo');
    } else {
      
      alert('ID residencial incorreto. Por favor, tente novamente.');
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/LogoCondo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="ID RESIDENCIAL"
        value={residentialId}
        onChangeText={setResidentialId}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/jogging.svg')}
        style={styles.joggingLogo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  joggingLogo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 50,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  menuButtonText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginCondomino;
