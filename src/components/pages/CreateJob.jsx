import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
    fetch("http://localhost:3000/post-jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Posted Successfully!");
        }
        reset();
      });
  };
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Pyhton", label: "Pyhton" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "C#", label: "C#" },
    { value: "Laravel", label: "Laravel" },
    { value: "C++", label: "C++" },
    { value: "Next.js", label: "Next.js" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "java", label: "java" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "Vue", label: "Vue" },
  ];

  return (
    <div className="p-4">
      <div className="max-w-screen-2xl mx-auto xl:px-24 px-4">
        <div className="bg-slate-200 py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* first row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Title</label>
                <input
                  type="text"
                  placeholder="Ex: Web Developer"
                  {...register("job_title")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Company Name</label>
                <input
                  type="text"
                  placeholder="Ex: Microsoft"
                  {...register("company_name")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 2nd row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="Ex: 50k"
                  {...register("max_salary")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Minimum Salary</label>
                <input
                  type="text"
                  placeholder="Ex: 10k"
                  {...register("min_salary")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">
                  Number of Positions
                </label>
                <input
                  type="text"
                  placeholder="Ex: 5"
                  {...register("number_of_positions")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 3rd row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Salary Type</label>
                <select
                  {...register("salary_type", { required: true })}
                  className="block w-full flex-1 border-1 bg-white py-1.5 px-2 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
                >
                  <option value="">Choose Your Salary</option>
                  <option value="Annual">Annual</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Hourly">Hourly</option>
                </select>
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Location</label>
                <input
                  type="text"
                  placeholder="EX: New York"
                  {...register("job_location")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 4th row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Posting Date</label>
                <input
                  type="date"
                  {...register("posting_date")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 px-0.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Experience Level</label>
                <select
                  {...register("experience_level", { required: true })}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
                >
                  <option value="">Choose Level of Experience</option>
                  <option value="Senior Level">Senior Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Entry Level">Entry Level</option>
                </select>
              </div>
            </div>
            {/* 5th row */}
            <div className="mb-4">
              <label className="block mb-2 text-lg">Required Skill Sets:</label>
              <CreatableSelect
                defaultValue={selectedOptions}
                onChange={setSelectedOptions}
                options={options}
                isMulti
                className="block w-full flex-1 border-1 bg-white py-1.5 px-2 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
              ></CreatableSelect>
            </div>
            {/* 6th row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Company Logo</label>
                <input
                  type="url"
                  placeholder="Paste your image URL"
                  {...register("company_logo")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 px-0.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Employment Type</label>
                <select
                  {...register("employment_type", { required: true })}
                  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
                >
                  <option value="">Choose Employment Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
            </div>
            {/* 7th row */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Job Description</label>
              <textarea
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                rows={6}
                placeholder="Job Description"
                {...register("description")}
              ></textarea>
            </div>
            {/* 8th row */}
            <div className=" w-full">
              <label className="block mb-2 text-lg">Job Posted By</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("job_posdtedBy")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <input
              type="submit"
              className="block w-full mt-12 bg-blue-900 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer  hover:bg-sky-950 active:scale-95  transition-transform duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
