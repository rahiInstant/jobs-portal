import { useState } from "react";
import NavMiddle from "../Navbutton/NavMiddle";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import './Navbar.css'
const Navbar = () => {
  const currentPath = useLocation();
  const title = {
    '/jobs':'All Jobs',
    '/statistics':'Statistics for Deep Analysis',
    '/applied':'All Applied Jobs',
    "/blog":'Blogs About Jobs'
  }
  const [open, setOPen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/jobs", name: "Jobs", id: 2 },
    { path: "/statistics", name: "Statistics", id: 3 },
    { path: "/applied", name: "Applied Jobs", id: 4 },
    { path: "/blog", name: "Blog", id: 5 },
  ];

  return (
    <div id="nav" className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] ">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl md:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold">Ultimate</div>
        </div>
        <NavMiddle routes={routes} open={open}></NavMiddle>
        <Button innerText="Start Applying"></Button>
      </nav>
      {currentPath.pathname === "/" ? <Banner></Banner> : <Heading title={title[currentPath.pathname]}></Heading>}
    </div>
  );
};

export default Navbar;
