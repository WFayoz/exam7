import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cola } from "../App";
import Data from "../services/data";

const CartPage = () => {
  const { secid, setSecId } = useContext(Cola);
  console.log(secid);

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
          <div>
            {Data.map((item) =>
              secid.map((ele) => {
                if (item.id === ele) {
                  return <img key={item.id} src={item.image_url} alt="img" />;
                }
                return null;
              })
            )}
          </div>
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
            <p className="text-neutral-700 text-[15px] font-normal">Subtotal</p>
            <p className="text-neutral-700 text-[15px] font-normal">Coupon</p>
            <p className="text-neutral-700 text-[15px] font-normal">Shipping</p>
            <h1 className="text-neutral-700 text-base font-bold">Total</h1>
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
    </div>
  );
};

export default CartPage;
