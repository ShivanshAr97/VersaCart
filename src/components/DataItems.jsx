import React from 'react';
import fileContent from '../data/file.json';
import StoreItem from './StoreItem';

export default function DataItems() {
  return (
    <ul className='grid grid-cols-3'>
      {fileContent.map((item) => (
        <li className='border p-2 m-2 rounded-lg' key={item.id}>
          <StoreItem {...item} />
        </li>
      ))}
    </ul>
  );
}
