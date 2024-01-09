import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormConatiner";
import Loader from "../components/Loader";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <FormContainer>
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

      <form onSubmit={submitHandler} className="space-y-4 shadow-md p-4 ">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          
          type="submit"
          className=" px-4 py-2 bg-gray-700 text-white rounded-md"
        >
          Sign In
        </button>

        {/* {isLoading && <Loader />} */}
      </form>

      <div className="py-3">
        <p className="text-sm">
          New Customer?{" "}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="text-gray-500"
          >
            Register
          </Link>
        </p>
      </div>
    </FormContainer>
  );
};

export default LoginScreen;
