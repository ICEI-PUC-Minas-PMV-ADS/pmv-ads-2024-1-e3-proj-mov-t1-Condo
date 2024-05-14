import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigation/Navigation'; // Importe o componente Navigation
import { StyleSheet } from 'react-native';
import { AuthProvider } from './context/UserContext'; // Importe o AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
