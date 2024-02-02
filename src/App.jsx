import React from 'react';
import './App.css';
import { AuthProvider } from './Context/AuthContext.jsx';
import { RestaurantProvider } from './Context/RestaurantContext.jsx';
import AppRoutes from './Routes/AppRoutes.jsx';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <AuthProvider>
        <RestaurantProvider>
          <AppRoutes />
        </RestaurantProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
