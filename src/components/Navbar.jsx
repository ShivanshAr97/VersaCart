import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const {openBar, itemsQuantity} = useContext(CartContext)
  return (
    <div  className="bg-blue-400 -mx-12 flex justify-between items-center align-middle px-4">
      <h1 className="font-bold">Navbar</h1>
      <button className="flex py-2" onClick={openBar}>
        <AiOutlineShoppingCart size="28px" />
        <span className="mx-2">{itemsQuantity}</span>
      </button>
    </div>
  );
};

export default Navbar;
