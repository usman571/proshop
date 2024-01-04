import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data[0]._id)
      setProducts(data);
    };
    fetchProducts()
  }, []);

  return (
    <>
      <h1 className="text-gray-500 text-2xl">Latest Products </h1>
      <div className="flex flex-wrap lg:px-10">
        {products.map((item) => (
          <div key={item._id} className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4  p-2 ">
            <Product Product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
