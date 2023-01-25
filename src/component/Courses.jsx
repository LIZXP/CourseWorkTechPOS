import React from "react";

function Courses({ setSelectedCourses, selectedCourses }) {
  const courses = [
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
  ];

  const handleChange = (e) => {
    if (e.target.checked && selectedCourses.length < 4) {
      setSelectedCourses((prev) => [...prev, e.target.value]);
    } else if (!e.target.checked) {
      setSelectedCourses((prev) =>
        prev.filter((course) => course !== e.target.value)
      );
    }
  };
  return (
    <div>
      {courses
        ? courses.map((course, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name="courses"
                value={course}
                defaultChecked={false}
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
