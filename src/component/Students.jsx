import React from "react";

const Students = ({ setSelectedStudent }) => {
  const students = ["Peter", "John", "Amir"];

  const handleChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-full text-xl">
      {students
        ? students.map((student, i) => (
            <div key={i} className="m-10">
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
