import React, { useEffect, useState } from 'react';
import fileContent from '../data/file.json';
import StoreItem from './StoreItem';

export default function DataItems() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(fileContent);
  }, [fileContent]);
  useEffect(() => {
    // const sortedData = [...data].sort((a, b) => {
      // return a.title.localeCompare(b.title);
    // });
    // const sortedData = [...data].sort((a, b) => a.price - b.price);
    // const sortedData = data.filter(item => item.price >= 100 && item.price <= 200);
    // const ratedData = data.filter(item => item.rating >= 0 && item.price <= 4);

    
    function searchItems(query) {
      const filteredData = data.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const descMatch = item.description.toLowerCase().includes(query.toLowerCase());
        return titleMatch || descMatch;
      });
    
      return filteredData;
    }

    // console.log(searchItems("towels"));
    
    // const productNamesByPrice = {};

    // // Iterate through the data
    // data.forEach(item => {
    //   const { title, price } = item;
    //   // Check if the price already exists in the object
    //   if (productNamesByPrice[price]) {
    //     // If the price exists, add the title to the array
    //     productNamesByPrice[price].push(title);
    //   } else {
    //     // If the price doesn't exist, create a new array with the title
    //     productNamesByPrice[price] = [title];
    //   }
    // });
    const availableProducts = data.filter(item => item.category.name=="Others");
    console.log(availableProducts);
    // setData(availableProducts)
    // console.log(productNamesByPrice);

    // console.log(sortedData);
  }, [data]);

  return (
    <ul className='grid grid-cols-3 mx-5'>
      {data.map((item) => (
        <li className=' w-[22rem] border p-2 m-2 mx-4 rounded-lg' key={item.id}>
          <StoreItem {...item} />
        </li>
      ))}
    </ul>
  );
}
