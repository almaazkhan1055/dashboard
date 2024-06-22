import React from "react";

const TableComponent = () => {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const serialNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="table-container absolute w-full bottom-0">
      <table className="min-w-full bg-white border border-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="border border-gray-300 text-center text-xs font-bold text-gray-500 uppercase"></th>
            {letters.map((letter, index) => (
              <th
                key={index}
                className="border border-gray-300 text-center text-xs font-bold text-gray-500 uppercase py-2"
              >
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {serialNumbers.map((number) => (
            <tr key={number}>
              <td className="border border-gray-300 text-center w-10 text-sm text-gray-500 font-bold">
                {number}
              </td>
              {letters.map((index) => (
                <td
                  key={`${number}-${index}`}
                  className="border border-gray-300 text-center text-sm font-bold text-gray-500"
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
