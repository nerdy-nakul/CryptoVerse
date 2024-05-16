import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import millify from "millify";
import ChartComp from "../components/ChartComp";
import Loader from "react-js-loader";

const CurrencyDetail = () => {
  const { coinID, coinName, coinSymbol } = useParams();
  // console.log(coinID, coinName, coinSymbol);

  const [coinData, setcoinData] = useState(null);
  const [priceData, setpriceData] = useState(null);
  const [time, settime] = useState("24h");

  const fetchCoinData = async () => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinID}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1877116e40msh88bb5596f4361b1p1720adjsned9fd0f3e117",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setcoinData(result);
      console.log("coin data -> ", result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPriceData = async () => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinID}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${time}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1877116e40msh88bb5596f4361b1p1720adjsned9fd0f3e117",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setpriceData(result?.data);
      console.log("price ->", result?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    settime(e.target.value);
  };

  useEffect(() => {
    fetchCoinData();
    fetchPriceData();
  }, [coinID]);

  useEffect(() => {
    fetchPriceData();
  }, [time]);

  if (coinData == null || priceData == null) {
    return (
      <div className="h-screen flex justify-center">
        <Loader size="150" bgColor="#facc15" />
      </div>
    );
  }
  
  return (
    <div className="flex">
      <div className="w-1/3 flex flex-col items-center justify-center p-7 border-r-2">
        <img
          className=" w-1/3"
          src={coinData?.data?.coin?.iconUrl}
          alt={coinData?.data?.coin?.name}
        />
        <h1 className="font-semibold text-4xl my-3">
          {coinData?.data?.coin?.name}
        </h1>
        <p className="text-lg text-center">
          {coinData?.data?.coin?.description}
        </p>
        <p className="text-2xl font-medium mt-3">
          Price : {millify(coinData?.data?.coin?.price)}
        </p>
        <p className="text-2xl font-medium">
          Market Cap :{millify(coinData?.data?.coin?.marketCap)}
        </p>
      </div>
      <div className="w-2/3 flex flex-col items-center justify-center p-8 text-black">
        <ChartComp data={priceData} />
        <div className="flex">
          <select
            className="w-96 p-1 rounded"
            onChange={handleChange}
            name=""
            id=""
          >
            <option value="24h">24 Hours</option>
            <option value="30d">30 Days</option>
            <option value="1y">1 Year</option>
            <option value="3y">3 Years</option>
            <option value="5y">5 Years</option>
            <option value="3h">3 Hours</option>
            <option value="7d">7 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetail;
