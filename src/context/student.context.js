import { createContext, useState } from "react";

export const StudentsContext = createContext({
  students: [],
  setStudents: () => {},
});

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(["Peter", "John", "Amir"]);
  const value = { students, setStudents };
  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
};
