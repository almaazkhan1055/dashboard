import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import toggleBtn from "../../../public/Images/toggle-button.png";
import TabContent from "../tabContent/page";

const Section = ({ title, children }) => (
  <section className="mb-3">
    <h2 className="mb-3">{title}</h2>
    {children}
  </section>
);

const Card = ({ children, className }) => (
  <div
    className={`border border-gray-300 rounded-md bg-white p-2 ${className}`}
  >
    {children}
  </div>
);

const LineNumberColumn = () => (
  <div className="bg-gray-100 w-10 text-center py-2">
    {Array.from({ length: 10 }, (_, i) => (
      <h2 key={i}>{i + 1}</h2>
    ))}
  </div>
);

const SqlSideBar = () => {
  return (
    <aside className="w-56 text-xs font-semibold p-2 bg-gray-100 border border-gray-200">
      <Section title="SQL ID">
        <Card>Company SQL</Card>
      </Section>

      <Section title="NAMED CONNECTION ID">
        <Card className="flex items-center justify-between">
          <h2>Order Entry</h2>
          <ChevronDownIcon className="w-4" />
        </Card>
      </Section>

      <Section title="SQL Query">
        <div className="border border-gray-300 rounded-md bg-white flex">
          <LineNumberColumn />
          <div className="pt-2">
            <TabContent />
          </div>
        </div>
      </Section>

      <div className="flex items-center justify-between mt-3">
        <h2>Is Key provider:</h2>
        <Image src={toggleBtn} alt="Toggle button" />
      </div>
    </aside>
  );
};

export default SqlSideBar;
