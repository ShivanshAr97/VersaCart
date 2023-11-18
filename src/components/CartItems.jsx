import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import fileContent from "../data/file.json";
import { CurrFormater } from "../utils/CurrFormater";

const CartItems = ({ id, quant }) => {
  const { removeItems } = useContext(CartContext);
  const ite = fileContent.find((i) => i.id === id);
  if (ite === undefined) return null;
  // if (!ite) {
  //   return <div>Item not found</div>;
  // }

  return (
    <div className=" my-4">
      <div className="flex">
        <img className="w-32 h-32 rounded-lg object-cover" src={ite.images} alt="" />
        <div className="mx-4">
          {/* <div className="flex justify-around"> */}
          <span className="mr-4 font-bold">{ite.title}</span>
          <button className="border text-white rounded-full bg-red-500 px-[0.4rem] " onClick={()=>removeItems(ite.id)}>x</button>
          <br />
          {CurrFormater(ite.price)}
          {quant >= 1 && <span> x {quant}</span>}
          <br />
          {CurrFormater(ite.price * quant)}
          <br />
        </div>
      </div>
    </div>
  );
};

export default CartItems;


