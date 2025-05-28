import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_FINANCE_API_KEY;

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    getStockData: builder.query({
      query: (symbol: string) =>
        `?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`,
    }),
  }),
});

export const { useGetStockDataQuery } = financeApi;
