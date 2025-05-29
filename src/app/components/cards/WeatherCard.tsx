import React from "react";
import Image from "next/image";

// Define the props type for WeatherCard component
type WeatherCardProps = {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
};

const WeatherCard = ({
  city,
  temperature,
  condition,
  icon,
}: WeatherCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full max-w-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{city}</h3>
          <p className="text-sm text-gray-500">{condition}</p>
        </div>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <div className="mt-2 text-3xl font-bold">{temperature}°C</div>
    </div>
  );
};

export default WeatherCard;
