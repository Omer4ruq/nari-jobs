import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const email = "ss@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(true);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/my-jobs/omerfaruq4@gmail.com`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [searchText]);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJob = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // next and previous btn
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleInputChnge = () => {
    const filter = jobs.filter(
      (job) =>
        job.job_title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter);
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.acknowledged === true) {
          alert("JOb Deleted Succesfully!!");
        }
      });
  };
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto xl:px-24 px-4">
        <div className="text-center p-4"> All My Jobs</div>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            // onChange={(e) => setQuery(e.target.value)}
            onChange={handleInputChnge}
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">Search</Button>
        </div>
      </div>
      <div>
        <div>
          <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        All Jobs
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <Link to="/job-post">+ Add New Job</Link>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Job Title
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Company Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Post Date
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Salary
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Edit
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {isLoading ? (
                      <div className="flex items-center justify-center h-20">
                        <p>loading....</p>
                      </div>
                    ) : (
                      <tbody>
                        {currentJob.map((job, index) => (
                          <tr key={index} className="border-2">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {job.job_title}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {job.company_name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {job.posting_date}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {job.min_salary}k - {job.max_salary}k
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button className="underline">
                                <Link to={`edit-job/${job?._id}`}>Edit</Link>
                              </button>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              <button
                                onClick={() => {
                                  handleDelete(job._id);
                                }}
                                className="bg-red-700 py-2 px-6 text-white rounded-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
            {/* <footer className="relative pt-8 pb-6 mt-16">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      Made with{" "}
                      <a
                        href="https://www.creative-tim.com/product/notus-js"
                        className="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                      >
                        Notus JS
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-500 hover:text-blueGray-800"
                        target="_blank"
                      >
                        {" "}
                        Creative Tim
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </footer> */}
            <div className="flex justify-center text-black space-x-8">
              {currentPage > 1 && (
                <button className="hover:underline" onClick={prevPage}>
                  Previous
                </button>
              )}
              {indexOfLastItem < jobs.length && (
                <button className="hover:underline" onClick={nextPage}>
                  Next
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
