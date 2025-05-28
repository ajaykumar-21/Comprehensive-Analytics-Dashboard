import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (city: string) =>
        `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
    getForecast: builder.query({
      query: (latLon: { lat: number; lon: number }) =>
        `onecall?lat=${latLon.lat}&lon=${latLon.lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = weatherApi;
