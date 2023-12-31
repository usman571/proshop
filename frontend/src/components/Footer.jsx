import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40  flex items-center justify-center">
      <p className="font-medium"> ProShop ${date}</p>
    </div>
  );
};

export default Footer;
