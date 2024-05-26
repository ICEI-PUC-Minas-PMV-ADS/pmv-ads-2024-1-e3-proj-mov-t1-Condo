import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import UserProvider from './context/UserContext';
import CondominoProvider from './context/CondominoContext';
import Route from './navigation/Route';

const App = () => {
  return (
    <UserProvider>
      <CondominoProvider>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </CondominoProvider>
    </UserProvider>
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
