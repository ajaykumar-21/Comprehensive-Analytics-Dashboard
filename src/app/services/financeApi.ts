import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Get the API key from environment variables (NEXT_PUBLIC_ ensures it's exposed to the frontend)
const API_KEY = process.env.NEXT_PUBLIC_FINANCE_API_KEY;

export const financeApi = createApi({
  reducerPath: "financeApi", // Unique key in the Redux store for this slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query", // Base API endpoint
  }),
  endpoints: (builder) => ({
    getStockData: builder.query({
      // Define the "getStockData" endpoint (for fetching daily stock data)
      query: (symbol: string) =>
        `?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`,
    }),
  }),
});

// Export the generated React hook for use inside components
export const { useGetStockDataQuery } = financeApi;
