import { createContext, useEffect, useState } from "react";
import api from "../services/AuthServices.js";

export const RestaurantContext = createContext({});

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const token = localStorage.getItem('token');

    async function fetchRestaurants() {
        try {
            const response = await api.get('/restaurants', {
                params: { search: searchTerm },
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
            setRestaurants(response.data);
        } catch (error) {
            console.error('Erro ao buscar restaurantes:', error);
        }
    }

    useEffect(() => {
        fetchRestaurants();
    }, [searchTerm]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <RestaurantContext.Provider value={{ handleSearch, restaurants, searchTerm, fetchRestaurants }}>
            {children}
        </RestaurantContext.Provider>
    )
}
