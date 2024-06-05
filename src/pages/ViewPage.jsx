import React, { useContext, useState, useEffect } from "react";
import heart from "../assets/icons/heart.svg";
import BasicRating from "../components/shopComponents/Stars";
import { Cola, Fanta } from "../App";
import Data from "../services/data";
import SliderUI from "../components/homeComponents/SliderB";
import NoData from "../assets/imgs/noData.png";
import { Link } from "react-router-dom";

const ViewPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id, setId } = useContext(Fanta);
  const { secid, setSecId } = useContext(Cola);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const foundProduct = Data.find((item) => item.id === id[0]);
    setProduct(foundProduct);
  }, [id]);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full items-center justify-center">
      <div className="w-full mt-6 h-full flex items-center justify-center flex-col">
        {!product ? (
          <img
            src={NoData}
            alt="No Data"
            className="w-[444px] h-[444px] flex justify-center"
          />
        ) : (
          <div className="flex items-stretch justify-between">
            <div className="w-1/2 flex items-center justify-center gap-4">
              <div className="flex flex-col gap-4">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      className="w-[100px] h-[100px] rounded-md"
                      src={product.image_url}
                      alt=""
                    />
                  ))}
              </div>
              <img
                className="w-[444px] h-[444px] mix-blend-multiply rounded-md"
                src={product.image_url}
                alt=""
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <h1 className="text-neutral-700 text-[28px] font-bold">
                    {product.common_name}
                  </h1>
                  <p className="text-green-500 text-[22px] font-bold">
                    ${product.price}
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
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground.
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
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity === 0}
                    className="flex items-center justify-center w-[33px] h-[38px] bg-green-500 rounded-[29px] text-white text-[28px] font-normal"
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={incrementQuantity}
                    className="w-[33px] h-[38px] bg-green-500 rounded-[29px] text-white text-[28px] flex items-center justify-center text-center font-normal"
                  >
                    +
                  </button>
                </div>
                <Link to="/cart">
                  <button className="w-[130px] text-white uppercase text-sm font-bold h-10 bg-green-500 rounded-md">
                    Buy NOW
                  </button>
                </Link>
                <button
                  onClick={() =>
                    secid.includes(product.id)
                      ? null
                      : setSecId([...secid, product.id])
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
                  SKU:{" "}
                  <span className="text-neutral-500">{product.genus_id}</span>
                </p>
                <p className="text-neutral-400 text-[15px] font-normal leading-none">
                  Categories:{" "}
                  <span className="text-neutral-500">{product.family}</span>
                </p>
                <p className="text-neutral-400 text-[15px] font-normal leading-none">
                  Tags: <span className="text-neutral-500">{product.rank}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full mt-10">
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
            <div className="mt-2">
              <p className="text-neutral-500 text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est quam harum minima iusto et, iste quasi sint voluptatum, quaerat ex recusandae rem, facere labore corrupti! Delectus velit modi architecto at consectetur nihil, aspernatur consequatur eum, in id veniam ab ullam quo dolores alias nostrum quod magnam nesciunt voluptates quidem ex. Voluptates quis expedita, incidunt deleniti velit vel molestiae dolore corporis, officiis ducimus maiores nesciunt, ut magni deserunt debitis illo quod consectetur illum eligendi qui quidem autem. Possimus, incidunt ut id voluptate nihil non culpa! Recusandae nostrum eum totam harum odio corporis sapiente consequatur officiis at necessitatibus, veritatis voluptatum ipsa maiores suscipit sunt impedit veniam ea architecto cum mollitia amet. Quaerat qui numquam porro, repudiandae perspiciatis sunt odio impedit tempore nihil ad molestias id adipisci. Nesciunt deleniti ea odit rem. Animi, sed laudantium nemo doloremque iste dolor, quisquam ea itaque non quam saepe veniam perspiciatis dolore, laboriosam eligendi ab qui aperiam deserunt eum. Doloribus sed, ullam asperiores quidem quaerat exercitationem omnis in, maiores itaque perspiciatis animi earum. Expedita a ratione excepturi esse delectus officiis reprehenderit? Dolore quis, debitis sequi accusantium exercitationem incidunt, doloribus voluptate ratione consequuntur laudantium nesciunt. Rerum, explicabo debitis. Provident quasi eveniet fugit corporis placeat! Voluptates earum suscipit recusandae at odio praesentium neque dolorem alias consequatur repellat iure, asperiores dolorum, totam magni saepe non eligendi velit itaque veniam veritatis officia! Quisquam blanditiis at quod adipisci cumque, odio repellat porro dolor alias quasi ipsa doloribus assumenda ut delectus placeat impedit aliquid quis illum, non beatae nobis, quas unde reprehenderit officia. Vel dignissimos dolor quam minima qui. Officiis, a nemo odit quod illo facere autem quaerat veniam consectetur voluptatum labore dolore sed voluptatem fuga iusto repudiandae tempore, earum, quidem et eveniet totam veritatis quibusdam explicabo. Quia obcaecati maiores eaque voluptate vel, minima impedit. Error dolore explicabo vel, tempore sapiente in.</p>
            </div>
          )}
          {activeTab === "reviews" && <div></div>}
        </div>
      </div>
      <SliderUI />
    </div>
  );
};

export default ViewPage;
