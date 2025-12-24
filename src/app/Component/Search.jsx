'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Search = () => {
    const router=useRouter()
     const handleSearch = (e) => {
       e.preventDefault();
       const form = e.target;
       const value = form.search.value;
       router.push(`?search=${encodeURIComponent(value)}`)
      
     };
    return (
      <div className='text-center my-5'>
        <form onSubmit={handleSearch}>
          <input
          name='search'
            className="bg-white text-black font-bold w-2xl  border-r-0 px-5 py-2 "
            type="text"
            placeholder="Search with name "
          />
          <button type='submit' className='text-black px-5  cursor-pointer outline-none font-bold bg-yellow-600 py-2 '>Search</button>
        </form>
      </div>
    );
};

export default Search;