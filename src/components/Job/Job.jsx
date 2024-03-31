import { useLoaderData } from "react-router-dom";
import Button from "../Button/Button";

const Job = () => {
  const Data = useLoaderData();
  return (
    <div className="mt-20 flex max-w-7xl mx-auto gap-6">
      <div className="w-[75%] space-y-6 font-medium">
        <p>
          <span className="font-extrabold">Job Description: </span> 
          {Data.job_description}
        </p>
        <p>
          <span className="font-extrabold">Job Responsibility: </span>
          {Data.job_responsibility}
        </p>
        <p>
          <span className="font-extrabold">Educational Requirements: <br /></span>
          {Data.educational_requirements}
        </p>
        <p>
          <span className="font-extrabold">Experiences: <br /></span>{Data.experiences}
        </p>
      </div>
      <div className="">
        <div className="text-lg font-medium p-8 rounded-lg bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] ">
          <h1 className="font-extrabold text-xl">Job Details</h1>
          <hr className="my-6"/>
          <div>
            <span className="font-bold">Salary :</span>  {Data.salary} (Per
            Month)
          </div>
          <div className="mt-2">
        <span className="font-bold">Job Title :</span>  {Data.job_title}
          </div>
          <h1 className="font-extrabold mt-8 text-xl">Contact Information</h1>
          <hr className="my-6"/>
          <div >
            <span className="font-bold">Phone :</span>  {Data.contact_information.phone}
          </div>
          <div className="mt-2">
            <span className="font-bold">Email :</span>  {Data.contact_information.email}
          </div>
          <div className="mt-2">
            <span className="font-bold">Address :</span>  {Data.contact_information.address}
          </div>
        </div>
        <div className="mt-6">
           <Button innerText="Apply Now" w="w-full"></Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
