import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons de @expo/vector-icons
import { Appbar, List } from 'react-native-paper';

const Instrucoes = () => {

return (

<View>
      
    <View style={{ marginVertical: 2, backgroundColor: '#F0F0F0' }}>
      <List.AccordionGroup>
        <List.Accordion
          title="Piscina" id="1" style={{ marginBottom: 10, padding: 15 }} titleStyle={{ color: '#7F7F7F' }}>
         <View style={{ padding: 10, paddingLeft: 30, marginTop: 30 }}>
         <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F',  fontSize: 16, fontWeight: '700' }}>Não pode</Text>
         <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Bebidas alcoolicas.</Text>
         <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Vidros e objetos cortantes.</Text>
         <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Equipamentos de som.</Text>
         <Text style={{ marginBottom: 20, fontFamily: 'Poppins', color: '#7F7F7F' }}>Correr na área da piscina.</Text>

        <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Pode</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Respeitar as outras pessoas no ambiente.</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Se divertir com cuidado.</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Se refrescar com alegria.</Text>
        <Image source={require('../../assets/iconn.png')} style={styles.foto1} />
        </View>
        </List.Accordion>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }} />

        <List.Accordion
          title="Quadra esportiva" id="2" style={{ marginBottom: 10, padding: 15,  }} titleStyle={{ color: '#7F7F7F' }}>
         <View style={{ padding: 10, paddingLeft: 30, marginTop: 30 }}>
         <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Não pode</Text>
         <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Danificar a quadra.</Text>
         <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Usar patins ou skate na quadra.</Text>
         <Text style={{ marginBottom: 20, fontFamily: 'Poppins', color: '#7F7F7F' }}>Ocupar a quadra por muito tempo.</Text>

        <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Pode</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Praticar esportes.</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Convidar amigos e vizinhos.</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Respeitar as regras de uso.</Text>
        <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Manter a quadra limpa e organizada.</Text>
        <Image source={require('../../assets/iconn.png')} style={styles.foto1} />
        </View>
        </List.Accordion>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }} />

        <List.Accordion
          title="Salão de festas" id="3"style={{ marginBottom: 10, padding: 15 }} titleStyle={{ color: '#7F7F7F' }}>
          <View style={{ padding: 10, paddingLeft: 30, marginTop: 30 }}>
          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Não pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Exceder a capacidade máxima.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Danificar as instalações.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Fumar dentro do salão.</Text>
          <Text style={{ marginBottom: 20, fontFamily: 'Poppins', color: '#7F7F7F' }}>Ocupar o espaço sem reserva.</Text>

          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Reservar para eventos.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Decorar para ocasiões especiais.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Limpar após o uso.</Text>
          <Image source={require('../../assets/iconn.png')} style={styles.foto1} />
          </View>

        </List.Accordion>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }} />

        <List.Accordion
          title="Academia" id="4"style={{ marginBottom: 10, padding: 15 }} titleStyle={{ color: '#7F7F7F' }}>
          <View style={{ padding: 10, paddingLeft: 30, marginTop: 30 }}>
          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Não pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Desrespeitar as regras de convivência.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Ocupar a academia por muito tempo.</Text>
          <Text style={{ marginBottom: 20, fontFamily: 'Poppins', color: '#7F7F7F' }}>Danificar os equipamentos. </Text>

          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Utilizar equipamentos de forma adequada.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Manter a área limpa e organizada.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Respeitar os horários de funcionamento.</Text>
          <Image source={require('../../assets/iconn.png')} style={styles.foto1} />
          </View>

        </List.Accordion>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }} />

        <List.Accordion
          title="Churrasqueira" id="5"style={{ marginBottom: 10, padding: 15 }} titleStyle={{ color: '#7F7F7F' }}>
          <View style={{ padding: 10, paddingLeft: 30, marginTop: 30 }}>
          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Não pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Não limpar após o uso.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Exceder a capacidade máxima.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Danificar a estrutura.</Text>
          <Text style={{ marginBottom: 20, fontFamily: 'Poppins', color: '#7F7F7F' }}>Abusar do espaço.</Text>

          <Text style={{ marginBottom: 5, fontFamily: 'Poppins', color: '#7F7F7F', fontSize: 16, fontWeight: '700' }}>Pode</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Realizar churrascos.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Reservar o espaço.</Text>
          <Text style={{ fontFamily: 'Poppins', color: '#7F7F7F' }}>Se divertir com familiares e amigos.</Text>
          <Image source={require('../../assets/iconn.png')} style={styles.foto1} />
          </View>

        </List.Accordion>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }} />
      </List.AccordionGroup>
    </View>
  </View>
);
};

// CSS

const styles = StyleSheet.create({

  foto1: {
    width: 64,
    height: 58,
    left: 280,
    bottom: 180,  
  },
  
});


export default Instrucoes;
