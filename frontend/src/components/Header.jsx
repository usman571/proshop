import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <Link to="/" className="text-2xl font-medium">
            ProShop
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center relative">
            <FaShoppingCart className="mr-2 " /> Cart
            {cartItems.length > 0 && (
              <div className="absolute top-0 left-14 bg-red-500 text-white h-6 w-6 flex items-center justify-center rounded-full">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
          <Link to="/login" className="flex items-center">
            <FaUser className={cartItems.length > 0 ? "ml-6 mr-2" : " mr-2"} />{" "}
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
