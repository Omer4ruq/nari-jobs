import React from "react";
import InputField from "../InputFieldOthers";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div className="flex gap-2 p-0">
        <input type="radio" className="w-4" value="" onChange={handleChange} />
        <h1 className="text-base my-2">Any</h1>
      </div>
      <InputField
        handleChange={handleChange}
        value="Senior-level"
        title="Senior-level"
      ></InputField>
      <InputField
        handleChange={handleChange}
        value="Mid-level"
        title="Mid-level"
      ></InputField>
      <InputField
        handleChange={handleChange}
        value="Entry-level"
        title="Entry-level"
      ></InputField>
    </div>
  );
};

export default WorkExperience;
