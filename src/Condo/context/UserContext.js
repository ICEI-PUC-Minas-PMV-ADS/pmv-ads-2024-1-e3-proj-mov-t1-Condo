import React, { createContext, useContext, useEffect, useState } from 'react';
import { espaco, fetchTitulares, fetchDependentes, salvarApartamento, cadastrarEspaco } from '../services/application.Services';

// Criar o contexto
export const UserContext = createContext();

// Provedor do contexto
export default function UserProvider({ children }) {
  const [user, setUser] = useState({ 
    condominio_id: null, // Definir condominio_id como null por padrão
  });
  
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [espacosData, setEspacosData] = useState([]);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);
  const [salvarApartamentosData, setSalvarApartamentosData] = useState([]);
  const [cadastrarEspacosData, setCadastrarEspacoData] = useState([]);

  useEffect(() => {
    console.log('UserProvider useEffect: user', user);

    const fetchData = async () => {
      if (!user || !user.id) {
        console.error('ID do condomínio não está definido no objeto do usuário');
        return;
      }

      try {
        const espacos = await espaco();
        const titulares = await fetchTitulares(user.condominio_id);
        const dependentes = await fetchDependentes(user.condominio_id);
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
  }, [user]);
  
  return (
    <UserContext.Provider 
      value={{ 
        user,
        setUser,
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
}

// Hook para consumir o contexto
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  const { user, setUser, signed, setSigned, name, setName, 
      espacosData, dependentesData, titularesData,
      salvarApartamentosData,
      cadastrarEspacosData } = context;
  return { user, setUser, signed, setSigned, name, setName, espacosData, 
      titularesData, 
      dependentesData, 
      salvarApartamentosData,
      cadastrarEspacosData };
}
