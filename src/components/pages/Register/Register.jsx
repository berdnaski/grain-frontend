import React, { useState } from 'react';
import Logo from '../../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../services/AuthServices.js';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName ] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, name);
      console.log('criando');
      navigate('/login');
    } catch (error) {
      
    }
  };

  return (
    <div className="bg-[#adadad] w-[100%]">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="~lg:w-full p-6 m-auto bg-[#c29009] rounded-xl shadow-md lg:max-w-xl flex flex-col justify-center w-[95%]">
              <h1 className="text-3xl font-semibold text-center text-black">Registrar</h1>
              <div className='flex justify-center'>
                <img src={Logo} alt="grão direto logo" className='w-[25%]' />
              </div>
              <form onSubmit={handleRegister} className="mt-6">
                  <div className="mb-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
                      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Nome</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>
                  <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Criar conta</button>
                  </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-700">{" "}Você já possui uma conta?{" "}
                <Link to="/login" className='link-account'>Logar</Link>
              </p>
          </div>
      </div>
    </div>
  );
};

export default Register;