import React from "react";
import millify from "millify";

const GlobalCryptoStats = ({ globalStats }) => {
  console.log(globalStats);
  const {
    totalCoins,
    totalMarkets,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
  } = globalStats;
  return (
    <div className="flex flex-col m-10 pr-5 pl-5 pt-3 gap-4">
      <h1 className="text-5xl font-medium text-[white]">Global Crypto Stats</h1>
      <div className="h-40 flex flex-col flex-wrap gap-3">
        <div className="flex flex-col text-3xl">
          <p className=" text-xl text-[#eebc1d]">Total Cryptocurrencies</p>
          <p>{millify(totalCoins)}</p>
        </div>
        <div className="flex flex-col text-3xl ">
          <p className=" text-xl text-[#facc15]">Total Market Cap</p>
          <p>{millify(totalMarketCap)}</p>
        </div>
        <div className="flex flex-col  text-3xl ">
          <p className=" text-xl text-[#facc15]">Total Market</p>
          <p>{millify(totalMarkets)}</p>
        </div>
        <div className="flex flex-col  text-3xl ">
          <p className=" text-xl text-[#facc15]">Total Exchange</p>
          <p>{millify(totalExchanges)}</p>
        </div>
        <div className="flex flex-col  text-3xl ">
          <p className=" text-xl text-[#facc15]">Total 24H Volume</p>
          <p>{millify(total24hVolume)}</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalCryptoStats;
