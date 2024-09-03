/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "../ui/button";

const Banner = ({ query, handleInputChnge }) => {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
            No. 1 Job Hunt Website
          </span>
          <h1 className="text-5xl font-bold">
            Search, Apply & <br /> Get Your{" "}
            <span className="text-[#6A38C2]">Dream Jobs</span>
          </h1>
          <p>
            Thousands of jobs in the copmuter, engineering and technology
            sectors are waiting for you
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find your dream jobs"
              // onChange={(e) => setQuery(e.target.value)}
              onChange={handleInputChnge}
              value={query}
              className="outline-none border-none w-full"
            />
            <Button className="rounded-r-full bg-[#6A38C2]">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
