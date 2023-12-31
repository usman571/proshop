import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <a href="#home" className="text-2xl font-medium">
            ProShop
          </a>
        </div>
        <nav className="flex items-center space-x-4 ">
          <a href="/cart" className="flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </a>
          <a href="/login" className="flex items-center">
            <FaUser className="mr-2" /> Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
