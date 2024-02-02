import React from 'react';
import { Link } from 'react-router-dom';
import { TimeOutline } from 'react-ionicons';
import { motion } from 'framer-motion';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className='flex flex-col items-center justify-center lg:flex-row m-4 mt-8'>
      <motion.div 
        className='w-full flex flex-col max-w-md overflow-hidden rounded-lg shadow-xl'
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="bg-red-500 h-32 flex items-center justify-center">
          <div className='w-20 h-20'>
            <img className='object-cover border rounded-full w-full h-full' src={restaurant.avatar} alt="" />
          </div>
        </div>

        <div className="bg-white p-8">
          <div className='flex flex-col justify-center mx-auto'>
            <div className='flex justify-center'>
              <h2 className="text-xl font-semibold text-gray-800 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{restaurant.name}</h2>
            </div>
          </div>

          <div className='flex gap-1 justify-center'>
            <TimeOutline color={'#bb0606'} height="20px" width="20px" />
            <span>{restaurant.opening_hours}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default RestaurantCard;
