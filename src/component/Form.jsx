import React, { useState } from "react";
import Students from "./Students";
import Courses from "./Courses";
import Registed from "./registed";
import background from "../assets/bg.svg";

function Form() {
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [userList, setUserList] = useState({ Peter: [], Amir: [], John: [] });
  const submitHandler = (e) => {
    e.preventDefault();
    setUserList({ ...userList, [selectedStudent]: selectedCourses });
  };

  return (
    <div
      className="grid grid-cols-2 h-full w-full text-slate-300"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        weight: "100vw",
      }}
    >
      <div className="col-span-2 grid-rows-1">
        <Students setSelectedStudent={setSelectedStudent} />
      </div>
      <div className="col-span-2 flex m-auto h-full">
        <div className="mr-16">
          <Courses
            setSelectedCourses={setSelectedCourses}
            selectedCourses={selectedCourses}
          />
          <button
            onClick={submitHandler}
            className="w-20 mt-3 rounded-lg bg-red-300 hover:bg-red-600 text-black"
          >
            Submit
          </button>
        </div>
        <div>
          <Registed
            userList={userList}
            setSelectedCourses={setSelectedCourses}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
