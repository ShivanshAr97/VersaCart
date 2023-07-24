import { createContext, useContext, useState } from "react";
import Cart from "../components/Cart";
import useLocalStorage from "../hooks/useLocalStorage"

export const CartContext = createContext({});

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useLocalStorage('items',[]);
  const [isOpen, setIsOpen] = useState(false);

  function getItems(id) {
    return items.find((item) => item.id === id)?.quant || 0;
  }

  function incItems(id) {
    setItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quant: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quant: item.quant + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decItems(id) {
    setItems((currItem) => {
      if (currItem.find((item) => item.id === id).quant === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quant: item.quant - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeItems(id) {
    setItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }
  function openBar() {
    setIsOpen(true);
  }
  function closeBar() {
    setIsOpen(false);
  }
  const itemsQuantity = items.reduce(
    (quantity, item) => item.quant + quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        getItems,
        incItems,
        decItems,
        removeItems,
        items,
        itemsQuantity,
        closeBar,
        openBar,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
