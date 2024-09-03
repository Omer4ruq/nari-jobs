import React from "react";
import InputField from "../InputField";

const JobPostingDate = ({ handleCategory }) => {
  const now = new Date();
  console.log(now);

  const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourHoursAgoDate = oneDayAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const oneMonthAgoDate = oneMonthAgo.toISOString().slice(0, 10);
  console.log(twentyFourHoursAgoDate);

  return (
    <div>
      <h1 className="text-lg font-medium mb-2">Date of Posting</h1>
      {/* <div>
        <label className="flex gap-2 p-0">
          <input
            type="radio"
            className="w-4"
            value=""
            onChange={handleCategory}
          ></input>
          <h1 className="text-base my-2">All Time</h1>
        </label>
        <InputField
          handleChange={handleCategory}
          value={twentyFourHoursAgoDate}
          location="Last 24 Hours"
        ></InputField>
        <InputField
          handleChange={handleCategory}
          value={sevenDaysAgoDate}
          location="last 7 Days"
        ></InputField>
        <InputField
          handleChange={handleCategory}
          value={oneMonthAgoDate}
          location="Last Month"
        ></InputField>
      </div> */}
      <div>
        <div>
          <label htmlFor="" className="gap-0">
            <div className="flex gap-2">
              <input
                type="radio"
                className="w-4"
                onChange={handleCategory}
                value={twentyFourHoursAgoDate}
              ></input>
              <h1 className="text-base my-2">last 24 hours</h1>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default JobPostingDate;
