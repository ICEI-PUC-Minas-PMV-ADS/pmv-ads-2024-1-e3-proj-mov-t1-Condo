import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';

const Instrucoes = () => {

return (

<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

<Text> Instrucoes </Text>

  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Piscina
  </Button>

   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Quadra Esportiva
  </Button>
  
   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Salao de Festas
  </Button>

  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Academia
  </Button>

  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
   Churrasqueira
  </Button>
  
 </View>

);

}

export default Instrucoes;