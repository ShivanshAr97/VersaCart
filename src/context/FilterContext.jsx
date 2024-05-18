import { createContext, useContext, useState } from "react";
import DataItems from "../components/DataItems";
import useLocalStorage from "../hooks/useLocalStorage"

export const FilterContext = createContext({});

export function useFilterCart() {
  return useContext(FilterContext);
}

export function FilterCartProvider({ children }) {
  const [items, setItems] = useLocalStorage('items',[]);

  
  return (
    <FilterContext.Provider
      value={{
        
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
