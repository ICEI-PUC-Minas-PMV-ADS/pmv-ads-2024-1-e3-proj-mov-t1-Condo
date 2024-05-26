import API from "./api";
import {baseURL} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${baseURL}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const login = async (param) => {
  try{
    return await API.post(`${baseURL}/login`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

// Função para buscar usuário pelo email
export const getUserByEmail = async (email) => {
  try {
    const response = await API.get(`${baseURL}/users?email=${email}`);
    return response.data[0]; // Retorna o primeiro usuário encontrado com o email
  } catch (error) {
    console.error('Erro ao buscar usuário por email:', error);
    return null;
  }
}

// Função para atualizar a senha do usuário pelo ID
export const updateUserPassword = async (userId, params) => {
  try {
    const response = await API.put(`${baseURL}/users/${userId}`, params);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar senha do usuário:', error);
    return null;
  }
}

export const updateUserEmailAndPassword = async (cpf, newEmail, newPassword) => {
  try {
    const response = await API.get(`${baseURL}/users?cpfTitular=${cpf}`);
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      const updatedUser = { ...user, email: newEmail, password: newPassword };

      await API.put(`${baseURL}/users/${user.id}`, updatedUser);
    } else {
      throw new Error('Usuário não encontrado');
    }
  } catch (error) {
    console.error('Erro ao atualizar o e-mail e senha:', error);
    throw error;
  }
};

export const fetchUserByCPF = async (cpf) => {
  try {
    const response = await API.get(`${baseURL}/users?cpfTitular=${cpf}`);
    if (response.status !== 200) {
      throw new Error('Erro ao buscar o usuário');
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error);
    throw error;
  }
};




export const loginCondomino = async (cnpj) => {
  try {
    return await API.get(`${baseURL}/users?cnpj=${cnpj}`).then(
      response => {
        return response.data;
      },
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}



export const loginTitular = async (cpf) => {
  try {
    const response = await API.get(`${baseURL}/login`);
    console.log('API Response:', response); // Log da resposta da API
    return response.data;
  } catch (error) {
    console.log('Erro na API:', error); // Log do erro da API
    throw error; // Lance o erro para ser capturado no handleLogin
  }
};

