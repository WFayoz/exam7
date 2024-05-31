import React from "react";
import heroBg from "../assets/imgs/heroBg.png";
import { Link } from "react-router-dom";
import ProductsHm from "../components/homeComponents/ProductsHm";

const HomePage = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center pt-4">
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
        {/* will delete */}

        <div className="w-[25%] h-[774px] relative">
          <div className="w-full h-[774px] left-0 top-0 absolute bg-neutral-50" />
          <div className="w-[268px] h-[383px] left-[18px] top-[14px] absolute">
            <div className="left-0 top-0 absolute text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none">
              Categories
            </div>
            <div className="left-[12px] top-[23px] absolute">
              <span>
                House Plants
                <br />
              </span>
              <span>
                Potter Plants
                <br />
                Seeds
                <br />
                Small Plants
                <br />
                Big Plants
                <br />
                Succulents
                <br />
                Trerrariums
                <br />
                Gardening
                <br />
                Accessories
              </span>
            </div>
            <div className="left-[240px] top-[23px] absolute text-right">
              <span>
                (33)
                <br />
              </span>
              <span>
                (12)
                <br />
                (65)
                <br />
                (39)
                <br />
                (23)
                <br />
                (17)
                <br />
                (19)
                <br />
                (13)
                <br />
                (18)
              </span>
            </div>
          </div>
          <div className="w-[268px] h-[143px] left-[18px] top-[612px] absolute">
            <div className="left-0 top-0 absolute text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none">
              Size
            </div>
            <div className="left-[12px] top-[23px] absolute text-neutral-700 text-[15px] font-normal font-['Cera Pro'] leading-10">
              Small
              <br />
              Medium
              <br />
              Large
            </div>
            <div className="left-[238px] top-[23px] absolute text-right text-neutral-700 text-[15px] font-normal font-['Cera Pro'] leading-10">
              (119)
              <br />
              (86)
              <br />
              (78)
            </div>
          </div>
          <div className="w-[226px] h-[133px] left-[18px] top-[433px] absolute">
            <div className="left-0 top-0 absolute text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none">
              Price Range
            </div>
            <div className="w-[209px] h-[0px] left-[17px] top-[45px] absolute border-4 border-green-500/opacity-20"></div>
            <div className="w-[161px] h-[0px] left-[17px] top-[45px] absolute border-4 border-green-500"></div>
            <div className="w-[15px] h-[15px] left-[12px] top-[36px] absolute bg-green-500 rounded-full border-2 border-white" />
            <div className="w-[15px] h-[15px] left-[167px] top-[36px] absolute bg-green-500 rounded-full border-2 border-white" />
            <div className="left-[12px] top-[66px] absolute">
              <span>Price: </span>
              <span>$39 - $1230</span>
            </div>
            <div className="w-[90px] h-[35px] left-[12px] top-[98px] absolute bg-green-500 rounded-md" />
            <div className="left-[38px] top-[106px] absolute text-white text-base font-bold font-['Cera Pro'] leading-tight">
              Filter
            </div>
          </div>
        </div>
        <ProductsHm />
      </section>
    </div>
  );
};

export default HomePage;
