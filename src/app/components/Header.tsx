"use client";

import React, { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode on <html> element
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-60 right-0 bg-white dark:bg-gray-900 z-20">
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex items-center space-x-6">
        {/* Theme toggle */}
        <button
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* User profile dropdown placeholder */}
        <div className="relative group">
          <button className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></button>
          <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md p-4">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                <button>Profile Settings</button>
              </li>
              <li>
                <button>Notifications</button>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
