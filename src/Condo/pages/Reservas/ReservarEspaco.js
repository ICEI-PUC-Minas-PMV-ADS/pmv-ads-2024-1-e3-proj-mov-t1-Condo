import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Pressable, Image, ScrollView, RefreshControl, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import jogging from '../../assets/jogging.svg';
import check from '../../assets/check.svg';
import ButtonContinuar from '../../components/ReservasComponents/ButtonContinuar';
import { useUser } from '../../context/UserContext';
import { useCondomino } from '../../context/CondominoContext';
import { fetchTitulares, fetchDependentes, fetchEspacos } from '../../services/application.Services';

const ReservarEspaco = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTitular, setSelectedTitular] = useState([]);
  const [selectedDependente, setSelectedDependente] = useState(null);
  const [espacos, setEspacos] = useState([]); // Alterado para armazenar os espaços carregados
  const [titulares, setTitulares] = useState([]);
  const [selectedEspaco, setSelectedEspaco] = useState(null); // Alterado para armazenar o espaço selecionado

  const { user } = useUser();
  const { userCondomino } = useCondomino(); // Aqui corrigimos a desestruturação

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (userCondomino && userCondomino.condominio_id) {
        try {
          console.log('Buscando dados para condominio_id:', userCondomino.condominio_id);
          const espacos = await fetchEspacos(userCondomino.condominio_id);
          const titulares = await fetchTitulares(userCondomino.condominio_id);
          console.log('Espaços recebidos:', espacos);
          console.log('Titulares recebidos:', titulares);
          setEspacos(espacos);
          setTitulares(titulares);
        } catch (error) {
          console.error('Erro ao buscar dados dos espaços:', error);
          Alert.alert('Erro', 'Erro ao buscar dados dos espaços!');
        }
      } else {
        console.log('Usuário ou condominio_id não disponível', userCondomino);
      }
    };
    fetchUserData();
  }, [userCondomino]);

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
  };

  const renderPickerItem = (label, value) => (
    <Pressable style={styles.pickerItem} onPress={() => handleSelect(value)} key={value}>
      <Text>{label}</Text>
      {selectedLanguages.includes(value) && <Image source={check} style={{ width: 15, height: 15 }} />}
    </Pressable>
  );

  const handleSelect = value => {
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter(item => item !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.containerReservarEspaco}>
        <Text style={styles.title}>Confirme os dados da reserva</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Para quem é a reserva?</Text>

          {/*<RNPickerSelect
            style={styles.select}
            value={selectedTitular || selectedDependente}
            onValueChange={(value) => {
              if (value === 'first') {
                setSelectedTitular('');
                setSelectedDependente(value);
              } else {
                setSelectedTitular(value);
                setSelectedDependente('');
              }
            }}
            items={(selectedTitular || []).concat(selectedDependente || []).map(item => ({
              label: item.nomeTitular || item.nomeDependente,
              value: item.id,
              key: item.id.toString(),
            }))}
          />*/}

          <RNPickerSelect
              style={styles.select}
              value={selectedTitular}
              onValueChange={(value) => setSelectedTitular(value)}
              items={titulares.map(titular => ({
                label: titular.nomeTitular,
                value: titular.id,
                key: titular.id.toString(),
              }))}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>Acompanhantes?</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#26B3E0' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          {isEnabled && selectedTitular && selectedDependente && (
            <View style={[styles.select, { height: 200 }]}>
              {selectedTitular && selectedDependente.length > 0 && (
                <View>
                  {selectedDependente
                    .filter(dependente => dependente.condomino_Titular_Id === selectedTitular)
                    .map(dependente => renderPickerItem(dependente.nomeDependente, dependente.id))}
                </View>
              )}

              {selectedDependente && selectedTitular.length > 0 && (
                <View>
                  {selectedTitular
                    .filter(titular => titular.id !== selectedDependente.condomino_Titular_Id)
                    .map(titular => renderPickerItem(titular.nomeTitular, titular.id))}
                </View>
              )}
            </View>
          )}

          <View style={styles.bottomContent}>
            <Text style={styles.label}>Selecione o espaço</Text>
            <RNPickerSelect
              style={styles.select}
              value={selectedEspaco}
              onValueChange={(value) => setSelectedEspaco(value)}
              items={espacos.map(espaco => ({
                label: espaco.nomeEspaco,
                value: espaco.id,
                key: espaco.id.toString(),
              }))}
            />
          </View>

          <View style={styles.containerImage}>
            <Image source={jogging} style={styles.image} />
          </View>
          <Pressable onPress={() => navigation.navigate('ReservarEspacoTwo', { espacoId: selectedEspaco, titularId: selectedTitular })} icon={'chevrondoubleright'}>
          <Text style={styles.continueButton}>Continue</Text>
        </Pressable>
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

export default ReservarEspaco;
