import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const {openBar, itemsQuantity} = useContext(CartContext)
  return (
    <>
      <button onClick={openBar}>
        <AiOutlineShoppingCart size="28px" />{itemsQuantity}
      </button>
    </>
  );
};

export default Navbar;
