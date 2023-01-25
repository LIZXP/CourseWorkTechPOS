import React, { useState } from "react";
import Students from "./Students";
import Courses from "./Courses";
import Registed from "./registed";

function Form() {
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [userList, setUserList] = useState({ Peter: [], Amir: [], John: [] });
  const submitHandler = (e) => {
    e.preventDefault();
    setUserList({ ...userList, [selectedStudent]: selectedCourses });
  };

  return (
    <div>
      <Students setSelectedStudent={setSelectedStudent} />
      <Courses
        setSelectedCourses={setSelectedCourses}
        selectedCourses={selectedCourses}
      />
      <button onClick={submitHandler}>Submit</button>
      <Registed userList={userList} setSelectedCourses={setSelectedCourses} />
    </div>
  );
}

export default Form;
