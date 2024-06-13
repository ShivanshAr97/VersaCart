import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { useFilterCart } from "../context/FilterContext";
import fileContent from "../data/file.json";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Options() {
  const [val, setVal] = useState(1000);
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

  // console.log({ uniqSize, uniqCat, uniqColor });
  return (
    <div className="flex flex-col text-lg my-2 mx-2">
      <p className="text-xl font-bold my-2">Filters</p>
      <div>
        <p className="mt-4 my-2 font-semibold">Price Range</p>
        <div className="flex gap-4 my-2">
          <span className="text-sm">{a}</span>
          <input
            type="range"
            id="vol"
            name="vol"
            min={a}
            max={b}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <span className="text-sm">{b}</span>
        </div>
        <p className="text-sm">Products upto ₹{val}</p>
      </div>

      <p className="mt-4 my-2 font-semibold">Rating</p>
      <div className="mx-4 text-sm">
        <button className="border rounded-sm text-left my-1 p-1 px-2 bg-gray-100 w-[10rem]">
          Top Rated
        </button>
        <button className="border rounded-sm text-left my-1 p-1 px-2 bg-gray-100 w-[10rem]">
          3* and above
        </button>
        <button className="border rounded-sm text-left my-1  p-1 px-2 bg-gray-100 w-[10rem]">
          2* and above
        </button>
        <button className="border rounded-sm text-left my-1  p-1 px-2 bg-gray-100 w-[10rem]">
          1* and above
        </button>
      </div>

      <p className="mt-4 my-2 font-semibold">Color</p>
      {uniqColor.map((item, index) => (
        <button
          key={index}
          className=" border rounded-md mx-4 bg-gray-100 w-[10rem] p-1 text-sm flex gap-2 my-1 items-center align-middle"
        >
          <p
            className="border rounded-full"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: `${item}`,
            }}
          ></p>
          <p>{item}</p>
        </button>
      ))}
      <p className="mt-4 my-2 font-semibold">Category</p>
      {uniqCat.map((item, index) => (
        <button
          key={index}
          className=" border rounded-md px-2 mx-4 bg-gray-100 w-[10rem] p-1 text-sm flex gap-2 my-1 items-center align-middle"
        >
          {item}
        </button>
      ))}
      <p className="mt-4 my-2 font-semibold">Size</p>
      {uniqSize.map((item, index) => (
        <button
          key={index}
          className=" border rounded-md mx-4 bg-gray-100 w-[10rem] p-1 text-sm flex gap-2 my-1 px-2 items-center align-middle"
        >
          {item}
        </button>
      ))}

      <button className="bg-red-500 py-1 my-4 text-lg rounded-md capitalize text-white">
        clear filters
      </button>
    </div>
  );
}
