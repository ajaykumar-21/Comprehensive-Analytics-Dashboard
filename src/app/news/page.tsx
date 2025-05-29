"use client";

import React from "react";
import NewsFeed from "../components/feeds/NewsFeed";

//mockData for testing
const mockArticles = [
  {
    title: "AI is transforming the tech industry",
    urlToImage: "https://via.placeholder.com/300x200",
    description: "Artificial Intelligence is at the core of new innovations.",
    source: { name: "TechCrunch" },
    publishedAt: new Date().toISOString(),
    content: "The role of AI in software development is growing...",
    url: "https://techcrunch.com",
  },
  {
    title: "Stock markets see major rebound",
    urlToImage: "https://via.placeholder.com/300x200",
    description: "Markets recover after last week’s dip.",
    source: { name: "Bloomberg" },
    publishedAt: new Date().toISOString(),
    content: "After a week of losses, the S&P 500 surged...",
    url: "https://bloomberg.com",
  },
];

export default function NewsPage() {
  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Latest News
      </h1>
      <NewsFeed articles={mockArticles} />
    </main>
  );
}
