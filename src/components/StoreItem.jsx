import React from "react";
import { CurrFormater } from "../utils/CurrFormater";
import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import { FaCameraRetro } from "react-icons/fa";

export default function StoreItem({
  id,
  title,
  price,
  description,
  images,
  creationAt,
  category,
  updatedAt,
}) {
  const {getItems, incItems, decItems, removeItems} = useContext(CartContext);
  const quant = getItems(id);
  return (
    <div>
      <div className="relative">
        <img className="w-60 mx-auto rounded-lg h-40 object-cover" src={images} alt="" />
        <div className="flex justify-between my-2">
          <span>{title}</span>
          <span>{CurrFormater(price)}</span>
        </div>
        {quant === 0 ? (
          <>
          <button className="border px-4 py-1 flex mx-auto my-2 rounded-lg bg-green-600 text-white" onClick={()=>incItems(id)}>Add new item</button>
          <button className="absolute top-0"><FaCameraRetro/></button>
          </>
          
        ) : (
          <div className="flex justify-between my-2">
            <div className="flex items-center align-middle">
              <button className="" onClick={()=>incItems(id)}>+</button>
              <span className="border mx-2 px-1">{quant}</span>
              <button onClick={()=>decItems(id)}>-</button>
            </div>
            <button className="border px-4 py-0.5 rounded-lg bg-red-500 text-white" onClick={()=>removeItems(id)}>Delete</button>
            <button className="absolute top-0"><FaCameraRetro/></button>
          </div>
        )}
      </div>
    </div>
  );
}
