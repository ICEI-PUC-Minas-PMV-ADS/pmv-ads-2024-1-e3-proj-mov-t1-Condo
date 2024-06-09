import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

const MultiSelectComponent = ({ items, onSelectedItemsChange, selectedItems }) => {
    const handleToggle = (id) => {
        const selectedIndex = selectedItems.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selectedItems, id];
        } else {
            newSelected = selectedItems.filter((item) => item !== id);
        }

        onSelectedItemsChange(newSelected);
    };

    return (
        <View style={styles.container}>
            {items.map((item) => (
                <View key={item.id} style={styles.checkboxContainer}>
                    <Checkbox.Android
                        status={selectedItems.indexOf(item.id) !== -1 ? 'checked' : 'unchecked'}
                        onPress={() => handleToggle(item.id)}
                    />
                    <Text>{item.name}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
});

export default MultiSelectComponent;
