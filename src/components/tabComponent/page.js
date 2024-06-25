import { Tabs } from "flowbite-react";
import React from "react";
import TabContent from "../tabContent/page";

function TabComponent({ relatedTabs }) {
  return (
    <Tabs aria-label="Default tabs" variant="default">
      {relatedTabs.map((tab, index) => (
        <Tabs.Item key={index} active={index === 0} title={tab}>
          <div className="ml-2">{tab === "Results" ? <TabContent /> : ""}</div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

export default TabComponent;
