import { useEffect, useState } from "react";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto mt-20 flex flex-col items-center">
      <h1 className="text-[48px] font-extrabold text-center">
        Job Category List
      </h1>
      <p className="font-medium mt-5 text-center text-base">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 flex gap-6">
        {catagories.map((job, idx) => {
          return (
            <div key={idx} className="p-10 bg-[#7e8ffe1e] rounded-lg">
              <div className="bg-[#7e8ffe3f] p-4 rounded-lg w-fit h-fit">
                <img src={job.logo} alt="" />
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-extrabold">{job.category_name}</h1>
                <p className="font-medium">{job.availability}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catagories;
