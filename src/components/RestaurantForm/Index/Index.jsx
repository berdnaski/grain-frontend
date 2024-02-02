import React, { useContext } from 'react';
import { RestaurantContext } from '../../../Context/RestaurantContext.jsx';
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';

const Index = () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className='flex w-[95%] mx-auto md:items-center overflow-x-hidden md:grid md:grid-cols-3 justify-center lg:flex-row md:flex-col flex-col'>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Index;
