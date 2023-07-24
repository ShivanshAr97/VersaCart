import React from 'react';
import fileContent from '../data/file.json';
import StoreItem from './StoreItem';

export default function DataItems() {
  return (
    <ul>
      {fileContent.map((item) => (
        <li key={item.id}>
          <StoreItem {...item} />
        </li>
      ))}
    </ul>
  );
}
