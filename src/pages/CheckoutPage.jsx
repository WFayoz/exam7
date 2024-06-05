import React from "react";

const CheckoutPage = () => {
  return (
    <div>
      <div className="w-full lg:w-[65%] p-4 bg-white rounded-md mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
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
    </div>
  );
};

export default CheckoutPage;
