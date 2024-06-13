import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const {openBar, itemsQuantity} = useContext(CartContext)
  return (
    <div  className="bg-blue-400 flex justify-between items-center align-middle px-8">
      <h1 className="font-bold text-lg">VersaCart</h1>
      <div className="flex">
        <input className="px-2 my-3 mx-8 border outline-none rounded-md text-lg" type="text" placeholder="Search" name="" id="" />
        <button className="border my-2 px-1 bg-white rounded-md flex py-2" onClick={openBar}>
          <AiOutlineShoppingCart size="28px" />
          <span className="mx-2">{itemsQuantity}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
