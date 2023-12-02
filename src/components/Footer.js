import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { RiTaskFill } from "react-icons/ri";
import ContactModel from "./models/ContactModel";
export default function Footer({ Contactref }) {
  const [istoogle, setistoogle] = useState(false);

  const Tooglemodel = () => {
    setistoogle(true);
  };

  const Mail = () => {
    window.location.href = "mailto:mediatechmarketing25@gmail.com";
  };

  return (
    <>
      <div className="py-32" ref={Contactref}>
        <div className="flex items-center justify-center space-x-5">
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <AiOutlineInstagram size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <CiTwitter size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <BsFacebook size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <BsYoutube size={28} color="white" cursor={"pointer"} />
          </div>
        </div>
        <div className="my-8 space-y-10 text-center text-white">
          <h1 className="text-2xl font-bold md:text-5xl">
            Have any project in mind?
          </h1>
          <button
            onClick={Tooglemodel}
            className="border-2 border-[#4ef0ed] px-7 py-4 hover:bg-white hover:border-white hover:text-black font-semibold duration-500 ease-in-out"
          >
            MAKE INQUIRE
          </button>
        </div>
      </div>
      <div className="border-t-2 border-[#25c4c1] flex flex-col md:flex-row justify-center space-y-6 md:justify-evenly items-center">
        <div className="my-8 text-center text-white space-y-7 md:my-0 md:text-left">
          <h1 className="text-4xl font-bold md:text-5xl">MediaTech</h1>
          <p className="font-semibold md:text-xl">Your Smarter Move</p>
          <div className="border-2 border-[#4ef0ed] w-[55vw] md:w-[10vw] "></div>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold">OUR SERVICES</h1>
          <ul className="my-5 space-y-5 font-bold text-center md:text-left">
            <li className="flex space-x-4">
              <a href="https://www.wallahdigital.com/what-is-web-development/">
                <p>Website development</p>
              </a>
            </li>
            <li className="flex space-x-4">
              <a href="https://www.wallahdigital.com/seo-meaning/">
                <p>SEO</p>
              </a>
            </li>
            <li className="flex space-x-4">
              <a href="https://www.wallahdigital.com/what-is-social-media-marketing/">
                <p>Social Media Marketing</p>
              </a>
            </li>
            <li className="flex space-x-4">
              <a href="https://www.wallahdigital.com/digital-marketing/">
                <p>Digital Marketing</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-semibold">CONTACT US</h1>
          <ul className="my-5 space-y-5">
            <li className="flex space-x-4">
              <BiPhoneCall size={20} color="white" />
              <p>9392895395</p>
            </li>
            <li onClick={Mail} className="flex space-x-4 cursor-pointer">
              <FiMail size={20} color="white" />
              <p>mediatechmarketing25@gmail.com</p>
            </li>
            <li className="flex space-x-4">
              <GoLocation size={20} color="white" />
              <p>Hyderabad India</p>
            </li>
            <li className="flex space-x-4">
              <RiTaskFill size={20} color="white" />
              <p>Monday to Saturday</p>
            </li>
          </ul>
        </div>
      </div>
      {istoogle ? <ContactModel setistoogle={setistoogle} /> : null}
    </>
  );
}
