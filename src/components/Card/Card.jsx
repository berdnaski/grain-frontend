import React from 'react';
import comida from "../../assets/card/comida.png";
import pastel from "../../assets/card/pastel.png";
import açai from "../../assets/card/açai.png";

const Card = ({}) => {
  return (
    <div className='container w-screen max-w-8xl mx-auto px-4 p-4 lg:px-8'>
      <div className='grid grid-cols-3 md:w-[50%] gap-4 mx-auto'>
        <div className='flex flex-col items-center border border-gray-200  bg-gray-300 rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105'>
          <img src={açai} className='w-[6rem]' alt="açai" />
          <button className="text-sm">Açai</button>
        </div>
        <div className='flex flex-col items-center border border-gray-200  bg-gray-300 rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105'>
          <img src={comida} className='w-[6rem]' alt="comidas" />
          <button className="text-sm">Comidas Brasileiras</button>
        </div>
        <div className='flex flex-col items-center border border-gray-200  bg-gray-300 rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105'>
          <img src={pastel} className='w-[6rem]' alt="pastel" />
          <button className="text-sm">Pastéis</button>
        </div>
      </div>
    </div>
  );
}

export default Card;