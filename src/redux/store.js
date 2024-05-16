import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/createApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsApi } from "../services/createNewsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
});

setupListeners(store.dispatch);
