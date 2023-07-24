import React from "react";
import { CurrFormater } from "../utils/CurrFormater";
import { useContext } from "react";
import {CartContext} from "../context/CartContext";

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
      <div>
        <img className="w-40 h-40 object-cover" src={images} alt="" />
        {title}
        {CurrFormater(price)}
        {quant === 0 ? (
          <button onClick={()=>incItems(id)}>Add new item</button>
        ) : (
          <div className="flex flex-col">
            <div className="flex">
              <button onClick={()=>incItems(id)}>+</button>
              {quant}
              <button onClick={()=>decItems(id)}>-</button>
            </div>
            <button onClick={()=>removeItems(id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
