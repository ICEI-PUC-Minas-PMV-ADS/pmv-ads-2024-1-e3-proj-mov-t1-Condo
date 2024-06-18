import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import CardManutencao from '../../components/CardManutencao';
import { ActivityIndicator } from 'react-native-paper';
import EditarManutencao from './EditarManutencao';
import DeletarManutencao from './DeletarManutencao';
import { fetchManutencao, deleteManutencao } from '../../services/application.Services';
import { useUser } from '../../context/UserContext';


const Manutencao = () => {

    const [manutencaoList, setManutencaoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            if (user && user.id) {
                setLoading(true);
                try {
                    const data = await fetchManutencao(user.id);
                    setManutencaoList(data);
                } catch (error) {
                    console.error('Erro ao buscar dados da manutenção:', error);
                    Alert.alert('Erro', 'Erro ao buscar dados de manutenção!');
                } finally {
                    setLoading(false);
                }
            } else {
                console.log('Condomínio ou id não disponível', user);
            }
        };
        fetchData();

    }, [user]);

    const handleDelete = async (id) => {
        setLoading(true);
        const success = await deleteManutencao(id);
        if (success) {
            setManutencaoList(manutencaoList.filter(item => item.id !== id));
        }
        setLoading(false);
    };

    const [dialogEdit, setDialogEdit] = React.useState(false);
    const [dialogDelete, setDialogDelete] = React.useState(false);
    const [title, setTitle] = useState('');

    const showDialogEdit = () => setDialogEdit(true);
    const hideDialogEdit = () => setDialogEdit(false);
    const showDialogDelete = () => setDialogDelete(true);
    const hideDialogDelete = () => setDialogDelete(false);
    const changeTitle = (edit) => setTitle(edit);
    const [selectedId, setSelectedId] = useState(null);

    const renderManutencao = ({ item }) => (
        <CardManutencao
            titulo={item.espaco.nomeEspaco}
            onPressEdit={() => { showDialogEdit(); changeTitle(item.espaco.nomeEspaco); }}
            onPressDelete={() => { setSelectedId(item.id); changeTitle(item.espaco.nomeEspaco); showDialogDelete(); }}
        />
    );
    if (loading) {
        return (
            <View style={styles.centeredView}>
                <ActivityIndicator animating={true} size="large" color="#c4e5ed" />
                <Text>Carregando...</Text>
            </View>
        );
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={styles.view}>
                {manutencaoList.length === 0 ? (
                    <View style={styles.centeredView}>
                        <Text style={styles.emptyMessage}>Nenhuma manutenção encontrada.</Text>
                    </View>
                ) : (
                    <FlatList
                        data={manutencaoList}
                        renderItem={renderManutencao}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/LogoCondo2.png')}
                    style={styles.image}
                />
            </View>

            <EditarManutencao visible={dialogEdit} hideDialog={hideDialogEdit} title={title} />
            <DeletarManutencao visible={dialogDelete}
                hideDialog={hideDialogDelete}
                title={title}
                id={selectedId}
                onDelete={handleDelete} />
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
    emptyMessage: {
        fontSize: 18,
        color: '#888',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Manutencao;
