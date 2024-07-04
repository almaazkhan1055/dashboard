"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import DatabaseContext from "../../app/context/databaseContext";

const TableDropDown = ({ nestedClickHandler }) => {
  const { setDatabaseDetails } = useContext(DatabaseContext);
  const rocketEmoji = String.fromCodePoint(0x1f680);
  const brainEmoji = String.fromCodePoint(0x1f9e0);
  const trophyEmoji = String.fromCodePoint(0x1f3c6);
  const cactusEmoji = "🌵";

  const [showChildren, setShowChildren] = useState(false);

  const handleNavigation = (e) => {
    if (e.target.innerText === "Test database") {
      setDatabaseDetails(`${cactusEmoji} ${e.target.innerText}`, [
        "Results",
        "Messages",
      ]);
    } else if (e.target.innerText === "HR") {
      setDatabaseDetails(`${rocketEmoji} ${e.target.innerText}`, [
        "Results",
        "Messages",
      ]);
    } else if (e.target.innerText === "Growth") {
      setDatabaseDetails(`${brainEmoji} ${e.target.innerText}`, [
        "Results",
        "Messages",
      ]);
    } else if (e.target.innerText === "Customer data") {
      setDatabaseDetails(`${trophyEmoji} ${e.target.innerText}`, [
        "Results",
        "Messages",
      ]);
    }
    setShowChildren(!showChildren);
    nestedClickHandler();
  };

  return (
    <div className="absolute top-[240px] left-[15px] w-[60%] lg:mt-2">
      <div className="flex flex-col items-center justify-evenly font-semibold md:mr-[28px] mr-[48px]">
        <div>
          <MinusCircleIcon className="h-5 w-5 inline-block text-gray-600" />
          <span>{cactusEmoji}</span>
          <button
            className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
            onClick={handleNavigation}
          >
            Test database
          </button>
        </div>

        {showChildren && (
          <div className="flex flex-col items-start lg:ml-10 ml-11 font-medium">
            <div className="flex items-center justify-center">
              <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
              <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md font-semibold">
                Results
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
              <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md font-semibold">
                Messages
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center font-semibold ml-2 mt-1">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span>{rocketEmoji}</span>
        <button
          className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
          onClick={handleNavigation}
        >
          HR
        </button>
      </div>
      <div className="flex items-center font-semibold ml-2 mt-1">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span>{brainEmoji}</span>
        <button
          className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
          onClick={handleNavigation}
        >
          Growth
        </button>
      </div>
      <div className="flex items-center font-semibold ml-2 mt-1">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span className="text-[14px]">{trophyEmoji}</span>
        <button
          onClick={handleNavigation}
          className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
        >
          Customer data
        </button>
      </div>
    </div>
  );
};

export default TableDropDown;
