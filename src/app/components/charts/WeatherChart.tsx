import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type WeatherChartProps = {
  data: { date: string; temp: number }[];
};

const WeatherChart = ({ data }: WeatherChartProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full h-64">
      <h3 className="text-lg font-semibold mb-2">7-Day Forecast</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
