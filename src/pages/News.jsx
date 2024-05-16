import React from "react";
import { useGetNewsQuery } from "../services/createNewsApi";
import NewsCard from "../components/NewsCard";
import Loader from "react-js-loader"

const News = () => {
  const { data, isFetching } = useGetNewsQuery();
  const newsArray = data?.data;

  return (
    <div className="flex flex-col m-10 pr-5 pl-5 pt-3 gap-6">
      <h1 className="text-5xl font-medium text-[white] text-center m-5">
        Crypto News
      </h1>
      {isFetching ? (
        <div className="h-screen flex justify-center">
          <Loader size="150" bgColor="#facc15" />
        </div>
      ) : (
        <div className="w-full flex flex-wrap justify-between gap-10">
          {newsArray?.map((news, index) => (
            <NewsCard data={news} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
