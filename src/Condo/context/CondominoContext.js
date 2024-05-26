import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchTitulares, fetchDependentes } from '../services/application.Services';

export const CondominoContext = createContext();

export default function CondominoProvider({ children }) {
  const [condomino, setCondomino] = useState({
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
      if (!condomino) {
        console.error('Condomino não está definido');
        return;
      }

      try {
        const titulares = await fetchTitulares(condomino.condominio_id);
        const dependentes = await fetchDependentes(condomino.condominio_id);

        setTitularesData(titulares);
        setDependentesData(dependentes);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [condomino]);

  return (
    <CondominoContext.Provider
      value={{
        condomino,
        setCondomino,
        signedCondomino,
        setSignedCondomino,
        titularesData,
        dependentesData,
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

  const { condomino, setCondomino, signedCondomino, setSignedCondomino, dependentesData, titularesData } = context;
  return { condomino, setCondomino, signedCondomino, setSignedCondomino, titularesData, dependentesData };
}
