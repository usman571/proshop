import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Ratting"; // Corrected the import name to match the component's filename
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  // Check if the product is not found

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProducts()
  }, [productId]);

  return (
    <div className="my-8">
      <Link
        to="/"
        className="h-8 w-20 font-medium bg-slate-200 hover:bg-slate-400 transition-all p-2 ml-5 rounded-md"
      >
        Go Back
      </Link>

      <div className="flex flex-col md:flex-row container mx-auto mt-8 gap-5 items-center justify-center md:justify-start">
        <div className="w-full md:w-1/3">
          <img
            className="w-full rounded-md"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="w-full md:w-1/3">
          <ul className="flex flex-col gap-2">
            <li>
              <h3 className="text-2xl text-gray-800 font-bold">
                {product.name}
              </h3>
            </li>
            <hr className="bg-gray-300 h-[2px] my-2" />
            <li>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </li>
            <hr className="bg-gray-300 h-[2px] my-2" />
            <li>
              <p className="text-gray-700 font-medium">
                Price: ${product.price}
              </p>
            </li>
            <li>
              <p className="text-gray-700 font-medium">
                Description: {product.description}
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <div className="border-2 rounded-md border-gray-500 p-4">
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-medium">Price:</span>
              <span className="text-gray-800 font-semibold">
                ${product.price}
              </span>
            </div>
            <hr className="bg-gray-300 h-[2px]" />

            <div className="flex justify-between my-4">
              <span className="text-gray-700 font-medium">Status:</span>
              <span
                className={`text-${
                  product.countInStock > 0 ? "green" : "red"
                }-700 font-semibold`}
              >
                {product.countInStock > 0 ? "In Stock" : "Out of stock"}
              </span>
            </div>
            <hr className="bg-gray-300 h-[2px]" />

            <div className="flex mt-3">
              <button
                className={`inline-flex w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white ${
                  product.countInStock > 0
                    ? "hover:bg-blue-600"
                    : "cursor-not-allowed opacity-50"
                }`}
                disabled={product.countInStock === 0}
              >
                {product.countInStock > 0 ? "Add To Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
