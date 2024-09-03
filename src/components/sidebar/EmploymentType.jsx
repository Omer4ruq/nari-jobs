import React from "react";
import InputField from "../InputFieldOthers";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <div>
        <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
        <div className="flex gap-2 p-0">
          <input
            type="radio"
            className="w-4"
            value=""
            onChange={handleChange}
          />
          <h1 className="text-base my-2">Any</h1>
        </div>
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
        ></InputField>
      </div>
    </div>
  );
};

export default EmploymentType;
