import React from "react";

const Students = ({ setSelectedStudent }) => {
  const students = ["Peter", "John", "Amir"];

  const handleChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  return (
    <div>
      {students
        ? students.map((student, i) => (
            <div key={i}>
              <input
                type="radio"
                name="student"
                value={student}
                onChange={handleChange}
              />
              {student}
            </div>
          ))
        : null}
    </div>
  );
};

export default Students;
