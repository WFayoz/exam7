import React, { useContext, useState } from "react";
import Data from "../services/data";
import { Fanta } from "../App";

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(Data);
  const { id, setId } = useContext(Fanta);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredResults = Data.filter((item) =>
      item.common_name.toLowerCase().includes(value)
    );

    setResults(filteredResults);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg pt-0  shadow-lg w-3/4 max-w-lg h-[600px] overflow-scroll">
        <div className="flex justify-between items-center fixed  h-[10%] bg-white w-[450px]">
          <input
            type="text"
            placeholder="Search by common name..."
            value={query}
            onChange={handleSearch}
            className="w-3/4 p-2 border border-gray-300 rounded"
          />
          <button
            className="ml-4 p-2 bg-green-500 text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <ul className="gap-5 flex h-[90%] mt-20 mb-5 flex-col">
          {results.map((item) => (
            <li
              onClick={() => setId([item.id])}
              key={item.id}
              className="flex w-full items-center bg-[#fafafa] justify-start"
            >
              <img src={item.image_url} alt="" className="w-[70px] h-[70px]" />
              <div className="flex flex-col gap-1 ml-4">
                <h1 className="text-neutral-700 w-[144px] text-base font-medium leading-none">
                  {item.common_name}
                </h1>
                <p className="text-neutral-400 text-sm font-normal leading-none">
                  SKU:{" "}
                  <span className="text-neutral-500 text-sm font-normal leading-none">
                    {item.genus_id}
                  </span>
                </p>
              </div>
              <h1 className="text-neutral-500 text-base font-medium leading-none ml-[100px]">
                ${item.price}
              </h1>
              <div className="flex items-center justify-center w-20 gap-3 ml-28">
                <p className="text-neutral-700 text-[17px] font-normal leading-[10px]">
                  {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
