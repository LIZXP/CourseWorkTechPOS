import { createContext, useState } from "react";

export const CoursesContext = createContext({
  courses: [],
  setCourses: () => {},
});

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const value = { courses, setCourses };
  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
