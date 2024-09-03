import React from "react";

const InputField = ({ handleChange, value, title }) => {
  return (
    <div>
      <div>
        <label htmlFor="" className="gap-0">
          <div className="flex gap-2">
            <input
              type="radio"
              className="w-4"
              onChange={handleChange}
              value={value}
            ></input>
            <h1 className="text-base my-2">{title}</h1>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputField;
