import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownEspacos = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Quadra Esportiva', value: '1' },
    { label: 'Piscina', value: '2' },
    { label: 'Salão de festas', value: '3' },
    { label: 'Academia', value: '4' },
    { label: 'Churrasqueira', value: '5' },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder="Selecione o espaço"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  dropdown: {
    backgroundColor: '#c4e5ed',
    borderRadius: 8,
  },
});

export default DropdownEspacos;