"use client";

import React, { useEffect, useState } from "react";

// Define the props type for StockCard component
interface StockCardProps {
  symbol: string;
  price: number;
  change: number;
  high: number;
  low: number;
  volume: number;
}

const StockCard: React.FC<StockCardProps> = ({
  symbol,
  price,
  change,
  high,
  low,
  volume,
}) => {
  const isPositive = change >= 0; // Determine if the price change is positive (for green/red display)
  const [formattedVolume, setFormattedVolume] = useState("");

  // Format the volume number when the component mounts or when volume updates
  useEffect(() => {
    setFormattedVolume(volume.toLocaleString());
  }, [volume]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 w-full max-w-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {symbol}
        </h2>
        <span
          className={`text-sm font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>
      <div className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
        <div>Current Price: ${price.toFixed(2)}</div>
        <div>Day High: ${high.toFixed(2)}</div>
        <div>Day Low: ${low.toFixed(2)}</div>
        <div>Volume: {formattedVolume}</div>
      </div>
    </div>
  );
};

export default StockCard;
