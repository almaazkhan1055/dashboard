import React from "react";

const TabContent = () => (
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
    <div className="flex">
      <h2 className="text-purple-500 mr-1">FROM</h2>
      <div>
        [<span className="text-blue-400">SampleDB</span>] .
      </div>
    </div>
    <h3 className="ml-[34px]">[ dbo ]</h3>
  </div>
);
export default TabContent;
