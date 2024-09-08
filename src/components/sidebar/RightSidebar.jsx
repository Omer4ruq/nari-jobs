import React from "react";

const RightSidebar = () => {
  return (
    <div>
      <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
          Job Sure Certificate Course
        </h2>
        <p className="flex-1 dark:text-gray-600">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
        <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
          <button className="px-6 py-2 w-full rounded-sm shadow-sm bg-violet-600 text-gray-50">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
