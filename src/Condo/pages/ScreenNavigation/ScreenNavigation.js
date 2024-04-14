import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Divider, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';


const NavigationToDo = () => {

    return (
     <View style={{ flex: 1, justifyContent: 'initial' }}>


 <Text style={{ textAlign: 'center' }}>--------------- Login e Cadastro ---------------</Text>      
<CustomButton title="Login - Condômino 01" screen="LoginMorador" />

<CustomButton title="Login - Condômino 02" screen="LoginMorador" />

<CustomButton title="Login - Condomínio" screen="LoginCondominio" />

<CustomButton  title="Cadastro - Condomínio" screen=""/>

<Text style={{ textAlign: 'center' }}>--------------- Home ---------------</Text>

<CustomButton title="Home - Condômino" screen="Home" />

<CustomButton title="Home - Condomínio" screen="" />

<Text style={{ textAlign: 'center' }}>--------------- Dados Cadastrais ---------------</Text>
<CustomButton  title="Dados Cadastrais - Condômino" screen=""/>
<CustomButton  title="Dados Cadastrais - Condomínio" screen=""/>

<Text style={{ textAlign: 'center' }}>--------------- Reservas ---------------</Text>
<CustomButton title="Reservas" screen="Reservas" />
<CustomButton title="Reservar Espaço" screen="" />
<CustomButton title="Minhas Reservas" screen="" />

<Text style={{ textAlign: 'center' }}>--------------- Dependentes ---------------</Text>

<CustomButton title="Dependentes" screen="Dependentes" />

<Text style={{ textAlign: 'center' }}>--------------- Espaços e Apartamentos ---------------</Text>

<CustomButton title="Cadastrar Espaço" screen="CadastroEspacos" />
<CustomButton title="Cadastrar Apartamento" screen="CadastroApto" />
<CustomButton title="Meus Espaços" screen="MeusEspacos" />
<CustomButton title="Apartamentos Cadastrados" screen="ApartamentosCadastrados" />

<Text style={{ textAlign: 'center' }}>--------------- Manutenção ---------------</Text>

<CustomButton title="Manutenção" screen="Manutencao" />

<Text style={{ textAlign: 'center' }}>--------------- Instruções ---------------</Text>

<CustomButton title="Instrucoes" screen="Instrucoes" />
        </View>
    );

}

export default NavigationToDo;
