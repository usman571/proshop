import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3 ]">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
