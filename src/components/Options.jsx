import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { useFilterCart } from "../context/FilterContext";
import fileContent from "../data/file.json";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Options() {
  const [val, setVal] = useState(250);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fileContent);
  }, []);

  const category = data.map((item) => item.category);
  const uniqCat = [...new Set(category)];
  const price = data.map((item) => item.price);
  const color = data.map((item) => item.color);
  const uniqColor = [...new Set(color)];
  const uniqSize = ["S", "M", "L", "XL"];

  let a = Math.min(...price);
  let b = Math.max(...price);

  console.log({ uniqSize, uniqCat, uniqColor });
  return (
    <div className="flex flex-col text-lg">
      <br />
      <p className="text-xl font-bold my-4">Filters</p>

      <p className="mt-4 font-semibold">Price Range</p>
      <div>
        <span>{a}</span>
        <input
          type="range"
          id="vol"
          name="vol"
          min={a}
          max={b}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <span>{b}</span>
        Val: {val}
      </div>

      <p>Color</p>
      {uniqColor.map((item, index) => (
        <div key={index} className="flex gap-2 items-center align-middle">
          <p className="border"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor:(`${item}`)
            }}
          ></p>
          <p>{item}</p>
        </div>
      ))}
      <p>Category</p>
      {uniqCat.map((item, index) => (
        <div key={index} className="flex gap-2 items-center align-middle">
          <p>{item}</p>
        </div>
      ))}
      <p>Size</p>
      {uniqSize.map((item, index) => (
        <div key={index} className="flex gap-2 items-center align-middle">
          <p>{item}</p>
        </div>
      ))}
      <p>Rating</p>
      <p>Top Rated</p>
      

      <button className="bg-red-500 py-1 my-4 text-lg rounded-md capitalize text-white">
        clear filters
      </button>
    </div>
  );
}
