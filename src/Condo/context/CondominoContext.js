import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchTitulares, fetchDependentes, fetchEspacos } from '../services/application.Services';
// Adicionando importação da função fetchEspacos

export const CondominoContext = createContext();

export default function CondominoProvider({ children }) {
  const [userCondomino, setUserCondomino] = useState({
    condominio_id: null,
    cnpj: null,
  });
  const [signedCondomino, setSignedCondomino] = useState(false);
  const [name, setName] = useState('');
  const [espacosData, setEspacosData] = useState([]);
  const [titularesData, setTitularesData] = useState([]);
  const [dependentesData, setDependentesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userCondomino) {
        console.error('Usuario Condomino não está definido');
        return;
      }

      try {
        const titulares = await fetchTitulares(userCondomino.condominio_id);
        const dependentes = await fetchDependentes(userCondomino.condominio_id);
        const espacos = await fetchEspacos(userCondomino.condominio_id); // Chamada para buscar os espaços

        setTitularesData(titulares);
        setDependentesData(dependentes);
        setEspacosData(espacos); // Atualiza os espaços com os dados retornados pela chamada da API
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [userCondomino]);

  return (
    <CondominoContext.Provider
      value={{
        userCondomino,
        setUserCondomino,
        signedCondomino,
        setSignedCondomino,
        titularesData,
        dependentesData,
        espacosData, // Incluindo os dados dos espaços no contexto
      }}
    >
      {children}
    </CondominoContext.Provider>
  );
}

export function useCondomino() {
  const context = useContext(CondominoContext);

  if (!context) {
    throw new Error('useCondomino deve ser usado dentro de um CondominoProvider');
  }
return context;
 
}
