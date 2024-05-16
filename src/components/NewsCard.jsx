import React, { useState } from "react";
// import millify from "millify";
import moment from "moment";

const NewsCard = ({ data }) => {
  // const [showFullDescription, setShowFullDescription] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  const formattedDate = moment(data.createdAt).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  const fullDescription = data?.description;

  return (
    <div className="bg-white w-[48%] flex shadow-md p-4">
      <div className="flex w-full overflow-hidden">
        <img
          src={data?.thumbnail}
          className="w-full h-full object-contain"
          alt="Thumbnail"
        />
      </div>
      <div className="ml-4 text-black flex flex-col justify-center">
        <p className="text-gray-500">{formattedDate}</p>
        <h2 className="text-xl font-bold">{data?.title}</h2>
        <p>{fullDescription}</p>
      </div>
    </div>
  );
};

export default NewsCard;
