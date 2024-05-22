import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import UserProvider from './context/UserContext'; // Importe o UserProvider
import Route from './navigation/Route';
import Main from './navigation/Main';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
    //<UserProvider>
    //   <NavigationContainer>
    //    <Route />
    //  </NavigationContainer>
    //</UserProvider>
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

export default App;