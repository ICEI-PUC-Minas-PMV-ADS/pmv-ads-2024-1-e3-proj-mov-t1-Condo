import React, { createContext, useContext, useEffect, useState } from 'react';
import { espaco, titular, dependente, salvarApartamento, cadastrarEspaco } from '../services/auth.services';

// Criar o contexto
const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider value={{ 
      espacosData, 
      titularesData, 
      dependentesData, 
      salvarApartamentosData,
      cadastrarEspacosData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => useContext(AuthContext);
