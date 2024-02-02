import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutline, PersonOutline, ReaderOutline } from 'react-ionicons';
import { toast } from 'react-toastify'

const handleDevelopment = () => {
  toast.info('Em desenvolvimento');
}

const Footer = () => {
  return (
    <footer className="md:hidden fixed bottom-0 w-full bg-yellow-500 text-black text-center">
      <div className='flex justify-center items-center gap-10 py-4'>
        <Link to="/dashboard" className='flex flex-col items-center cursor-pointer rounded-md transition duration-300 hover:bg-yellow-400 hover:text-white'>
          <HomeOutline />
          <span className="">Início</span>
        </Link>
        <button onClick={handleDevelopment} className='flex flex-col items-center cursor-pointer rounded-md transition duration-300 hover:bg-yellow-400 hover:text-white'>
          <ReaderOutline />
          <span className="">Pedidos</span>
        </button>
        <button onClick={handleDevelopment} className='flex flex-col items-center cursor-pointer rounded-md transition duration-300 hover:bg-yellow-400 hover:text-white'>
          <PersonOutline />
          <span className="">Seu Perfil</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
