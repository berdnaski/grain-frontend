import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/AuthServices';
import Footer from '../../Footer/Footer';
import { ArrowBackOutline } from 'react-ionicons';
import { toast } from 'react-toastify';

const handleDevelopment = () => {
    toast.info('Estou em desenvolvimento.');
  }

const Show = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await api.get(`/restaurants/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setRestaurant(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do restaurante:', error);
            }
        };
        fetchRestaurantDetails();
    }, [id, token]);

    return (
        <div className="flex flex-col">
            <div className='ml-2 mt-2 flex items-center hidden md:block'>
                <a href='/dashboard'><ArrowBackOutline color={'#00000'} height="50px" width="50px"/></a>
            </div>
            <div style={{ flex: 1 }}>
                {restaurant && (
                    <div className={`flex flex-col bg-[#c29009] ${restaurant.products.length === 0 ? 'h-screen' : ''}`}>
                        <div className='container flex md:mt-10 bg-red-500 w-full h-[10rem] md:h-[20rem]'>
                            <div className='ml-2 flex items-center md:hidden'>
                                <a href='/dashboard'><ArrowBackOutline color={'#00000'} height="50px" width="50px"/></a>
                            </div>
                        </div>
                        <div className='container mt-6 flex flex-col items-center justify-center gap-4'>
                            <div>
                                <img src={restaurant.avatar} alt={restaurant.name} className='object-cover border rounded-full w-[5rem] h-[5rem]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div>
                                    <h1 className='font-bold text-md'>{restaurant.name}</h1>
                                </div>
                                <div className='flex flex-col md:flex-row md:gap-4 items-center justify-center'>
                                    <div className='flex items-center justify-center'>
                                        <p className='text-red-700 text-sm'>{restaurant.adress}</p>
                                    </div>
                                    <span>-</span>
                                    <div>
                                        <p>{restaurant.phone}</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>{restaurant.description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="container mt-6 mb-[7rem] w-[95%] md:mb-10 mb-6 flex justify-center md:justify-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] h-[50%]">
                        {restaurant?.products.map(product => (
                            <div key={product.id} className="rounded overflow-hidden bg-white pb-4 shadow-lg flex flex-col justify-between">
                                <img className="w-full md:h-64" src={product.avatar} alt={product.name} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md mb-2">{product.name}</div>
                                    <p className="text-gray-700 text-sm text-base">{product.description}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="text-gray-700">Preço:</span>
                                    <span className="text-green-500 ml-2">{product.price}</span>
                                </div>
                                <div className='flex justify-center'>
                                    <button onClick={handleDevelopment} className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded">Adicionar ao carrinho</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Show;
