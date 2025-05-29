"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
// Import the actual layout dynamically
const DashboardLayout = dynamic(() => import("./DashboardLayout"), {
  ssr: false,
});

interface Props {
  children: ReactNode;
}

const DashboardLayoutClient = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutClient;
