import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { TouchableRipple, IconButton, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardEspacos = (props) => (
  <TouchableHighlight onPress={props.onPress} underlayColor="#d9e8f4">
    <View style={styles.card}>
      <Text style={styles.title}>{props.titulo}</Text>
      <Icon name="arrow-forward-ios" size={24} color="#465156" />
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c4e5ed',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CardEspacos;
