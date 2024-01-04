import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3 min-h-[64vh]">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
