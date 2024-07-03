import { Tabs } from "flowbite-react";
import React from "react";
import TabContent from "../tabContent/page";

function TabComponent({ relatedTabs }) {
  return (
    <Tabs aria-label="Default tabs" variant="default">
      {relatedTabs.map((tab, index) => (
        <Tabs.Item key={index} active={index} title={tab}>
          <div>{tab === "Results" ? <TabContent /> : ""}</div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

export default TabComponent;
