import React, { useState } from 'react';
import BoxJoin from './BoxJoin';
import { useRouter } from 'next/router';

export default function SideBar() {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push({
      pathname: '/blog',
      query: { search: inputValue },
    });
  }

  return (

    <div className='h-full '>
      <div className='mb-5'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search...'
            className='w-full py-4 px-4  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>

      <BoxJoin />
    </div>
  );
}
