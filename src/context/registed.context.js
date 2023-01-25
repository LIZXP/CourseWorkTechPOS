import { createContext, useState } from "react";

export const RegistedContext = createContext({
  registed: [],
  setRegisted: () => {},
});

export const RegistedProvider = ({ children }) => {
  const [registed, setRegisted] = useState([]);
  const value = { registed, setRegisted };
  return (
    <RegistedContext.Provider value={value}>
      {children}
    </RegistedContext.Provider>
  );
};
