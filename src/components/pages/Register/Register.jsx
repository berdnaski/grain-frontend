import React, { useState } from 'react';
import './style.css'
import Logo from '../../../assets/logo.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName ] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.api.post('http://127.0.0.1:8000/api/register', {
        email: email,
        password: password,
        name: name,
      });
      console.log('Registro bem sucedido!', response.data);
    } catch (error) {
      console.log('Falha no registro', error);
    }
  };

  return (
    <div className="container-register">
      <div className="wrap-register">
        <form className="register-form" onSubmit={handleRegister}>
          <span className="register-form-title">Logar</span>
          <span className="register-form-title">
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

          <div className="wrap-input">
            <input
              className="input"
              type="text"
              placeholder="Insira o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="focus-input"></label>
          </div>

          <div className="container-register-form-btn">
            <button className="register-form-btn">Register</button>
          </div>

          <div className="have-not-account">
            <span className="span-login-account">Já possui uma conta?</span>
            <Link to="/login" className='login-account'>Entrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;