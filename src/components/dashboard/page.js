"use client";
import { useState } from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import MainContent from "../mainContent/page";
import TableComponent from "../table/page";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <MainContent />
        <TableComponent />
      </div>
    </div>
  );
}
