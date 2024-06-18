import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { View,  StyleSheet, Image } from 'react-native';
import EspacosControl from '../../components/EspacosControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function MeusEspacos(){
  return(
    
    <div className="MeusEspacos">
      <EspacosControl></EspacosControl>
    </div>
  );
}

export default MeusEspacos;



{/*
  import CardEspacos from '../../components/CardEspacos';
 
const MeusEspacos = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <View style={styles.view}>
        <CardEspacos titulo="Quadra Esportiva" />
        <CardEspacos titulo="Piscina" />
        <CardEspacos titulo="Salão de Festas" />
        <CardEspacos titulo="Academia" />
        <CardEspacos titulo="Churrasqueira" />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/LogoCondo2.png')}
          style={styles.image}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    width: '50%',
    alignItems: 'end',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default MeusEspacos; */}