import React, { useState, useEffect, useContext } from 'react';
import api from '../../../services/AuthServices.js';
import { useNavigate } from 'react-router-dom';
import { RestaurantContext } from '../../../Context/RestaurantContext.jsx';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);
    const [formData, setFormData] = useState({
        category_id: '', 
        name: '',
        description: '',
        opening_hours: '',
        status: '',
        avatar: null,
        phone: '',
        adress: ''
    });
    const [categories, setCategories] = useState([]);
    const { fetchRestaurants } = useContext(RestaurantContext);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get(`/categories`, {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                });
                setCategories(response.data.categories);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            setFormData({
                ...formData,
                avatar: e.target.files[0]  
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const formDataWithImage = new FormData();
            formDataWithImage.append('category_id', formData.category_id);
            formDataWithImage.append('name', formData.name);
            formDataWithImage.append('description', formData.description);
            formDataWithImage.append('opening_hours', formData.opening_hours);
            formDataWithImage.append('status', formData.status);
            formDataWithImage.append('avatar', formData.avatar);
            formDataWithImage.append('phone', formData.phone);
            formDataWithImage.append('adress', formData.adress);

            await api.post('/restaurants', formDataWithImage, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            fetchRestaurants();
            navigate('/dashboard');
            toast.success(`O Restaurante ${formData.name} foi criado com sucesso`)
        } catch (error) {
            console.error('Erro ao criar restaurante:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-orange-400 rounded-lg shadow-md w-[95%]">
        <h2 className="text-xl text-purple-600 font-bold mb-4">Adicionar Restaurante</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Categoria</label>
                <select id="category_id" name="category_id" value={formData.category_id} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500">
                    <option value="">Selecione uma opção</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                <input type="file" id="avatar" name="avatar" onChange={handleChange} className="mt-1 p-2 block w-full  rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="opening_hours" className="block text-sm font-medium text-gray-700">Horário de Funcionamento</label>
                <input type="text" id="opening_hours" name="opening_hours" value={formData.opening_hours} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="adress" className="block text-sm font-medium text-gray-700">Endereço</label>
                <input type="text" id="adress" name="adress" value={formData.adress} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500">
                    <option value="Aberto">Aberto</option>
                    <option value="Fechado">Fechado</option>
                </select>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Salvar</button>
            </div>
        </form>
    </div>    
    );
};

export default Create;
