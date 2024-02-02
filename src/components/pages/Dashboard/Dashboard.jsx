import React from 'react';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import Card from '../../Card/Card.jsx';
import Index from '../../RestaurantForm/Index/Index.jsx';

const Dashboard = () => {

  return (
    <div className='bg-[#c29009] min-h-screen overflow-x-hidden'>
      <Header />
      <Card /> 
      <Index />
      <Footer />
    </div>
  );
};

export default Dashboard;
