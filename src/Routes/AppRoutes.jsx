import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import Register from '../components/pages/Register/Register';
import Create from '../components/RestaurantForm/Create/Create.jsx';

import { PrivateRoute } from './PrivateRoute.jsx'
import RestaurantForm from '../components/RestaurantForm/RestaurantForm.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/restaurants/:id" element={<PrivateRoute><RestaurantForm /></PrivateRoute>} />
        <Route path="/restaurants/create" element={<PrivateRoute><Create /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;