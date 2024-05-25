import React from 'react';
import { View, StyleSheet, Image } from 'react-native';;
import CardManutencao from '../../components/CardManutencao';
import EditarManutencao from './EditarManutencao'
import DeletarManutencao from './DeletarManutencao'

const Manutencao = () => {

    const [dialogEdit, setDialogEdit] = React.useState(false);
    const [dialogDelete, setDialogDelete] = React.useState(false);
    const [title, setTitle] = React.useState('Quadra Esportiva');

    const showDialogEdit = () => setDialogEdit(true);
    const hideDialogEdit = () => setDialogEdit(false);
    const showDialogDelete = () => setDialogDelete(true);
    const hideDialogDelete = () => setDialogDelete(false);
    const changeTitle = (edit) => setTitle(edit);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={styles.view}>
                <CardManutencao titulo="Quadra Esportiva" onPressEdit={() => { showDialogEdit(), changeTitle('Quadra Esportiva') }} onPressDelete={() => { showDialogDelete(), changeTitle('Quadra Esportiva') }} />
                <CardManutencao titulo="Piscina" onPressEdit={() => { showDialogEdit(), changeTitle('Piscina') }} onPressDelete={() => { showDialogDelete(), changeTitle('Piscina') }} />
                <CardManutencao titulo="Salão de Festas" onPressEdit={() => { showDialogEdit(), changeTitle('Salão de Festas') }} onPressDelete={() => { showDialogDelete(), changeTitle('Salão de Festas') }} />
                <CardManutencao titulo="Academia" onPressEdit={() => { showDialogEdit(), changeTitle('Academia') }} onPressDelete={() => { showDialogDelete(), changeTitle('Academia') }} />
                <CardManutencao titulo="Churrasqueira" onPressEdit={() => { showDialogEdit(), changeTitle('Churrasqueira') }} onPressDelete={() => { showDialogDelete(), changeTitle('Churrasqueira') }} />
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/LogoCondo2.png')}
                    style={styles.image}
                />
            </View>

            <EditarManutencao visible={dialogEdit} hideDialog={hideDialogEdit} title={title} />
            <DeletarManutencao visible={dialogDelete} hideDialog={hideDialogDelete} title={title} />
        </View>)
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

export default Manutencao;
