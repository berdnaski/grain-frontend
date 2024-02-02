import React, { useState } from 'react';
import { PersonOutline } from 'react-ionicons';
import api from '../../services/AuthServices.js';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const handleDevelopment = () => {
    toast.info('Em desenvolvimento');
  }

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = async () => {
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
            toast.success('Você deslogou da sua conta!');
        } catch (error) {
            console.error('Falha no logout', error);
        }
    }

  return (
    <div className="md:flex hidden md:gap-4 md:block relative">
        <button id="button-menu" onClick={toggleSidebar} type="button" className="flex items-center justify-center" aria-label="Menu" aria-expanded={sidebarOpen ? "true" : "false"}>
            <PersonOutline />
        </button>
        {sidebarOpen && (
            <div className="absolute transition-all duration-150 ease right-0 transform translate-x-1/3 top-12 bg-white p-2 rounded-lg">
                <ul className="py-2 flex flex-col items-center">
                    <li className="p-2 px-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                    <Link to="/dashboard">Início</Link>
                    </li>
                    <li className="p-2 px-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                        <Link to="/restaurants/create">Adicionar Restaurante</Link>
                    </li>
                    <li className="p-2 px-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                        <button onClick={handleDevelopment}>Seu Perfil</button>
                    </li>
                    <li className="p-2 px-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                        <button onClick={handleDevelopment}>Seus Pedidos</button>
                    </li>
                    <li onClick={handleLogout} className="p-2 px-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                        <button type='submit'>Logout</button>
                    </li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Sidebar;
