import API from "./api";
import { baseURL } from "./urls";
import { axios } from "axios";

export const espaco = async (param) => {
    try {
        const response = await API.get(`${baseURL}/660/espaco`, { params: param }); // Usar 'params' para enviar parâmetros na solicitação GET
        return response.data; // Retornar os dados da resposta
    } catch (error) {
        console.error("Erro ao buscar dados do espaço:", error);

    }
}

//Buscar Titulares
export const fetchTitulares = async (condominio_id) => {
    try {
      const response = await API.get(`${baseURL}/660/titular`, {
        params: { condominio_id },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar titulares:', error);
      throw error;
    }
  };

  export const salvarTitular = async (param) => {
    try {
        const responseTitular = await API.post(`${baseURL}/660/titular`, param);
        return responseTitular.data;
    }catch (error) {
        console.error("Erro ao cadastrar apartamento:", error)
     
    }
}

  

//Buscar Dependentes
export const fetchDependentes = async (condominioId) => {
    try {
      const response = await API.get(`${baseURL}/660/dependente`, { params: { userId: condominioId } });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do dependente:", error);
      return [];
    }
  };

export const cadastrarDependente = async (param) => {
    try {
        const response = await api.post(`${baseURL}/dependente`, param);
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar dependente:", error);
        throw error;
    }
}

export const editarDependente = async (id, param) => {
    try {
        const response = await api.put(`${baseURL}/dependente/${id}`, param);
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
  

export const salvarApartamento = async (param) => {
    try {
        const responseApartamento = await API.post(`${baseURL}/660/blocoapartamento`, param);
        return responseApartamento.data;
    }catch (error) {
        console.error("Erro ao cadastrar apartamento:", error)
     
    }
}

export const cadastrarEspaco = async (param) => {
    try {
        const response = await API.post(`${baseURL}/660/espaco`, param);
        return response.data;
    }catch (error) {
        console.error("Erro ao cadastrar espaço:", error)
     
    }
}

