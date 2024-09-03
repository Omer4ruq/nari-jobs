import React from "react";
import Button from "./Button";
import InputField from "../InputField";

const Salary = ({ handleCategory, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="flex gap-1">
        <Button
          onClickHandler={handleClick}
          value="annual"
          title="Annual"
        ></Button>
        <Button
          onClickHandler={handleClick}
          value="monthly"
          title="Monthly"
        ></Button>
        <Button
          onClickHandler={handleClick}
          value="hourly"
          title="Hourly"
        ></Button>
      </div>
      <div>
        <label className="flex gap-2 p-0">
          {/* <input
            type="radio"
            className="w-4"
            value=""
            onChange={handleCategory}
          ></input> */}
          <InputField
            type="radio"
            className="w-4"
            value=""
            onChange={handleCategory}
          ></InputField>
          <h1 className="text-base my-2">Any</h1>
        </label>
        <InputField
          handleChange={handleCategory}
          value={30}
          location="<30000"
        ></InputField>
        <InputField
          handleChange={handleCategory}
          value={50}
          location="<50000"
        ></InputField>
        <InputField
          handleChange={handleCategory}
          value={80}
          location="<80000"
        ></InputField>
        <InputField
          handleChange={handleCategory}
          value={100}
          location="<100000"
        ></InputField>
      </div>
    </div>
  );
};

export default Salary;
