import React, { useState } from "react";

function Registed({ userList }) {
  const [selectedOption, setSelectedOption] = useState("Peter");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = ["Peter", "Amir", "John"];
  let valueArray = [];
  for (const [key, value] of Object.entries(userList)) {
    if (key === selectedOption) {
      valueArray = value;
      break;
    }
  }
  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="text-black"
      >
        {options.map((data, i) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </select>
      <h3 className="font-bold">Courses Registered</h3>
      {valueArray.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </div>
  );
}

export default Registed;
