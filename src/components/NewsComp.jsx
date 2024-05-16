import React from "react";
import { useGetNewsQuery } from "../services/createNewsApi";
import NewsCard from "./NewsCard";

const NewsComp = () => {
  const { data, isFetching } = useGetNewsQuery();
  const newsArray = data?.data;

  return (
    <div className="flex flex-col m-10 pr-5 pl-5 pt-3 gap-6">
      <h1 className="text-5xl font-medium text-[white]">Latest Crypto News</h1>
      {isFetching ? (
        "Loading..."
      ) : (
        <div className="w-full flex flex-wrap justify-between gap-10">
          {newsArray?.slice(0,6).map((news, index) => (
            <NewsCard data={news} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsComp;
