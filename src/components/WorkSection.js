import React, { useEffect } from "react";
import AOS from "aos";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../Firebase";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function WorkSection({ Worksref }) {
  const docref = collection(db, "OURWORKS");
  const [values, loading, error] = useCollectionData(docref);

  useEffect(() => {
    AOS.init();
    if (loading) return;
    console.log(error);
  }, [loading, error]);

  return (
    <>
      <div
        ref={Worksref}
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="py-24 text-center text-white md:text-left md:mx-48 "
      >
        <div className="flex items-center justify-center md:justify-normal gap-x-6">
          <div className="border-2 border-[#4ef0ed] w-[3vw] hidden md:block" />
          <h1 className="text-5xl font-bold md:text-6xl">Works.</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">THINGS WE'VE MADE</p>
      </div>
      <div className="grid grid-cols-3">
        {values?.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="70"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="relative cursor-pointer"
              >
                <img
                  className="w-[50vw] cursor-pointer"
                  src={item.image}
                  alt="pic"
                />
                <h1 className="absolute inset-0 z-10 flex items-center justify-center text-xs font-semibold font-bold text-white duration-500 opacity-0 hover:opacity-100 md:text-2xl">
                  {item.Tittle}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="border-2 border-[#4ef0ed]  w-[13vw] md:w-[5vw] rotate-90"></div>
      </div>
    </>
  );
}
