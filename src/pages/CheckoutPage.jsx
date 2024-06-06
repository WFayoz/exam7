import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };

  const calculateTotal = () => {
    let total = 0;
    selectedProducts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="flex items-start gap-[70px] mt-10  justify-end ">
      <div className="w-full bg-white  rounded-md mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4 leading-nonetext-neutral-700 text-[17px] font-bold font-['Cera Pro'] leading-none">
          Billing Address
        </h2>
        <form>
          <div className="flex justify-between">
            <div className="mb-4 w-[46%]">
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
            <div className="mb-4 w-[46%]">
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">Country / Region *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              >
                <option value="">Select a country / region</option>
              </select>
            </div>
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">Town / City *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Street Address *</label>
            <div className="flex justify-between">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded mt-1 w-[47%] focus:outline-green-500"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded mt-1 w-[47%] focus:outline-green-500"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">State *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              >
                <option value="">Select a state</option>
              </select>
            </div>
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">Zip *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">Email Address *</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
            <div className="mb-4 w-[47%]">
              <label className="block text-gray-700">Phone Number *</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="ship-to-different-address"
              className="mr-2 focus:outline-green-500"
            />
            <label
              htmlFor="ship-to-different-address"
              className="text-gray-700"
            >
              Ship to a different address?
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Order Notes (optional)
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-green-500"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex items-end flex-col justify-end">
        <h1 className="text-neutral-700 w-full text-start text-[17px] font-bold leading-none">
          Your Order
        </h1>
        <div className="flex w-full items-center justify-between py-6 border-b border-b-black">
          <h1 className="text-neutral-700 text-base font-medium leading-none">
            Products
          </h1>
          <h1 className="text-neutral-700 text-base font-medium  leading-none">
            Subtotal
          </h1>
        </div>
        <div className="h-[300px] overflow-scroll">
          {selectedProducts.map((item) => (
            <div
              key={item.id}
              className="w-[405px] h-[70px] m-2 flex items-center bg-[#FBFBFB] mb-[10px]"
            >
              <img
                src={item.image_url}
                alt="photo"
                className="h-full w-[70px]"
              />
              <div className="ml-[11px]  w-[140px]">
                <p className="text-[#3D3D3D] text-[16px] mb-[0px] font-medium">
                  {item.common_name}
                </p>
                <p className="text-[14px] text-[#949494] font-normal">
                  SKU:{" "}
                  <span className="text-[#727272] text-[14px]">{item.id}</span>
                </p>
              </div>
              <p className="text-[#727272] ml-[30px] text-[16px] w-[42px]">
                (x {item.quantity})
              </p>
              <p className="text-[#46A358] font-bold text-[18px] ml-[35px] w-[70px]">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center w-[321px] justify-between pt-5">
          <h2 className="Subtotal">Subtotal:</h2>
          <span className="text-right text-neutral-700 text-lg font-medium leading-none">
            ${calculateTotal()}
          </span>
        </div>

        <div className="flex items-center w-[321px] justify-between pt-5">
          <h2 className="Subtotal">Coupon Discount:</h2>
          <span className="text-right text-neutral-700 text-lg font-medium leading-none">
            00
          </span>
        </div>

        <div className="flex items-center w-[321px] justify-between pt-5">
          <h2 className="Subtotal">Shipping:</h2>
          <span className="text-right text-neutral-700 text-lg font-medium leading-none">
            $16
          </span>
        </div>
        <div className="text-[#46A358] p-2 pt-1 border-t border-t-black w-[321px]  flex items-center justify-between ">
          <p className="text-neutral-700 text-base font-bold leading-none">
            Total
          </p>
          <p className="text-right text-green-500 text-lg font-bold  leading-non">
            ${calculateTotal()}
          </p>
        </div>
        <div className="flex w-[321px] flex-col items-start justify-start mt-4">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="mb-2">
            <input
              type="radio"
              id="paypal"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="paypal" className="text-gray-700">
              PayPal
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="direct-bank-transfer"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="direct-bank-transfer" className="text-gray-700">
              Direct Bank Transfer
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="cash-on-delivery"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="cash-on-delivery" className="text-gray-700">
              Cash on Delivery
            </label>
          </div>
        </div>
        <Link to="/done">

        <button className="w-[321px] h-10 bg-green-500 rounded-[3px]  text-white text-[15px] font-bold  leading-none mt-5">
          Place Order
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
