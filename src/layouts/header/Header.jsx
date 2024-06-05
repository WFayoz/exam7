import React, { useContext } from "react";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/headerSearch.svg";
import basket from "../../assets/icons/headerBasket.svg";
import login from "../../assets/icons/headerLogin.svg";
import { Link } from "react-router-dom";
import { Cola } from "../../App";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { secid, setSecId } = useContext(Cola);

  return (
    <div className=" flex w-full z-50 mb-20 ">
      <nav className="w-full flex max-w-[1200px] bg-white  border-b-green-500  fixed border-b items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex gap-12 items-center justify-center">
          <NavLink
            to="/"
            className="text-neutral-700 text-base font-normal py-5 border-b-4 border-transparent"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-neutral-700 text-base font-normal py-5 border-b-4 border-transparent"
          >
            Shop
          </NavLink>
          <Link className="text-neutral-700 text-base font-normal py-5 border-b-4 border-transparent">
            Plant Care
          </Link>
          <Link className="text-neutral-700 text-base font-normal py-5 border-b-4 border-transparent">
            Blogs
          </Link>
        </ul>
        <div className="flex items-center justify-center gap-12">
          <button>
            <img src={search} alt="Search" />
          </button>
          <Link
            to="/cart"
            className="relative w-9 h-7 flex items-center justify-center "
          >
            <img src={basket} alt="basket" />
            <div className="flex absolute right-0 top-0 w-4 h-4 bg-green-500 rounded-full text-white items-center justify-center text-[8px]">
              {secid.length}
            </div>
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="flex gap-1 items-center bg-green-500 rounded-lg justify-center px-[17px] py-2">
                <img src={login} alt="login" />

                <p className="text-white text-base font-medium">Login</p>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
