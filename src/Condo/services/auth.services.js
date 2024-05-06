import api from "./api";
import { BASE_URL } from "./urls";

export const espaco = async (param) => {
    try {
        const response = await api.get(`${BASE_URL}/espaco`, { params: param }); // Usar 'params' para enviar parâmetros na solicitação GET
        return response.data; // Retornar os dados da resposta
    } catch (error) {
        console.error("Erro ao buscar dados do espaço:", error);
        return null; // Retornar null em caso de erro
    }
}

export const titular = async (param) => {
    try {
        const response = await api.get(`${BASE_URL}/titular`, { params: param });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do titular:", error)
        return null;
    }
}

export const dependente = async (param) => {
    try {
        const response = await api.get(`${BASE_URL}/dependente`, { params: param });
        return response.data;
    }catch (error) {
        console.error("Erro ao buscar dados do dependente:", error)
        return null;
    }
}