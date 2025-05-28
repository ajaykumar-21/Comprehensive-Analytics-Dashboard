import React from "react";
import { DashboardLayout } from "./components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-primary">
        Welcome to the Analytics Dashboard
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Use the sidebar to navigate between sections.
      </p>
    </DashboardLayout>
  );
}
