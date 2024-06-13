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
        <button className="btn btn-light w-full" onClick={() => setOpen(false)}>
          Cancel
        </button>
        <div className=" w-[40rem]">
          <div className=" flex my-4 gap-4">
            <div className="text-sm">
              <img
                className="w-[15rem] mx-auto rounded-lg h-[10rem] object-cover"
                src={image}
                alt=""
              />
              <p className="border bg-gray-100 w-fit px-2 py-1 rounded-md  my-2 mx-4">
                Brand: {brand}
              </p>
              <p className="border bg-gray-100 w-fit px-2 py-1 rounded-md mx-4">
                Seller: {fullName}
              </p>
            </div>
            <div className="border text-sm">
              <h1 className="font-bold text-2xl">{product}</h1>
              <p>{desc}</p>
              <div className="grid grid-cols-3">
                <p className="border bg-gray-100 w-fit px-2 py-1 rounded-md mx-4 my-2">
                  Rating: {rating}*
                </p>
                <div className="flex gap-2 border bg-gray-100 w-fit my-2 px-2 py-1 rounded-md mx-4">
                  <span className="capitalize">Color:</span>

                  <p
                    className="border rounded-full"
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: `${color}`,
                    }}
                  ></p>
                </div>

                <p className="border my-2 bg-gray-100 w-fit px-2 py-1 rounded-md mx-4">
                  Size: {size}
                </p>
                <p className="border my-2 bg-gray-100 w-fit px-2 py-1 rounded-md mx-4">
                  Price: ₹{price}
                </p>
                <p className="border my-2 bg-gray-100 w-fit px-2 py-1 rounded-md mx-4">
                  {category}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4"></div>
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
              className="w-60 mx-12 rounded-lg h-40 object-cover"
              src={image}
              alt=""
            />
          </button>
        )}
        <div className="flex justify-between my-2">
          <div className="">
            <span className="mx-2 font-semibold">{product}</span>
            <span>({rating}*)</span>
          </div>
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
