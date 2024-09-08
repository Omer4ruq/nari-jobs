import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setjob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setjob(data));
  }, []);
  return (
    <div>
      <div>
        <div className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50"
              >
                Apply
              </a>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                {job.job_title}
              </a>
              <p className="mt-2">{job.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  {/* <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-600">
                    Leroy Jenkins
                  </span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
