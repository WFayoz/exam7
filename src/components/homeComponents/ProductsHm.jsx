import React, { useContext, useState } from "react";
import data from "../../services/data";
import { Link } from "react-router-dom";
import arrowdown from "../../assets/icons/arrowdown.svg";
import { useSelector } from "react-redux";
import { Fanta } from "../../App";

const ProductsHm = () => {
  const { products, total, amount } = useSelector((store) => store.basket);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { id, setId } = useContext(Fanta);

  const itemsPerPage = 9;

  const filterItems = () => {
    let filteredItems = [...data];
    switch (activeTab) {
      case "new":
        filteredItems = filteredItems.filter((item) => item.isNewArrival);
        break;
      case "sale":
        filteredItems = filteredItems.filter((item) => item.isOnSale);
        break;
      default:
        break;
    }

    if (sortOption === "priceAsc") {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      filteredItems.sort((a, b) => b.price - a.price);
    }

    return filteredItems;
  };

  const currentItems = filterItems().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filterItems().length / itemsPerPage);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      id="products"
      className="w-[70%] flex flex-col items-end justify-center"
    >
      <div className="w-full h-[23px] relative mb-4">
        <div
          onClick={() => handleTabChange("all")}
          className={`left-0 top-0 absolute text-[15px] font-['Cera Pro'] leading-none cursor-pointer ${
            activeTab === "all"
              ? "text-green-500 font-bold"
              : "text-neutral-700 font-normal"
          }`}
        >
          All Plants
          {activeTab === "all" && (
            <div className="w-full h-[0px] border-b-2 border-green-500 absolute" />
          )}
        </div>
        <div
          onClick={() => handleTabChange("new")}
          className={`left-[103px] top-0 absolute text-[15px] font-['Cera Pro'] leading-none cursor-pointer ${
            activeTab === "new"
              ? "text-green-500 font-bold"
              : "text-neutral-700 font-normal"
          }`}
        >
          New Arrivals
          {activeTab === "new" && (
            <div className="w-full h-[0px] border-b-2 border-green-500 absolute" />
          )}
        </div>
        <div
          onClick={() => handleTabChange("sale")}
          className={`left-[229px] top-0 absolute text-[15px] font-['Cera Pro'] leading-none cursor-pointer ${
            activeTab === "sale"
              ? "text-green-500 font-bold"
              : "text-neutral-700 font-normal"
          }`}
        >
          Sale
          {activeTab === "sale" && (
            <div className="w-full h-[0px] border-b-2 border-green-500 absolute" />
          )}
        </div>
        <div className="left-[643px] top-0 absolute text-neutral-700 text-[15px] font-normal leading-none">
          Sort by:
        </div>
        <div
          className="left-[714px] top-0 absolute text-neutral-700 text-[15px] font-normal flex gap-2 leading-none cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {sortOption === "default"
            ? "Default sorting"
            : sortOption === "priceAsc"
            ? " Low to High"
            : " High to Low"}
          <img src={arrowdown} alt="" />
        </div>
        {isDropdownOpen && (
          <div className="left-[714px] top-[23px] absolute bg-white border border-neutral-200 rounded shadow-md">
            <div
              onClick={() => handleSortChange("default")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Default sorting
            </div>
            <div
              onClick={() => handleSortChange("priceAsc")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Price: Low to High
            </div>
            <div
              onClick={() => handleSortChange("priceDesc")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Price: High to Low
            </div>
          </div>
        )}
      </div>
      <div className="gap-[33px] grid grid-cols-3 mt-5 w-full">
        {currentItems.map((item) => (
          <Link
            to="/shop"
            onClick={() => setId([item.id])}
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
      {totalPages > 1 && (
        <div className="flex justify-end mt-44 gap-3">
          {currentPage > 1 && (
            <button
              onClick={handlePrevPage}
              className="w-[35px] h-[35px] rounded border border-neutral-200"
            >
              &lt;
            </button>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-[35px] h-[35px] border rounded ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={handleNextPage}
              className="w-[35px] h-[35px] rounded border border-neutral-200"
            >
              &gt;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsHm;
