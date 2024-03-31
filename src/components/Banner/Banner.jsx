import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="flex max-w-7xl mx-auto items-end">
      <div className="w-[55%] py-16">
        <h1 className="w-full leading-[100px]  text-[80px] font-extrabold">
          One Step Closer To Your <br />
          <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>
        <div className="text-lg font-medium mt-6 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </div>
        <Button innerText="Get Started"></Button>
      </div>
      <div className="flex ">
        <img src="./assets/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
