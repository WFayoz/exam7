import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import HomePage from "./pages/HomePage";
import AddressPage from "./pages/AddressPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ViewPage from "./pages/ViewPage";
import AccountPage from "./pages/AccountPage";

const App = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[1240px] w-full px-5 bg-white">
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
  );
};

export default App;
