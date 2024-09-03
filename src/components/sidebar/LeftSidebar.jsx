import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingDate from "./JobPostingDate";
import WorkExperience from "./WorkExperience";
import EmploymentType from "./EmploymentType";

const LeftSidebar = ({ handleCategory, handleClick }) => {
  return (
    <div className="space-y-5">
      <Location handleCategory={handleCategory}></Location>
      <Salary
        handleCategory={handleCategory}
        handleClick={handleClick}
      ></Salary>
      <JobPostingDate handleCategory={handleCategory}></JobPostingDate>
      <WorkExperience handleChange={handleCategory}></WorkExperience>
      <EmploymentType handleChange={handleCategory}></EmploymentType>
    </div>
  );
};

export default LeftSidebar;
