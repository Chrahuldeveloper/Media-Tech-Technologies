import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { CgMenuGridO } from "react-icons/cg";
export default function Navbar({ Scrolltoref, scrolltoWorks, scrolltoAbout ,scrolltoContact}) {
  const [istoggle, setistoggle] = useState(false);

  const handleToggle = () => {
    setistoggle(!istoggle);
  };

  return (
    <>
      <div>
        <div className="p-2 text-white">
          <div className="flex items-center justify-between md:px-20 md:py-5">
            <h1 className="text-2xl font-bold md:text-3xl">MediTech</h1>
            <ul className="hidden md:flex md:items-center md:space-x-7">
              <li
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed] cursor-pointer"
                onClick={Scrolltoref}
              >
                Services
              </li>
              <li
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer"
                onClick={scrolltoWorks}
              >
                Works
              </li>
              <li
                onClick={scrolltoAbout}
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer"
              >
                About
              </li>
              <li onClick={scrolltoContact} className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer">
                Contact
              </li>
              <Link to={"/blogs"}>
              <li  className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer">
                Blogs
              </li>
              </Link>
            </ul>
            <CgMenuGridO
              size={28}
              color="white"
              cursor="pointer"
              className="md:hidden"
              onClick={handleToggle}
            />
          </div>
          <ul
            className={`my-1 px-3 py-1 ${
              istoggle ? "block" : "hidden"
            } rounded-xl glass md:hidden`}
          >
            <div className={` ${istoggle ? "block" : "hidden"} space-y-3.5`}>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out cursor-pointer">
                <li onClick={Scrolltoref} className="my-2.5 text-sm">
                  Services
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out   cursor-pointer">
                <li onClick={scrolltoWorks} className="my-2.5 text-sm">
                  Works
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out  cursor-pointer">
                <li onClick={scrolltoAbout} className="my-2.5 text-sm">
                  About
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out   cursor-pointer">
                <li onClick={scrolltoContact} className="my-2.5 text-sm">Contact</li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out   cursor-pointer">
              <Link to={"/blogs"}>
                <li  className="my-2.5 text-sm">Blogs</li>
              </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
