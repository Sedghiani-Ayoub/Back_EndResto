import React, { useState } from 'react';

const RecipeSearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    

    return (
        <div className="recipe-search-bar ">
            <input
                type="text"
                placeholder="Search for recipes"
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch} className='bg-warning'>Search</button>
        </div>
    );
};

export default RecipeSearchBar;
