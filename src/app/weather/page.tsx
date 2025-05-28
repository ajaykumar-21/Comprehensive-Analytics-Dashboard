"use client";

import WeatherCard from "../components/cards/WeatherCard";
import WeatherChart from "../components/charts/WeatherChart";

const mockWeatherData = [
  { date: "Mon", temp: 26 },
  { date: "Tue", temp: 28 },
  { date: "Wed", temp: 25 },
  { date: "Thu", temp: 27 },
  { date: "Fri", temp: 30 },
  { date: "Sat", temp: 31 },
  { date: "Sun", temp: 29 },
];

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 space-y-6">
      <WeatherCard
        city="New York"
        temperature={28}
        condition="Cloudy"
        icon="04d"
      />
      <WeatherChart data={mockWeatherData} />
    </div>
  );
}
