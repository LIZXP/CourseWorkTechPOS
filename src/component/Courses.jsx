import React, { useContext, useState } from "react";
import { CoursesContext } from "../context/courses.context";

function Courses() {
  const { courses } = useContext(CoursesContext);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handleChange = (e) => {
    if (e.target.checked && selectedCourses.length < 4) {
      setSelectedCourses((prev) => [...prev, e.target.value]);
    } else if (!e.target.checked) {
      setSelectedCourses((prev) =>
        prev.filter((course) => course !== e.target.value)
      );
    }
  };
  console.log(selectedCourses);
  return (
    <div>
      {courses
        ? courses.map((course, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name="courses"
                value={course}
                onChange={handleChange}
              />
              {course}
            </div>
          ))
        : null}
    </div>
  );
}

export default Courses;
