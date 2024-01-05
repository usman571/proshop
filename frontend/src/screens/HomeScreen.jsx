// import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";
import Message from "../components/message";
import { useGetProductsQuery } from "../slices/productApiSlice";
// import axios from "axios";

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     console.log(data[0]._id)
  //     setProducts(data);
  //   };
  //   fetchProducts()
  // }, []);

  return (
    <>
      {isLoading ? (
       <Loader/>
      ) : isError ? (
        <Message variant={'error'}>{isError?.data?.message || isError.error}</Message>
      ) : (
        <>
          {" "}
          <h1 className="text-gray-500 text-2xl">Latest Products </h1>
          <div className="flex flex-wrap lg:px-10">
            {products.map((item) => (
              <div
                key={item._id}
                className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4  p-2 "
              >
                <Product Product={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
