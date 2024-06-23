import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import toggleBtn from "../../../public/Images/toggle-button.png";

const SqlSideBar = () => {
  return (
    <div className="w-[216px] bg-gray-100 text-[10px] font-semibold p-2 ml-[77%]">
      <h2 className="mb-3">SQL ID</h2>
      <div className="border-[1px] mb-3 border-gray-300 rounded-md bg-white p-2">
        Company SQL
      </div>
      <h2 className="mb-3">NAMED CONNECTION ID</h2>
      <div className="border-[1px] border-gray-300 rounded-md bg-white p-2 flex items-center justify-between mb-3">
        <h2>Order Entry</h2>
        <ChevronDownIcon className="w-4" />
      </div>
      <h2 className="mb-3">SQL Query</h2>
      <div className="border-[1px] mb-3 border-gray-300 rounded-md bg-white flex">
        <div className="bg-gray-100 w-10 text-center py-2">
          <h2>1</h2>
          <h2>2</h2>
          <h2>3</h2>
          <h2>4</h2>
          <h2>5</h2>
          <h2>6</h2>
          <h2>7</h2>
          <h2>8</h2>
          <h2>9</h2>
          <h2>10</h2>
        </div>
        <div className="p-2">
          <div>
            <h2 className="text-purple-500">SELECT</h2>
            <div className="ml-7">
              <div>
                . [ <span className="text-blue-400">code</span> ]
              </div>
              <div>
                . [ <span className="text-blue-400">firstName</span> ]
              </div>
              <div>
                . [ <span className="text-blue-400">lastName</span> ]
              </div>
              <div>
                . [ <span className="text-blue-400">locationID</span> ]
              </div>
            </div>
            <div className="flex ">
              <h2 className="text-purple-500 mr-1">FROM</h2>
              <div>
                [<span className="text-blue-400">SampleDB</span>] .
              </div>
            </div>
            <h3 className="ml-[34px]">[ dbo ]</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2>Is Key provider:</h2>
        <Image src={toggleBtn} alt="" />
      </div>
    </div>
  );
};

export default SqlSideBar;
