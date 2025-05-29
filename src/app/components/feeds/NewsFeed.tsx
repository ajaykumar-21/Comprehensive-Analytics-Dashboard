"use client";

import React, { useState } from "react";
import Image from "next/image";
import NewsCard from "../cards/NewsCard";
import { Dialog } from "@headlessui/react";

// Defines the shape of a single news article item
interface NewsItem {
  title: string;
  urlToImage: string;
  description: string;
  source: { name: string };
  publishedAt: string;
  content: string;
  url: string;
}

// Defines the props expected by a NewsFeed component
interface NewsFeedProps {
  articles: NewsItem[]; // Array of news article objects
}

const NewsFeed: React.FC<NewsFeedProps> = ({ articles }) => {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  console.log("Image URL:", selected?.urlToImage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, idx) => (
          <NewsCard
            key={idx}
            title={article.title}
            imageUrl={article.urlToImage || "/placeholder.jpg"}
            description={article.description || ""}
            source={article.source.name}
            publishedAt={article.publishedAt}
            onClick={() => setSelected(article)}
          />
        ))}
      </div>

      {/* Modal for detail view */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="fixed z-50 inset-0"
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
          <Dialog.Panel className="max-w-xl bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full">
            <Dialog.Title className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {selected?.title}
            </Dialog.Title>
            <Image
              src={selected?.urlToImage || "/news.jpg"}
              alt="news"
              width={300}
              height={200}
              className="rounded-md"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selected?.content || selected?.description}
            </p>
            <a
              href={selected?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read Full Article
            </a>
            <button
              onClick={() => setSelected(null)}
              className="block mt-6 ml-auto text-sm text-red-500"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NewsFeed;
