import React, { useEffect, useState } from "react";
import Banner from "../../banner/Banner";
import Card from "../../card/Card";
import Job from "@/components/job/Job";
import CategoryCarousal from "@/components/categoryCarousal/CategoryCarousal";
import { Sidebar } from "lucide-react";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import { Progress } from "@/components/ui/progress";
import { FaFilter } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { BiFilterAlt } from "react-icons/bi";
import { TbFilterSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import RightSidebar from "@/components/sidebar/RightSidebar";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
    setIsLoading(false);
  }, []);

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChnge = (event) => {
    setQuery(event.target.value);
  };

  //  filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.job_title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);

  // calculating the index page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  // function for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //  function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // radio filtering
  const handleCategory = (event) => {
    setSelectCategory(event.target.value);
    console.log(selectCategory);
  };

  // button based filtering
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
    console.log("sdafdsfa");
  };
  // main function
  const filteredData = (jobs, selected, query) => {
    let filteradJobs = jobs;

    if (query) {
      filteradJobs = filteredItems;
    }

    if (selected) {
      filteradJobs = filteradJobs.filter(
        ({
          job_location,
          max_salary,
          min_salary,
          experience_level,
          salary_type,
          employment_type,
          posting_Date,
        }) =>
          job_location.toLowerCase() === selected.toLowerCase() ||
          parseInt(max_salary) <= parseInt(selected) ||
          posting_Date >= selected ||
          salary_type.toLowerCase() === selected.toLowerCase() ||
          employment_type.toLowerCase() === selected.toLowerCase() ||
          experience_level.toLowerCase() === selected.toLowerCase() ||
          employment_type.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePageRange();
    return filteradJobs
      .slice(startIndex, endIndex)
      .map((data, i) => <Card key={i} data={data}></Card>);
  };

  const result = filteredData(jobs, selectCategory, query);

  return (
    <div>
      <div>
        <Banner
          query={query}
          handleInputChnge={handleInputChnge}
          handleCategory={handleCategory}
        ></Banner>
        <div>
          <CategoryCarousal></CategoryCarousal>
        </div>
      </div>
      <div className="bg-[#f3f0f0] md:grid grid-cols-5 gap-4 lg:px-8 px-4 py-8 max-h-fit">
        <div className="bg-white p-4 rounded hidden md:block">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              <TbFilterSearch className="text-3xl  text-blue-600" />
            </div>

            <h1 className="font-bold text-xl">Filter</h1>
          </div>
          <LeftSidebar
            handleCategory={handleCategory}
            handleClick={handleClick}
          ></LeftSidebar>
        </div>
        <div className="col-span-3 bg-white p-4  scrollbar scrollbar-thumb-red-600 rounded">
          {isLoading ? <Progress value={33} /> : <Job result={result}></Job>}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                className="hover:underline"
                disabled={currentPage == 1}
              >
                Previous
              </button>
              <span className="mx-2">
                Page{currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemPerPage)}
              </span>
              <button
                className="hover:underline"
                onClick={nextPage}
                disabled={
                  currentPage == Math.ceil(filteredItems.length / itemPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-white p-4 rounded">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Home;
