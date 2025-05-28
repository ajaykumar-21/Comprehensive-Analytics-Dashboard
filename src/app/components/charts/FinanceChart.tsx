"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface FinanceChartProps {
  data: { date: string; price: number }[];
}

const FinanceChart: React.FC<FinanceChartProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 w-full max-w-4xl">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Stock Price Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
