import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";

const CurrencyComp = ({ coin }) => {
  console.log(coin);
  return (
    <div className=" w-[23%] bg-white text-black rounded-xl flex flex-col p-5 gap-4">
      <div className="flex items-center justify-between">
        <Link to={`/crypto/${coin?.uuid}/${coin.name}/${coin.symbol}`}>
          <p className="text-2xl font-medium">
            {coin?.rank}. {coin?.name}
          </p>
        </Link>
        <img className="w-12 h-12" src={coin?.iconUrl} alt={coin?.symbol} />
      </div>
      <div className=" text-lg">
        <p>Price : {millify(coin?.price)}</p>
        <p>Market Cap : {millify(coin?.marketCap)}</p>
        <p>Daily Change : {coin?.change}%</p>
      </div>
    </div>
  );
};

export default CurrencyComp;
