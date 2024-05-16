import React from "react";

const ExchangeComp = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white flex flex-row justify-between items-center p-4 rounded-md shadow-md border">
      <div className="text-2xl font-semibold text-[#facc15]">{data.name}</div>
      <div className="text-lg text-[#facc01]">{data.code}</div>
    </div>
  );
};

export default ExchangeComp;
