"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Define the expected props for the NewsCard component
interface NewsCardProps {
  title: string;
  imageUrl: string;
  description: string;
  source: string;
  publishedAt: string;
  onClick: () => void; // Function to handle card click
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  imageUrl,
  description,
  source,
  publishedAt,
  onClick,
}) => {
  const [formattedDate, setFormattedDate] = useState(""); // State to store formatted date string

  // Format the published date once when the component mounts or when publishedAt changes
  useEffect(() => {
    const date = new Date(publishedAt).toLocaleString();
    setFormattedDate(date);
  }, [publishedAt]);
  return (
    <div
      className="flex bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={32}
        height={32}
        className="w-32 h-32 object-cover flex-shrink-0"
      />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span>{source}</span> • <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; // Export the component for use elsewhere
