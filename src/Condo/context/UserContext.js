import React, { createContext, useContext, useEffect, useState } from 'react';
import { espaco, titular, dependente, apartamento } from '../services/auth.services';

// Criar o contexto
const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [espacosData, setEspacosData] = useState([]);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);
  const [apartamentoData, setApartamentoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const espacos = await espaco();
        const titulares = await titular();
        const dependentes = await dependente();
        const apartamentos = await apartamento();


        setEspacosData(espacos);
        setTitularesData(titulares);
        setDependentesData(dependentes);
        setApartamentoData(apartamentos);
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
      apartamentoData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => useContext(AuthContext);
