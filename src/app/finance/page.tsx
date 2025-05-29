"use client";

import React from "react";
import StockCard from "../components/cards/StockCard";
import FinanceChart from "../components/charts/FinanceChart";

//mockData for testing
const mockData = [
  { date: "Mon", price: 121.45 },
  { date: "Tue", price: 122.1 },
  { date: "Wed", price: 119.85 },
  { date: "Thu", price: 123.22 },
  { date: "Fri", price: 124.8 },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
      <StockCard
        symbol="AAPL"
        price={124.8}
        change={1.95}
        high={125.6}
        low={119.8}
        volume={22034500}
      />
      <FinanceChart data={mockData} />
    </div>
  );
}
