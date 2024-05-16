import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" text-[whitesmoke] flex items-center justify-between h-20 mr-9 ml-9">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="h-16"
              src="https://wallpapersmug.com/download/3840x2400/ff7a4e/bitcoin-abstract-cryptocurrency.jpg"
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            <h1 className="text-4xl tracking-widest text-[#eebc1d] font-light">CRYPTOBVERSE</h1>
          </Link>
        </div>
        <div className="flex gap-14 text-2xl font-medium">
          <Link to={"/"}>Home</Link>
          <Link to={"/currencies"}>Cryptocurrencies</Link>
          <Link to={"/exchange"}>Exchange</Link>
          <Link to={"/news"}>News</Link>
        </div>
      </div>
      <div className="w-full h-px bg-white"></div>
    </div>
  );
};

export default Navbar;
