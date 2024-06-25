import React, { useContext } from "react";
import DatabaseContext from "../../app/context/databaseContext";
import { ClockIcon } from "@heroicons/react/24/outline";
import TabComponent from "../tabComponent/page";

const QueryHeader = () => {
  const { databaseInfo } = useContext(DatabaseContext);
  const { databaseName, relatedTabs } = databaseInfo;

  return (
    <div className="flex flex-col gap-9">
      <div className="flex items-center justify-between p-8 text-2xl">
        <h2>{databaseName}</h2>
        <div className="flex gap-5">
          <button className="bg-gray-100 p-2 rounded-md text-gray-500 flex items-center justify-center text-sm">
            <ClockIcon className="w-4" />
            Schedule
          </button>
          <button className="bg-blue-500 p-2 rounded-md text-white text-sm">
            Run Query
          </button>
        </div>
      </div>
      <TabComponent relatedTabs={relatedTabs} />
    </div>
  );
};

export default QueryHeader;
