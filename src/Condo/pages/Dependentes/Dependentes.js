import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider, Button } from 'react-native-paper';


const Dependentes = ({ navigation }) => {
  const navigateToCadastroDependente = () => {
    navigation.navigate('CadastroDependente');
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="text"
        onPress={navigateToCadastroDependente}
      >
        <Text>Cadastrar Dependente</Text>
      </Button>
      <Divider />
      <Button
        style={styles.button}
        mode="text"
        onPress={() => console.log("Pressed")}
      >
        <Text>Meus Dependentes</Text>
      </Button>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: 'left'
  }
});

export default Dependentes;
