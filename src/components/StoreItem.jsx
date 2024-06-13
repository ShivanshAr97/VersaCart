import React, { useState, Suspense } from "react";
import { CurrFormater } from "../utils/CurrFormater";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FilterContext } from "../context/FilterContext";
import { FaCameraRetro } from "react-icons/fa";
import Modal from "./Modal";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Apple from "../../public/Apple";

const StoreItem = ({
  id,
  color,
  brand,
  product,
  price,
  desc,
  category,
  fullName,
  rating,
  size,
  image,
}) => {
  const { getItems, incItems, decItems, removeItems } = useContext(CartContext);
  const {} = useContext(FilterContext);

  const quant = getItems(id);

  const [open, setOpen] = useState(false);
  const [three, setThree] = useState(false);
  const openModal = () => {
    setThree(!three);
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
      <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
        <div className="text-center w-[32rem]">
          <div className="mx-auto my-4 w-48">
            <img
              className="w-60 mx-auto rounded-lg h-40 object-cover"
              src={image}
              alt=""
            />
            <div>
              <h1>{product}</h1>
              <p>{desc}</p>
              <p>{brand}</p>
              <p>{rating}</p>
              <p>{color}</p>
              <p>{size}</p>
              <p>{price}</p>
              <p>{category}</p>
              <p>{fullName}</p>
            </div>
            
          </div>
          <div className="flex gap-4">
            
          </div>
        </div>
      </Modal>
      <div className="relative">
        {three ? (
          <Canvas className="">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <Apple scale={5} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        ) : (
          <button onClick={() => setOpen(true)}>
            <img
              className="w-60 mx-auto rounded-lg h-40 object-cover"
              src={image}
              alt=""
            />
          </button>
        )}
        <div className="flex justify-between my-2">
          <span>{product}</span>
          <span>{CurrFormater(price)}</span>
        </div>
        {quant === 0 ? (
          <>
            <button
              className="border px-4 py-1 flex mx-auto my-2 rounded-lg bg-green-600 text-white"
              onClick={() => incItems(id)}
            >
              Add new item
            </button>
            <button onClick={openModal} className="absolute top-0">
              <FaCameraRetro />
            </button>
          </>
        ) : (
          <div className="flex justify-between my-2">
            <div className="flex items-center align-middle">
              <button className="" onClick={() => incItems(id)}>
                +
              </button>
              <span className="border mx-2 px-1">{quant}</span>
              <button onClick={() => decItems(id)}>-</button>
            </div>
            <button
              className="border px-4 py-0.5 rounded-lg bg-red-500 text-white"
              onClick={() => removeItems(id)}
            >
              Delete
            </button>
            <button onClick={openModal} className="absolute top-0">
              <FaCameraRetro />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
