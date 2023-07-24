import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import fileContent from "../data/file.json";
import { CurrFormater } from "../utils/CurrFormater";

const CartItems = ({ id, quant }) => {
  const { removeItems } = useContext(CartContext);
  const ite = fileContent.find((i) => i.id === id);
  if (ite === null) return null;
  return (
    <>
      <img className="w-32 h-32 object-cover" src={ite.images} alt="" />
      {ite.title}
      {quant >= 1 && <span> x {quant}</span>}
      <br />
      {CurrFormater(ite.price)}
      <br />
      {CurrFormater(ite.price * quant)}
      <br />
      <button onClick={()=>removeItems(ite.id)}>x</button>
    </>
  );
};

export default CartItems;
