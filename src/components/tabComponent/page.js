import React from "react";
import { Tabs } from "flowbite-react";
import TabContent from "../tabContent/page";

function TabComponent({ relatedTabs }) {
  return (
    <Tabs aria-label="Default tabs" variant="default" className="gap-0">
      {relatedTabs.map((tab, index) => (
        <Tabs.Item key={index} active={index} title={tab}>
          <div>{tab === "Results" ? <TabContent rounded={false} /> : ""}</div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

export default TabComponent;
