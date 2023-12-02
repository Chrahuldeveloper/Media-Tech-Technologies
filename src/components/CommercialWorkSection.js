import React, { useEffect } from "react";
import AOS from "aos";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../Firebase";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function CommercialWorkSection({ Worksref }) {
  const docref = collection(db, "APPS");
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
          <h1 className="text-5xl font-bold md:text-6xl">Commercial Work</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">COMMERCIAL WORK </p>
      </div>
      <div className="grid items-start justify-center grid-cols-1 gap-10 p-5 lg:grid-cols-3">
        {values?.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className="max-w-xl p-5 bg-[#121212]"
            >
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="70"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="relative cursor-pointer"
              >
                {item.image ? (
                  <img
                    className="duration-300 ease-in-out cursor-pointer hover:brightness-75"
                    src={item.image}
                    alt="pic"
                  />
                ) : null}
              </div>
              <div className="mt-3 space-y-2 text-white">
                <h1 className="text-2xl font-bold md:text-2xl">
                  {item.Tittle}
                </h1>
                <p>{item.About}</p>
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
