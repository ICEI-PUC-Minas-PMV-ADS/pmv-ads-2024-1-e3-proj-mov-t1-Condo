import api from "./api";
import { baseURL } from "./urls";
import axios from "axios";

export const espaco = async (param) => {
    try {
        const response = await api.get(`${baseURL}/espaco`, { params: param });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do espaço:", error);
    }
}

export const titular = async (param) => {
    try {
        const response = await api.get(`${baseURL}/titular`, { params: param });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do titular:", error);
    }
}

export const dependente = async (param) => {
    try {
        const response = await api.get(`${baseURL}/dependente`, { params: param });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do dependente:", error);
    }
}

export const salvarApartamento = async (param) => {
    try {
        const response = await api.post(`${baseURL}/apartamento`, param);
        return response.data;
    } catch (error) {
        console.error("Erro ao salvar apartamento:", error);
        throw error;
    }
}

export const cadastrarEspaco = async (param) => {
    try {
        const response = await api.post(`${baseURL}/espaco`, param);
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar espaço:", error);
        throw error;
    }
}

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
        const response = await api.delete(`${baseURL}/dependente/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao excluir dependente:", error);
        throw error;
    }
}
