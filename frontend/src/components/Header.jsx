import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <Link to="/" className="text-2xl font-medium">
            ProShop
          </Link>
        </div>
        <nav className="flex items-center space-x-4 ">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
          <Link to="/login" className="flex items-center">
            <FaUser className="mr-2" /> Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
