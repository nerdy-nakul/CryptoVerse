import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "X-RapidAPI-Key": "1877116e40msh88bb5596f4361b1p1720adjsned9fd0f3e117",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1";

const createRequest = (url) => ({
  url,
  headers: newsApiHeaders,
});

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest("/coindesk"),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
