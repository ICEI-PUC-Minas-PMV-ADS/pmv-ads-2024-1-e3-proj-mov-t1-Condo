import API from "./api";
import {baseURL} from './urls';

// Função para registrar um novo usuário (condomínio ou titular)
export const register = async (param) => {
  try{
    // Realiza uma requisição POST para a rota de registro com os parâmetros fornecidos
    return await API.post(`${baseURL}/register`, param).then( 
      response => {
        return response.data; // Retorna os dados da resposta da requisição
      },
      error =>{
        console.log(error); // Registra qualquer erro ocorrido durante a requisição
        return  null;
      }
    );
  }catch(error){
    console.log(error); // Registra qualquer erro que ocorrer durante a execução da função
    return null;
  }
}

// Função para realizar o login de um usuário (condomínio ou titular)
export const login = async (param) => {
  try{
    // Realiza uma requisição POST para a rota de login com os parâmetros fornecidos
    return await API.post(`${baseURL}/login`, param).then( 
      response => {
        return response.data; // Retorna os dados da resposta da requisição
      },
      error =>{
        console.log(error); // Registra qualquer erro ocorrido durante a requisição
        return  null;
      }
    );
  }catch(error){
    console.log(error); // Registra qualquer erro que ocorrer durante a execução da função
    return null;
  }
}

// Função complemtar para buscar um usuário pelo email (Utilizada em conjunto com updateUserPassword)
export const getUserByEmail = async (email) => {
  try {
    // Realiza uma requisição GET para buscar um usuário pelo email fornecido
    const response = await API.get(`${baseURL}/users?email=${email}`);
    return response.data[0]; // Retorna o primeiro usuário encontrado com o email
  } catch (error) {
    console.error('Erro ao buscar usuário por email:', error); // Registra qualquer erro que ocorrer durante a execução da função
    return null;
  }
}

// Função para atualizar a senha do usuário pelo ID
export const updateUserPassword = async (userId, params) => {
  try {
    // Realiza uma requisição PUT para atualizar a senha do usuário com o ID fornecido
    const response = await API.put(`${baseURL}/users/${userId}`, params);
    return response.data; // Retorna os dados da resposta da requisição
  } catch (error) {
    console.error('Erro ao atualizar senha do usuário:', error); // Registra qualquer erro que ocorrer durante a execução da função
    return null;
  }
}

// Função para buscar um usuário pelo CPF
export const fetchUserByCPF = async (cpf) => {
  try {
    // Realiza uma requisição GET para buscar um usuário pelo CPF fornecido
    const response = await API.get(`${baseURL}/users?cpfTitular=${cpf}`);
    if (response.status !== 200) {
      throw new Error('Erro ao buscar o usuário'); // Lança um erro caso a resposta não seja 200 (OK)
    }
    return response.data; // Retorna os dados da resposta da requisição
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error); // Registra qualquer erro que ocorrer durante a execução da função
    throw error; // Relança o erro para tratamento posterior
  }
}

// Função para atualizar o email e senha do usuário após digitar o CPF
export const updateUserEmailAndPassword = async (cpf, newEmail, newPassword) => {
  try {
    // Realiza uma requisição GET para buscar um usuário pelo CPF fornecido
    const response = await API.get(`${baseURL}/users?cpfTitular=${cpf}`);
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      const updatedUser = { ...user, email: newEmail, password: newPassword };

      // Realiza uma requisição PUT para atualizar o email e senha do usuário com base no ID obtido
      await API.put(`${baseURL}/users/${user.id}`, updatedUser);
    } else {
      throw new Error('Usuário não encontrado'); // Lança um erro caso nenhum usuário seja encontrado com o CPF fornecido
    }
  } catch (error) {
    console.error('Erro ao atualizar o e-mail e senha:', error); // Registra qualquer erro que ocorrer durante a execução da função
    throw error; // Relança o erro para tratamento posterior
  }
};
