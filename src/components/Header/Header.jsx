import React, { useContext } from 'react';
import { BagOutline, LocationOutline } from 'react-ionicons';
import Sidebar from '../Sidebar/Sidebar.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { RestaurantContext } from '../../Context/RestaurantContext.jsx';
import { toast } from 'react-toastify';

const handleDevelopment = () => {
  toast.info('Estou em desenvolvimento.');
}

const Header = ({ showSearchBar = true }) => {
  const { handleSearch, searchTerm } = useContext(RestaurantContext);

  return (
    <nav>
      <div className='max-w-8xl mx-auto px-4 p-4 sm:px-6 lg:px-8 bg-yellow-500'>
        <div className='flex flex-col md:flex-row md:justify-between justify-center items-center relative gap-2'>
          {showSearchBar && ( 
            <div className='hidden md:block'>
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
            </div>
          )}
          <div className='-mr-2 flex justify-center items-center gap-4 text-black'>
            <span className='flex justify-center items-center'>Av José Fonseca e Silva 274</span>
            <LocationOutline />
            <Sidebar />
            <button onClick={handleDevelopment} className='hidden md:block'><BagOutline/></button>
          </div>
          <div className='md:hidden'>
            {showSearchBar && ( 
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
