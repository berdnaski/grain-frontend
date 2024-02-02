import React from 'react'

const SearchBar = ({ onSearch, searchTerm }) => {
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        onSearch(searchTerm);
    };

    return (
        <input
            type="text"
            onChange={handleSearch}
            value={searchTerm}
            placeholder="Busque por um restaurante ou produto"
            className="flex-shrink-0 md:block border rounded-lg pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
    );
};

export default SearchBar;