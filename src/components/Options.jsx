import React from 'react'
import { useShoppingCart } from '../context/CartContext'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Options() {
  return (
    <div className='flex flex-col text-lg w-32 mr-6 -ml-4'>
        <br />
        <p className='text-xl font-bold my-4'>Filters</p>

        <p className='my-1 font-semibold'>Sort</p>
        <div>
            <input type="radio" id="ascending" name="order" value="Asc"/>
            <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
            <input type="radio" id="descending" name="order" value="Desc"/>
            <label htmlFor="descending">Descending</label>
        </div>

        <p className='mt-4 font-semibold'>Price Range</p>
        <div>
            <input type="range" id="vol" name="vol" min="0" max="50"/>
        </div>

        <p className='mt-4 mb-2 font-semibold'>Rating</p>
        <div className='flex'>
            <p className='cursor-pointer'><AiOutlineStar/></p>
            <p className='cursor-pointer mx-1'><AiOutlineStar/></p>
            <p className='cursor-pointer mx-1'><AiOutlineStar/></p>
            <p className='cursor-pointer mx-1'><AiOutlineStar/></p>
            <p className='cursor-pointer mx-1'><AiOutlineStar/></p>
        </div>
        <button className='bg-red-500 py-1 my-4 text-lg rounded-md capitalize text-white'>clear filters</button>
    </div>
  )
}