import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/createApi";
import CurrencyComp from "./CurrencyComp";
// import { Link } from "react-router-dom";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  const [cryptos, setCyptos] = useState(data?.data?.coins);
  console.log(cryptos);

  return (
    <div className="flex flex-col m-10 pr-5 pl-5 gap-7  overflow-auto">
      <h1 className="text-5xl font-medium text-[#ffffff]">
        Top 12 Crypto Currencies
      </h1>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-between gap-5">
          {cryptos.slice(0, 12).map((coin, index) => (
            <CurrencyComp coin={coin} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
