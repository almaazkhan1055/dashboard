"use client";
import { useState } from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import MainContent from "../mainContent/page";
import TableComponent from "../table/page";
import SqlSideBar from "../sqlSideBar/page";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <MainContent />
          <SqlSideBar />
        </div>
        <TableComponent />
      </div>
    </div>
  );
}
