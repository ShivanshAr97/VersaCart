import React from 'react'
import { useShoppingCart } from '../context/CartContext'

export default function Options() {
  return (
    <div className='flex flex-col text-lg w-32 ml-4'>
        <br />
        Sort
        <div>
            <input type="radio" id="ascending" name="order" value="Asc"/>
            <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
            <input type="radio" id="descending" name="order" value="Desc"/>
            <label htmlFor="descending">Descending</label>
        </div>
        <br />
        <div>
            <label htmlFor="vol">Price Range</label>
            <input type="range" id="vol" name="vol" min="0" max="50"/>
        </div>

        <br />
        Rating
        <div className='flex'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>

        <button>clear filters</button>
    </div>
  )
}