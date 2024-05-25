import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const CardManutencao = (props) => (
    <View style={styles.card}>
        <Text style={styles.title}>{props.titulo}</Text>
        <View style={styles.icons}>
            <IconButton
                icon="delete"
                size={25}
                onPress={props.onPressDelete}
                style={styles.iconButton}
            />
            <IconButton
                icon="pencil"
                size={25}
                onPress={props.onPressEdit}
                style={styles.iconButton}
            />

        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#c4e5ed',
        padding: 10,
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
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        margin: 0,
    },
});

export default CardManutencao;
