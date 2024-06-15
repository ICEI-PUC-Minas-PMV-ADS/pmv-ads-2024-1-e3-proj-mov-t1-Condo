import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Pressable, Image, ScrollView, RefreshControl, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ReservasComponents/ButtonContinuar';
import { useUser } from '../../context/UserContext';
import { useCondomino } from '../../context/CondominoContext';


const MinhasReservas = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };


  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.containerReservarEspaco}>
       <Text>Minhas Reservas</Text>
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerReservarEspaco: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 12,
    height: '100%',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginRight: 15,
  },
  select: {
    height: 40,
    width: 238,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomContent: {
    marginTop: 20,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 143,
    height: 113,
    resizeMode: 'contain',
  },
});

export default MinhasReservas;
