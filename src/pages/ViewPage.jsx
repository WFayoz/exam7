import React, { useContext, useState } from "react";
import heart from "../assets/icons/heart.svg";
import BasicRating from "../components/shopComponents/Stars";
import { Cola, Fanta } from "../App";
import Data from "../services/data";

const ViewPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id, setId } = useContext(Fanta);
  const { secid, setSecId } = useContext(Cola);

  return (
    <div className="w-full items-center just ify-center">
      <div className="w-full mt-6 h-full">
        {Data.map(
          (item) =>
            item.id === id[0] && (
              <div key={item.id} className="flex items-stretch justify-between">
                <div className="w-1/2 flex items-center justify-center gap-4">
                  <div className="flex flex-col gap-4">
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          className="w-[100px] h-[100px] rounded-md"
                          src={item.image_url}
                          alt=""
                        />
                      ))}
                  </div>
                  <img
                    className="w-[444px] h-[444px] mix-blend-multiply rounded-md"
                    src={item.image_url}
                    alt=""
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <h1 className="text-neutral-700 text-[28px] font-bold">
                        {item.common_name}
                      </h1>
                      <p className="text-green-500 text-[22px] font-bold">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <BasicRating />
                      <p className="text-neutral-700 text-[15px] font-normal">
                        19 Customer Review
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] mt-4 border border-green-500/50"></div>
                  <div className="mt-4">
                    <h1 className="text-neutral-700 text-[15px] font-medium">
                      Short Description:
                    </h1>
                    <p className="text-neutral-500 pt-3 text-sm font-normal">
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground.
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center mt-5">
                    <h1 className="text-neutral-700 text-[15px] font-medium">
                      Size:
                    </h1>
                    <div className="flex gap-3 mt-3">
                      {["S", "L", "M", "XL"].map((size) => (
                        <div
                          key={size}
                          className="cursor-pointer flex items-center justify-center rounded-full w-7 h-7 border border-neutral-500 text-neutral-500 hover:border-green-500 hover:text-green-500"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-5 items-center justify-start mt-6">
                    <div className="flex items-center justify-center gap-5">
                      <button className=" flex items-center justify-center w-[33px] h-[38px] bg-green-500 rounded-[29px] text-white text-[28px] font-normal">
                        -
                      </button>
                      <p>0</p>
                      <button className="w-[33px] h-[38px] bg-green-500 rounded-[29px] text-white text-[28px] flex items-center justify-center text-center font-normal">
                        +
                      </button>
                    </div>
                    <button className="w-[130px] text-white uppercase text-sm font-bold h-10 bg-green-500 rounded-md">
                      Buy NOW
                    </button>
                    <button
                      onClick={() =>
                        secid.includes(item.id)
                          ? null
                          : setSecId([...secid, item.id])
                      }
                      className="w-[130px] text-white uppercase text-sm font-bold h-10 bg-green-500 rounded-md"
                    >
                      Add to cart
                    </button>
                    <button className="w-10 h-10 border border-green-500 flex items-center justify-center rounded-md">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3 mt-6">
                    <p className="text-neutral-400 text-[15px] font-normal leading-none">
                      SKU: <span className="text-neutral-500"></span>
                    </p>
                    <p className="text-neutral-400 text-[15px] font-normal leading-none">
                      Categories: <span className="text-neutral-500"></span>
                    </p>
                    <p className="text-neutral-400 text-[15px] font-normal leading-none">
                      Tags: <span className="text-neutral-500"></span>
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className="w-full">
        <div className="flex items-center justify-start gap-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`p-2 leading-none ${
              activeTab === "description"
                ? "font-bold text-green-500 border-b border-b-green-500"
                : ""
            }`}
          >
            Product Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`p-2 leading-none ${
              activeTab === "reviews"
                ? "font-bold text-green-500 border-b border-b-green-500"
                : ""
            }`}
          >
            Reviews (19)
          </button>
        </div>
        <div>
          {activeTab === "description" && (
            <div>
              <p className="text-neutral-500 text-sm font-normal">quas!</p>
            </div>
          )}
          {activeTab === "reviews" && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
