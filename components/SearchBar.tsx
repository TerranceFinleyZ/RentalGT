"use client";

import { useState } from 'react';

import { SearchManufacturer } from '.';
import { manufacturers } from '@/constants';

const SearchBar = () => {
    const [Manufacturer, setManufacturer] = useState('');
    const handleSearch = () => {}

    return (
      <form className="searchbar" onSubmit= {handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
              manufacturers={manufacturers}
              setManufacturer={setManufacturer}
            />
        </div>
      </form>
    )
}

export default SearchBar
