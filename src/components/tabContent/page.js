import React from "react";

const LineNumberColumn = ({ bgcolor }) => (
  <div className={`bg-${bgcolor}-100 w-10 text-center py-2`}>
    {Array.from({ length: 10 }, (_, i) => (
      <h2 key={i}>{i + 1}</h2>
    ))}
  </div>
);

const TabContent = ({ bgcolor, rounded, border }) => (
  <div className={`${border} bg-white flex ${rounded} gap-2`}>
    <LineNumberColumn bgcolor={bgcolor} />
    <div className="pt-2">
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
    </div>
  </div>
);
export default TabContent;
