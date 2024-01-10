import { FaChevronDown, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
import logo from "../assets/logo.png";
import { useState } from "react";
// import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      // dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className="bg-gray-700">
      <nav className="container mx-auto flex items-center justify-between py-2 lg:pr-20 ">
        <Link to="/">
          <div className="flex items-center text-white">
            <img src={logo} alt="ProShop" className="mr-2" />
            <span className="text-xl font-semibold">ProShop</span>
          </div>
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNav}
        >
          <span className="text-2xl">&#8801;</span>
        </button>
        <div className="hidden lg:flex lg:items-center" id="navbarNav">
          {/* <SearchBox /> */}

          <Link to="/cart" className="ml-4 flex items-center text-white">
            <FaShoppingCart className="mr-2" /> Cart
            {cartItems.length > 0 && (
              <span className="ml-2 bg-success rounded-full px-2 py-1 text-xs">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>

          {userInfo ? (
            <div className="ml-4">
              <div className="group inline-block ">
                <button className="text-white focus:outline-none flex items-center  ">
                  {userInfo.name}{" "}
                  <FaChevronDown className="ml-1 text-sm mt-1" />
                </button>
                <div className="hidden group-hover:block bg-white text-gray-800 absolute p-2 rounded-md shadow-md">
                  <Link to="/profile" className="block px-4 py-2">
                    Profile
                  </Link>
                  <button onClick={logoutHandler} className="block px-4 py-2">Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="ml-4 text-white flex items-center">
              <FaUser className="mr-1" /> Sign In
            </Link>
          )}

          {userInfo && userInfo.isAdmin && (
            <div className="ml-4 group inline-block">
              <button className="text-white focus:outline-none flex items-center">
                Admin <FaChevronDown className="ml-1 mt-1" />
              </button>
              <div className="hidden z-10 group-hover:block bg-white text-gray-800 absolute p-2 rounded-md shadow-md">
                <Link to="/admin/productlist" className="block px-4 py-2">
                  Products
                </Link>
                <Link to="/admin/orderlist" className="block px-4 py-2">
                  Orders
                </Link>
                <Link to="/admin/userlist" className="block px-4 py-2">
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
