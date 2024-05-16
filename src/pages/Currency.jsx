import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/createApi";
import CurrencyComp from "../components/CurrencyComp";
import Loader from "react-js-loader";

const Currency = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredData = data?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    }
  }, [data, searchTerm]);

  return (
    <div className="flex h-full flex-col m-10 pr-5 pl-5 gap-10 items-center">
      <h1 className="text-5xl font-medium text-[whitesmoke]">
        Cryptocurrencies
      </h1>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="w-2/3 h-9 text-xl p-3 rounded border-none text-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isFetching ? (
        <div className="h-screen flex justify-center">
          <Loader size="150" bgColor="#facc15" />
        </div>
      ) : (
        <div className="flex w-full flex-wrap gap-5 justify-center">
          {cryptos.map((coin, index) => (
            <CurrencyComp coin={coin} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Currency;
