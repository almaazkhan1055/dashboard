import { createContext, useState } from "react";

const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [databaseInfo, setDatabaseInfo] = useState({
    databaseName: "",
    relatedTabs: [],
  });

  const setDatabaseDetails = (name, tabs) => {
    setDatabaseInfo({
      databaseName: name,
      relatedTabs: tabs,
    });
  };

  return (
    <DatabaseContext.Provider
      value={{
        databaseInfo,
        setDatabaseDetails,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;
