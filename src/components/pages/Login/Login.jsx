import React, { useState } from 'react';
import './style.css';
import Logo from '../../../assets/logo.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      });
      console.log('Login bem sucedido!', response.data);

      const token = localStorage.setItem('token', response.data.token);

      navigate('/dashboard')
    } catch (error) {
      console.log('Falha no login', error);
    }
  };

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form" onSubmit={handleLogin}>
          <span className="login-form-title">Logar</span>
          <span className="login-form-title">
            <img src={Logo} alt="Logo grão direto" />
          </span>

          <div className="wrap-input">
            <input
              className="input"
              type="email"
              placeholder="Insira o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="focus-input"></label>
          </div>

          <div className="wrap-input">
            <input
              className="input"
              type="password"
              placeholder="Insira a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="focus-input"></label>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="have-not-account">
            <span className="span-account">Não possui conta?</span>
            <Link to="/register" className="register-account">Criar conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
