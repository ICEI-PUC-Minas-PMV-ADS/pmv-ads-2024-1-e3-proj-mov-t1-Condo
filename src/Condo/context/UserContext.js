import React, { createContext, useContext, useEffect, useState } from 'react';
import { espaco, titular, dependente, salvarApartamento, cadastrarEspaco } from '../services/application.Services';

// Criar o contexto
export const UserContext = createContext();

// Provedor do contexto
export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [espacosData, setEspacosData] = useState([]);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);
  const [salvarApartamentosData, setSalvarApartamentosData] = useState([]);
  const [cadastrarEspacosData, setCadastrarEspacoData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const espacos = await espaco();
        const titulares = await titular();
        const dependentes = await dependente();
        const salvarApartamentos = await salvarApartamento();
        const cadastrarEspacos = await cadastrarEspaco();

        setEspacosData(espacos);
        setTitularesData(titulares);
        setDependentesData(dependentes);
        setSalvarApartamentosData(salvarApartamentos);
        setCadastrarEspacoData(cadastrarEspacos);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider 
    value={{ 
      signed,
      setSigned,
      name,
      setName,
      espacosData, 
      titularesData, 
      dependentesData, 
      salvarApartamentosData,
      cadastrarEspacosData
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir o contexto
export function useUser() {
  const context = useContext(UserContext);

  const {signed, setSigned, name, setName, 
        espacosData, dependentesData, titularesData,
        salvarApartamentosData,
        cadastrarEspacosData } = context;
  return {signed, setSigned, name, setName, espacosData, 
    titularesData, 
    dependentesData, 
    salvarApartamentosData,
    cadastrarEspacosData};
}
