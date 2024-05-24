import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, IconButton, Provider } from 'react-native-paper';

const PopMenuEspacos = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="cog"
            size={24}
            onPress={openMenu}
          />
        }
      >
        <Menu.Item onPress={() => { }} title="Item 1" />
        <Menu.Item onPress={() => { }} title="Item 2" />
        <Menu.Item onPress={() => { }} title="Item 3" />
      </Menu>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PopMenuEspacos;
