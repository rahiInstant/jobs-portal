import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto mt-24 flex flex-col items-center">
      <h1 className="text-[48px] font-extrabold text-center">
        Job Category List
      </h1>
      <p className="font-medium mt-5 text-center text-base">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6">
        {jobs.map((job, id) => {
          return (
            <div key={id} className="border border-[#E8E8E8] w-[550px] p-10 rounded-lg">
              <div className="">
                <img className="w-[115px] h-10" src={job.logo} alt="" />
              </div>
              <h1 className="text-2xl font-extrabold mt-6">
                {job.job_title}
              </h1>
              <p className="text-xl font-semibold mt-2">{job.company_name}</p>
              <div className="mt-4 flex gap-4">
                <button className="text-base font-extrabold py-2 px-5 border rounded">
                  {job.remote_or_onsite}
                </button>
                <button className="text-base font-extrabold py-2 px-5 border rounded">
                  {job.job_type}
                </button>
              </div>
              <div className="text-xl font-semibold mt-6 flex gap-6 mb-6">
                <div>
                  <i className="fa-solid fa-location-dot"></i> {job.location}
                </div>
                <div>
                  
                  <i className="fa-solid fa-circle-dollar-to-slot"></i> Salary :
                  {job.salary}
                </div>
              </div>
              <Link to={`/job/${job.id}`} ><Button innerText="View Details" px="px-5" py="py-3"></Button></Link>
            </div>
          );
        })}

      </div>
      <div className="mt-10">
      <Button innerText="See All Jobs"></Button>
      </div>
    </div>
  );
};

export default FeatureJobs;
