"use client";
import Dashboard from "@/components/dashboard/page";
import React from "react";
import { DatabaseProvider } from "../app/context/databaseContext";

const Page = () => {
  return (
    <>
      <DatabaseProvider>
        <Dashboard />
      </DatabaseProvider>
    </>
  );
};

export default Page;
