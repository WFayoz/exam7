import React, { useState } from "react";
import data from "../../services/data";
import { Link } from "react-router-dom";

const ProductsHm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[70%] flex flex-col items-end justify-center">
      <div></div>
      <div className="gap-[33px] grid grid-cols-3  w-full">
        {currentItems.map((item) => (
          <Link
            to="/shop"
            key={item.id}
            className="flex flex-col w-[250px] text-start items-start justify-center gap-3 border-t-2 border-transparent hover:border-green-500"
          >
            <img
              src={item.image_url}
              alt={item.common_name}
              className="w-[250px] h-[250px] bg-neutral-50"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="text-neutral-700 text-base font-normal leading-none">
                {item.scientific_name}
              </h2>
              <p className="text-green-500 text-lg font-bold leading-none">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-4 gap-3">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="w-[35px] h-[35px] rounded border border-neutral-200"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[35px] h-[35px] bg-green-500  border rounded ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-[35px] h-[35px] rounded border border-neutral-200"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductsHm;
