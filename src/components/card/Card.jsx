import React from "react";
import { Badge } from "../ui/badge";
import { FiBriefcase } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    job_title,
    company_name,
    company_logo,
    min_salary,
    max_salary,
    salary_type,
    description,
    employment_type,
    job_location,
    experience_level,
    posting_date,
    number_of_positions,
  } = data;
  function timeAgo(posting_Date) {
    const currentDate = new Date();
    const postDate = new Date(posting_Date);
    const diffTime = Math.abs(currentDate - postDate);

    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30); // Approximate month

    if (diffMonths >= 1) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    } else if (diffWeeks >= 1) {
      return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
    } else if (diffDays >= 1) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
  }
  return (
    <div>
      <Link to={`apply-job/${_id}`}>
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer mb-6 duration-700  hover:scale-105 hover:bg-slate-200">
          <div>
            <h1 className="font-medium text-lg">{company_name}</h1>
            <div className="flex-none  lg:flex gap-4">
              <div className="flex items-center mb-2 lg:mb-0">
                <IoLocationOutline className="text-gray-500" />
                <p className="text-sm  text-gray-500">{job_location}</p>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex place-items-center gap-1">
                  <FiBriefcase className="text-gray-500" />
                  <p className="text-sm text-gray-500 ">{experience_level}</p>
                </div>
                <div className="flex items-center gap-1">
                  <GrCurrency className="text-gray-500" />
                  <p className="text-sm text-gray-500">
                    ${min_salary}-{max_salary}K
                  </p>
                </div>
                <div className="flex items-center gap-1 ">
                  <CiCalendarDate className="text-gray-500 hidden lg:block" />
                  <p className="text-sm text-gray-500 hidden lg:block">
                    {posting_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg my-2">{job_title}</h1>
            <p className="text-sm text-gray-600 hidden lg:block">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {number_of_positions} Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              {employment_type}
            </Badge>
            <Badge
              className={"text-[#7209b7] font-bold hidden lg:block"}
              variant="ghost"
            >
              {timeAgo(posting_date)}
            </Badge>
            <Badge
              className={"text-[#7209b7] font-bold hidden lg:block"}
              variant="ghost"
            >
              ${salary_type}
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
