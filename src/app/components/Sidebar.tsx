import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "Weather", href: "/weather" },
  { label: "News", href: "/news" },
  { label: "Finance", href: "/finance" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-gray-100 dark:bg-gray-800 p-6 flex flex-col space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-8">Dashboard</h2>
      <nav className="flex flex-col space-y-3">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
