import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import Register from '../components/pages/Register/Register';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute.jsx';

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;