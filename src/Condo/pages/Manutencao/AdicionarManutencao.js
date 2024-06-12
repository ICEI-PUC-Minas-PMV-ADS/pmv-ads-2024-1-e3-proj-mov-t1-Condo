import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DropdownEspacos from '../../components/DropdownEspacos';
import DateInputManutencao from '../../components/DateInputManutencao';

const AdicionarManutencao = () => {
  const [motivo, setMotivo] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.view}>
            <DropdownEspacos />
            <View>
              <Text style={styles.textWithPadding}>{"Período"}</Text>
              <View style={styles.inputsContainer}>
                <DateInputManutencao titulo="Início" />
                <DateInputManutencao titulo="Fim" />
              </View>
            </View>
            <Text style={styles.text}>{"Motivo"}</Text>
            <TextInput
              style={styles.card}
              value={motivo}
              onChangeText={setMotivo}
            />
            <View style={{ alignItems: 'center' }}>
              <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>{"Adicionar a manutenção"}</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/LogoCondo2.png')}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    padding: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#c4e5ed',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  text: {
    fontSize: 17,
    color: '#848382',
    fontWeight: '900',
  },
  textWithPadding: {
    fontSize: 17,
    color: '#848382',
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#06B6DD',
    width: '100%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  imageContainer: {
    width: '50%',
    alignItems: 'flex-end', // use 'flex-end' instead of 'end'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default AdicionarManutencao;
