import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const TableDropDown = () => {
  const rocketEmoji = String.fromCodePoint(0x1f680);
  const brainEmoji = String.fromCodePoint(0x1f9e0);
  const trophyEmoji = String.fromCodePoint(0x1f3c6);
  const cactusEmoji = "🌵";

  return (
    <div className="absolute top-[240px] left-[15px] w-[60%] lg:mt-2">
      <div>
        <div className="flex items-center justify-evenly font-semibold lg:mr-0 mr-2">
          <MinusCircleIcon className="h-5 w-5 inline-block text-gray-600" />
          <span> {cactusEmoji}</span>
          <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
            Test database
          </button>
        </div>
        <div className="flex flex-col items-start lg:ml-10 ml-11 font-medium">
          <div className="flex items-center justify-center">
            <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
            <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
              Results
            </button>
          </div>
          <div className="flex items-center justify-center ">
            <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
            <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
              Messages
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center font-semibold ml-3">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span>{rocketEmoji}</span>
        <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
          HR
        </button>
      </div>
      <div className="flex items-center font-semibold ml-3">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span>{brainEmoji}</span>
        <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
          Growth
        </button>
      </div>
      <div className="flex items-center font-semibold ml-3">
        <PlusCircleIcon className="h-5 w-5 inline-block text-gray-600 mr-3" />
        <span className="text-[14px]">{trophyEmoji}</span>
        <button className="text-[14px] text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
          Customer data
        </button>
      </div>
    </div>
  );
};

export default TableDropDown;
