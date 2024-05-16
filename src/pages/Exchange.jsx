import React, { useState, useEffect } from "react";
import ExchangeComp from "../components/ExchangeComp";
import Loader from "react-js-loader"

const Exchange = () => {
  const [exchangeData, setExchangeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://kaiko-kaiko-digital-assets-reference-data-v1.p.rapidapi.com/v1/exchanges";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1877116e40msh88bb5596f4361b1p1720adjsned9fd0f3e117",
          "X-RapidAPI-Host":
            "kaiko-kaiko-digital-assets-reference-data-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setExchangeData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!exchangeData) {
    return <div className="h-screen flex justify-center">
    <Loader size="150" bgColor="#facc15" />
  </div>;
  }

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {exchangeData?.data.map((data, index) => {
        return <ExchangeComp data={data} key={index} />;
      })}
    </div>
  );
};

export default Exchange;
