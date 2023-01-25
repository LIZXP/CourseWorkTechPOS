import { createContext, useState } from "react";

export const CoursesContext = createContext({
  courses: [],
  setCourses: () => {},
});

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Database Systems",
    "Software Engineering",
    "Human-Computer Interaction",
    "Computer Graphics",
    "Operating Systems",
    "Cloud Computing",
    "Cybersecurity",
  ]);
  const value = { courses, setCourses };
  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
