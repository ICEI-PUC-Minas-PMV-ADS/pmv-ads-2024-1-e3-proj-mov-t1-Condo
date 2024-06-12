import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchEspacos, fetchTitulares, fetchDependentes, salvarApartamento, cadastrarEspaco } from '../services/application.Services';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ 
    condominio_id: null,
  });
  
  const [signed, setSigned] = useState(false);
  const [signedCondomino, setSignedCondomino] = useState(false);
  const [name, setName] = useState('');
  const [espacosData, setEspacosData] = useState([]);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);
  const [salvarApartamentosData, setSalvarApartamentosData] = useState([]);
  const [cadastrarEspacosData, setCadastrarEspacoData] = useState([]);

  // Função para definir o condominio_id após o usuário fazer login
  const setCondominioId = (id) => {
    setUser(prevUser => ({ ...prevUser, condominio_id: id }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !user.condominio_id) {
        return;
      }

      try {
        console.log('Fetching data for condominio_id:', user.condominio_id);
        const espacos = await fetchEspacos(user.condominio_id);
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
        signedCondomino,
        setSignedCondomino,
        name,
        setName,
        espacosData, 
        titularesData, 
        dependentesData, 
        salvarApartamentosData,
        cadastrarEspacosData,
        setCondominioId // Passando a função para o contexto
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  return context;
}
