import React, { useContext, useState } from "react";
import { StudentsContext } from "../context/student.context";

const Students = () => {
  const { students } = useContext(StudentsContext);
  const [selectedStudent, setSelectedStudent] = useState([]);
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
