import React from "react";
import { Link } from "react-router-dom";
import Ratting from "./Ratting";
const Product = ({ Product }) => {
  return (
    <div className="rounded-md shadow-lg p-6 mt-4  ring-gray-100 ring-2">
      <Link to={`/product/${Product._id}`}>
        <img
          className="w-full h-52 object-cover  transition-transform transform scale-100 hover:scale-105"
          src={Product.image}
          alt="Product"
        />
      </Link>

      <div className="">
        <Link to={`/product/${Product._id}`}>
          <p className="font-bold text-xl mb-2">{Product.name}</p>
        </Link>
        <p className="text-gray-700 text-base line-clamp-3 ">
          {Product.description}
        </p>
      </div>
      <div>
        <Ratting
          value={Product.rating}
          text={`${Product.numReviews} reviews`}
        />
      </div>
      <div className="">
        <span className="text-gray-600 text-sm">Price:</span>
        <span className="text-lg font-bold text-gray-800">
          ${Product.price}
        </span>
      </div>
    </div>
  );
};

export default Product;
