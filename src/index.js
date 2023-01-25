import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoursesProvider } from "./context/courses.context";
import { StudentsProvider } from "./context/student.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentsProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </StudentsProvider>
  </React.StrictMode>
);
