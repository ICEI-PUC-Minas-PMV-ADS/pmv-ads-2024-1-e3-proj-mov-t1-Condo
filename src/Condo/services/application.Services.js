import API from "./api";
import { baseURL } from "./urls";
import axios from "axios";




export const fetchEspacos = async (condominio_id) => {
  try {
    const response = await API.get(`${baseURL}/660/espaco`, {
      params: { condominio_id }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar espaços:', error);
    throw error;
  }
};


//Busca espaço pelo id
export const fetchEspacoById = async (id) => {
  try {
    const response = await API.get(`${baseURL}/660/espaco/${id}`);

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do espaço:', error);
    throw error;
  }
};


//Buscar Titulares(Users) Apenas com condominio_id
export const fetchTitulares = async (condominio_id) => {
  try {
    const response = await API.get(`${baseURL}/660/users`, {
      params: { condominio_id },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar titulares:', error);
    throw error;
  }
};

//Buscar Dependentes
export const dependente = async (condominio_id) => {
  try {
    const response = await API.get(`${baseURL}/660/dependente`, { params: { condominio_id } });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do dependente:", error);
    return [];
  }
};

export const cadastrarDependente = async (param) => {
  try {
    const response = await API.post(`${baseURL}/dependente`, param);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar dependente:", error);
    throw error;
  }
}

export const editarDependente = async (id, param) => {
  try {
    const response = await API.put(`${baseURL}/dependente/${id}`, param);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar dependente:", error);
    throw error;
  }
}

export const excluirDependente = async (id) => {
  try {
    const response = await API.delete(`${baseURL}/dependente/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir dependente:", error);
    throw error;
  }
};


export const cadastrarApartamento = async (param) => {
  try {
    const responseApartamento = await API.post(`${baseURL}/660/blocoapartamento`, param);
    return responseApartamento.data;
  } catch (error) {
    console.error("Erro ao cadastrar apartamento:", error)
  }
}


export const registerTitular = async (param) => {
  try {
    const response = await API.post(`${baseURL}/users`, param);
    return response.data; // Retorna diretamente os dados da resposta
  } catch (error) {
    console.error("Erro ao registrar titular:", error);
    throw error; // Lança o erro para ser capturado na chamada da função
  }
};



export const cadastrarEspaco = async (param) => {
  try {
    const response = await API.post(`${baseURL}/660/espaco`, param);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar espaço:", error)

  }
}

/// Função para pegar a lista de manutenção
export const fetchManutencao = async (condominio_id) => {
  try {
    const response = await API.get(`${baseURL}/660/manutencao`, { params: { condominio_id } });

    // Verifica se os dados foram obtidos corretamente
    if (!response.data) {
      throw new Error('A resposta da API não contém dados.');
    }
    const manutencoes = response.data;
    // Se a lista de manutenção está vazia, retorna um array vazio
    if (!Array.isArray(manutencoes) || manutencoes.length === 0) {
      console.warn('Nenhum dado de manutenção encontrado.');
      return [];
    }

    const itemManutencao = await Promise.all(manutencoes.map(async (manutencao) => {
      try {
        const espacoResponse = await API.get(`${baseURL}/660/espaco/${manutencao.espaco_id}`);
        const espacoData = espacoResponse.data;
        // Combinar os dados de manutencao com os dados de espaco
        return {
          ...manutencao,
          espaco: espacoData
        };
      } catch (error) {
        // Retorna o objeto de manutencao original se houver um erro
        console.error(`Erro ao buscar detalhes do espaço com espaco_id: ${manutencao.espaco_id}`, error);
        return manutencao;
      }
    }));
    return itemManutencao;
  } catch (error) {
    console.error('Erro ao buscar lista de manutenção:', error);
    return []; // Retorna um array vazio em caso de erro
  }
}

/// Função para editar manutenção
export const updateManutencao = async (param) => {
  try {
    const response = await API.put(`${baseURL}/660/manutencao/${param.id}`, param);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar manutencao:", error)
  }
}

export const postReservas = async (param) => {
  try {
    const response = await API.post(`${baseURL}/660/reservas`, param);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar reserva:", error)
  }
}



export const fetchReservas = async (titular_id) => {
  try {
    const response = await API.get(`${baseURL}/660/reservas`, {
      params: { titular_id }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar espaços:', error);
    throw error;
  }
};

/// Função para inserir nova manutenção
export const insertManutencao = async (param) => {
  try {
    const response = await API.post(`${baseURL}/manutencao`, param);

    return response.data;
  } catch (error) {
    console.error('Erro ao inserir manutencao:', error);

  };
};

export const excluirReserva = async (id) => {
  try {
    const response = await API.delete(`${baseURL}/660/reservas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir dependente:", error);
    throw error;
  }
};

/// Função para deletar a manutenção pelo ID
export const deleteManutencao = async (id) => {
  try {
    await API.delete(`${baseURL}/660/manutencao/${id}`);
    return true; // Exclusão funcionou
  } catch (error) {
    console.error('Erro ao deletar manutenção:', error);
    return false; // Erro ao deletar
  }
}