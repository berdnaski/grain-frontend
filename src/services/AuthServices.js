import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', {
      email,
      password
    });
    console.log('Login bem sucedido!', response.data);

    const token = localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.log('Falha no login', error);
    throw new Error('Falha no login');
  }
};

export const register = async (email, password, name) => {
  try {
    const response = await api.post('/register', {
      email: email,
      password: password,
      name: name,
    });
    toast.success('Conta cadastrada com sucesso');
  } catch (error) {
    toast.error("Dados inseridos incorretamente");
    useNavigate('/register');
    
  }
}

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');

    await api.post('/logout',{}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    localStorage.removeItem('token');
    navigate('/login');
    toast.success('Você deslogou da sua conta');
  } catch (error) {
    console.error('Falha no logout', error);
  }
}

export default api;
