import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import InputField from "../InputField";

const Location = ({ handleCategory, location, handleClick }) => {
  const locations = [
    "London",
    "New York",
    "Atlanta",
    "Washington",
    "Miami",
    "Dhaka",
    "Remote",
    "Los Angeles",
    "Boston",
  ];
  return (
    <div>
      <h1 className="text-base font-medium mb-2">Location</h1>
      <div>
        {/* <div className=" ">
          <RadioGroup className="  gap-2 ">
            <div className="flex ">
              <Input
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"
              />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                className="cursor-pointer"
              />
              <Label htmlFor="r2">Recruiter</Label>
            </div>
          </RadioGroup>
        </div> */}
        <label className="flex gap-2 p-0">
          <input
            type="radio"
            className="w-4"
            value=""
            onChange={handleCategory}
          ></input>
          <h1 className="text-base my-2">All</h1>
        </label>
        {locations.map((location) => (
          <InputField
            key={location}
            handleChange={handleCategory}
            value={location}
            location={location}
          ></InputField>
        ))}
        {/* <div className="flex gap-2 p-0">
          <input
            type="radio"
            className="w-4"
            value="Austin"
            onChange={handleCategory}
          ></input>
          <h1 className="text-base my-2">Austin</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Location;
