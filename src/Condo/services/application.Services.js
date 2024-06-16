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
        const responseApartamento = await API.post(`${baseURL}/blocoapartamento`, param);
        return responseApartamento.data;
    }catch (error) {
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
    }catch (error) {
        console.error("Erro ao cadastrar espaço:", error)
     
    }
}

export const postReservas = async (param) => {
  try {
    const response = await API.post(`${baseURL}/660/reservas`, param);
    return response.data;
  }catch (error) {
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


export const excluirReserva = async (id) => {
  try {
    const response = await API.delete(`${baseURL}/660/reservas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir dependente:", error);
    throw error;
  }
};

