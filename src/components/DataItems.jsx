import React from 'react';
import fileContent from '../data/file.json';
import StoreItem from './StoreItem';

export default function DataItems() {
  return (
    <ul className='grid grid-cols-3 mx-5'>
      {fileContent.map((item) => (
        <li className=' w-[22rem] border p-2 m-2 mx-4 rounded-lg' key={item.id}>
          <StoreItem {...item} />
        </li>
      ))}
    </ul>
  );
}
