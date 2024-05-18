import React, { useEffect, useState } from "react";
import fileContent from "../data/file.json";
import StoreItem from "./StoreItem";

export default function DataItems() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fileContent);
  }, [fileContent]);
  useEffect(() => {

    function searchItems(query) {
      const filteredData = data.filter((item) => {
        const titleMatch = item.title
          .toLowerCase()
          .includes(query.toLowerCase());
        const descMatch = item.description
          .toLowerCase()
          .includes(query.toLowerCase());
        return titleMatch || descMatch;
      });

      return filteredData;
    }
    const availableProducts = data.filter(
      (item) => item.category.name == "Others"
    );
    console.log(availableProducts);
  }, [data]);

  return (
    <ul className="grid grid-cols-3 mx-5">
      {data.map((item) => (
        <li className=" w-[22rem] border p-2 m-2 mx-4 rounded-lg" key={item.id}>
          <StoreItem {...item} />
        </li>
      ))}
    </ul>
  );
}
