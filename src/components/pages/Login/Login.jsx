import React, { useContext, useState } from 'react';
import Logo from '../../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext.jsx';
import { RestaurantContext } from '../../../Context/RestaurantContext.jsx';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { fetchRestaurants } = useContext(RestaurantContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
        fetchRestaurants();
        navigate('/dashboard');
    } catch (error) {
      console.log('Email ou senha incorretos');
    }
  };

  return (
    <div className="bg-[#adadad] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8 max-w-md md:w-full w-[95%]">
        <div className="text-center">
          <img src={Logo} alt="grão direto logo" className="w-32 mx-auto" />
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-300 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-300 focus:ring-opacity-50" required />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Login</button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">Don't have an account? <Link to="/register" className="text-yellow-500 font-semibold">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
