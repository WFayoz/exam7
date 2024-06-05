import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import HomePage from "./pages/HomePage";
import AddressPage from "./pages/AddressPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ViewPage from "./pages/ViewPage";
import AccountPage from "./pages/AccountPage";

export const Fanta = createContext();
export const Cola = createContext();
const App = () => {

  const [id, setId] = useState([]);
  const [secid, setSecId] = useState([]);
  return (
    <Fanta.Provider value={{ id, setId }}>
      <Cola.Provider value={{ secid, setSecId }}>
        <div className="flex flex-col mx-auto w-[1240px]  px-5 bg-white">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Address" element={<AddressPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/Checkout" element={<CheckoutPage />} />
              <Route path="/shop" element={<ViewPage />} />
              <Route path="/Account" element={<AccountPage />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </Cola.Provider>
    </Fanta.Provider>
  );
};

export default App;
