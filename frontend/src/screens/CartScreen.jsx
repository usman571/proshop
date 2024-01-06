import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Message from "../components/message";
import { addToCart, removeFromCart } from "../slices/createSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
 
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-8/12 mx-auto md:mx-0 mb-8 md:mb-0">
        <h1 className="mb-6 text-2xl md:text-3xl font-semibold">
          Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item._id} className="py-4 md:py-6">
                <div className="flex ">
                  <div className="md:w-1/6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <div className="md:w-2/6 md:mx-4">
                    <Link
                      to={`/product/${item._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="md:w-1/6">${item.price}</div>
                  <div className="md:w-1/6">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                      className="border border-gray-300 rounded-md px-2 py-1"
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:w-1/6">
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="md:w-4/12 mx-auto md:mx-0">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </h2>
          <p className="text-xl mb-4">
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </p>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
