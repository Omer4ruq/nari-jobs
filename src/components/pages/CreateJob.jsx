import { useForm } from "react-hook-form";

const CreateJob = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="bg-slate-400 py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* first row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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
          </div>
          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salary_type", { required: true })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose Your Salary</option>
                <option value="A">Annual</option>
                <option value="B">Monthly</option>
                <option value="B">Hourly</option>
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salary_type", { required: true })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose Your Salary</option>
                <option value="A">Annual</option>
                <option value="B">Monthly</option>
                <option value="B">Hourly</option>
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
          <input
            type="submit"
            className="block mt-12 bg-blue-900 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
