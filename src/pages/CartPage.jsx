import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cola } from "../App";
import Data from "../services/data";
import Delete from "../assets/icons/delete.svg";
import SliderUI from "../components/homeComponents/SliderB";

const CartPage = () => {
  const { secid } = useContext(Cola);

  const initialCartItems = Data.filter((item) => secid.includes(item.id)).map(
    (item) => ({
      ...item,
      quantity: 1,
    })
  );

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[51px]">
      <div className="flex w-full items-start justify-between">
        <div className="w-[72%] flex items-start justify-start flex-col">
          <div className="flex">
            <h1 className="text-neutral-700 text-lg font-bold leading-none">
              Products
            </h1>
            <h1 className="text-neutral-700 text-lg font-bold ml-[245px] leading-none">
              Price
            </h1>
            <h1 className="text-neutral-700 text-lg font-bold ml-[108px] leading-none">
              Quantity
            </h1>
            <h1 className="text-neutral-700 text-lg font-bold ml-[97px] leading-none">
              Total
            </h1>
          </div>
          <div className="w-full mt-3 h-[0px] border border-green-500/50"></div>
          <div className="flex flex-col w-full gap-3 h-72 overflow-scroll py-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center bg-[#fafafa] justify-start"
              >
                <img
                  src={item.image_url}
                  alt=""
                  className="w-[70px] h-[70px]"
                />
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
                <div className="flex items-center justify-center gap-3 ml-28">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="w-[21.71px] h-[25px] bg-green-500 rounded-[29px] text-white text-[22px] flex items-center justify-center"
                  >
                    -
                  </button>
                  <p className="text-neutral-700 text-[17px] font-normal  leading-[10px]">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="w-[21.71px] h-[25px] bg-green-500 rounded-[29px] text-white text-[22px] flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <h1 className="text-green-500 w text-base font-bold leading-none ml-20">
                  ${item.price * item.quantity}
                </h1>
                <div className="flex ml-16">
                  <img
                    src={Delete}
                    alt=""
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <div className="flex w-[23%] flex-col items-start justify-center">
          <h1 className="text-neutral-700 text-lg font-bold leading-none">
            Cart Totals
          </h1>
          <div className="w-full h-[0px] border border-green-500/50 mt-3"></div>
          <p className="text-neutral-700 text-sm font-normal mt-3 leading-none">
            Coupon Apply
          </p>
          <div></div>
          <div className="flex flex-col items-start justify-center gap-4 mt-5">
            <p className="text-neutral-700 text-[15px] font-normal">
              Subtotal: ${totalPrice}
            </p>
            <p className="text-neutral-700 text-[15px] font-normal">Coupon</p>
            <p className="text-neutral-700 text-[15px] font-normal">Shipping</p>
            <h1 className="text-neutral-700 text-base font-bold">
              Total: ${totalPrice}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-7">
            <Link
              to="/checkout"
              className="text-white text-[15px] font-bold w-full px-10 py-3 bg-green-500 rounded-[3px]"
            >
              Proceed To Checkout
            </Link>
            <Link
              to="/"
              className="mt-3 text-green-500 text-[15px] font-normal font-['Cera Pro'] leading-none"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <SliderUI />
    </div>
  );
};

export default CartPage;
