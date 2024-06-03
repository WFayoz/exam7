import React from "react";
import heroBg from "../assets/imgs/heroBg.png";
import sale from "../assets/imgs/saleHm.png";
import summercac from "../assets/imgs/summercac.jpeg";
import arrowleft from "../assets/icons/arrowleft.svg";
import stylingtrends from "../assets/imgs/stylingtrends.png";
import { Link } from "react-router-dom";
import ProductsHm from "../components/homeComponents/ProductsHm";
import MinimumDistanceSlider from "../components/homeComponents/SliderHm";
import { items } from "../services/items";
import { blog } from "../services/blog";
import { sizes } from "../services/sizes";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-4">
      <section className="flex px-10 w-full items-center justify-between bg-[#fafafa]">
        <div>
          <div className="text-neutral-700 text-sm font-medium  uppercase leading-none tracking-wider">
            Welcome to GreenShop
          </div>
          <h1 className="text-neutral-700 leading-tight text-[70px] font-black">
            LET'S MAKE A <br /> BETTER{" "}
            <span className="text-green-500">PLANET</span>
          </h1>
          <p className="w-[557px] h-[45px] leading-relaxed text-neutral-500 text-sm font-normal font-['Cera Pro'] leading-normal">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Link to="./shop">
            <button className="text-white mt-11 w-[140px] h-10 bg-green-500 rounded-md text-base font-bold  uppercase leading-tight">
              shop now
            </button>
          </Link>
        </div>
        <div className="w-[518px] h-[518px]">
          <img src={heroBg} alt="" />
        </div>
      </section>
      <section className="w-full pt-10 flex p-0 items-start justify-between">
        <div className="flex flex-col w-[25%] items-center justify-center bg-[#fafafa] px-7 pt-4 ">
          <div className="flex flex-col w-full items-center justify-center gap-10">
            <div className="flex flex-col w-full gap-2">
              <h1 className="text-neutral-700 text-lg font-bold -ml-2">
                Categories
              </h1>
              <ul className="flex w-full flex-col gap-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex w-full items-center justify-between cursor-pointer text-neutral-700 text-[15px] font-normal hover:text-green-500"
                  >
                    <p>{item.name}</p>
                    <p>({item.count})</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full items-start justify-between flex-col gap-2">
              <h1 className="text-neutral-700 text-lg font-bold -ml-2 mb-3">
                Price Range
              </h1>
              <MinimumDistanceSlider />
              <p className="flex items-center justify-center font-bold text-green-500 text-[15px] gap-1">
                <span className="text-neutral-700 text-[15px] font-normal">
                  Price:
                </span>{" "}
                $39-$1230
              </p>
              <button className="bg-green-500 text-white py-2 px-6 rounded-md">
                Filter
              </button>
            </div>
            <div className="flex flex-col w-full items-start justify-center gap-2">
              <h1 className="text-neutral-700 text-lg font-bold -ml-2">Size</h1>
              <ul className="flex w-full flex-col gap-4">
                {sizes.map((item, index) => (
                  <li
                    key={index}
                    className="flex w-full items-center justify-between cursor-pointer text-neutral-700 text-[15px] font-normal hover:text-green-500"
                  >
                    <p>{item.name}</p>
                    <p>({item.count})</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[355px] mt-10">
            <img src={sale} alt="" className="" />
          </div>
        </div>
        <ProductsHm />
      </section>
      <section className="flex  items-center justify-between  w-full pt-[150px]">
        <div className="flex relative w-[580px]">
          <div className="flex items-end justify-end w-full p-8 bg-[#fafafa] gap-8">
            <img src={summercac} alt="" className="absolute left-0 bottom-0 " />
            <div className="flex flex-col items-end text-end justify-center gap-5 z-10">
              <h1 className="text-right text-neutral-700 text-lg font-black">
                Summer cactus <br /> & succulents
              </h1>
              <p className="text-neutral-500 text-sm font-normal">
                We are an online plant shop offering a wide <br /> range of
                cheap and trendy plants
              </p>
              <Link
                to="/shop"
                className="w-[140px] h-10 bg-green-500 flex items-center justify-center gap-2 rounded-md text-white text-sm font-medium"
              >
                Find More
                <img src={arrowleft} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex relative w-[580px]">
          <div className="flex items-end justify-end w-full p-8 bg-[#fafafa] gap-8">
            <img
              src={stylingtrends}
              alt=""
              className="absolute left-0 bottom-0 "
            />
            <div className="flex flex-col items-end text-end justify-center gap-5 z-10">
              <h1 className="text-right text-neutral-700 text-lg font-black">
                Styling trends <br /> & much more
              </h1>
              <p className="text-neutral-500 text-sm font-normal">
                We are an online plant shop offering a wide <br /> range of
                cheap and trendy plants
              </p>
              <Link
                to="/shop"
                className="w-[140px] h-10 bg-green-500 flex items-center justify-center gap-2 rounded-md text-white text-sm font-medium"
              >
                Find More
                <img src={arrowleft} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col mt-32">
        <div>
          <h1 className="text-center text-neutral-700 text-3xl font-bold">
            Our Blog Posts
          </h1>
          <p className="text-center mt-4 text-neutral-500 text-sm font-normal">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex items-center justify-between   w-full">
          <div className="flex w-full mt-9 justify-between ">
            {blog.map((post) => (
              <div key={post.id}>
                <img src={post.img} alt="" className="w-[246px] h-[140px]" />
                <div className="flex flex-col gap-2 bg-[#fafafa] p-3">
                  <p className="text-green-500 text-sm font-medium ">
                    {post.date}
                  </p>
                  <h1 className="text-neutral-700 text-xl font-bold w-[189px]">
                    {post.title}
                  </h1>
                  <p className="text-neutral-500 text-sm font-normal w-[220px]">
                    {post.desc}
                  </p>
                  <p className="text-neutral-700 text-sm font-medium cursor-pointer hover:text-green-500 ">
                    {post.more}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
