import React, { useEffect } from "react";
import { Reviews } from "../Data/index";
import { TfiQuoteLeft } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonialCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {Reviews.map((item, index) => {
        return (
          <div
            key={index}
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="bg-[#0b0c10] max-w-xs md:max-w-sm text-center space-y-5 p-6 border-2 border-stone-800"
          >
            <TfiQuoteLeft className="mx-auto" size={30} color="#4ef0ed" />
            <p className="text-sm leading-8 text-slate-300">
              {item.Para}
            </p>
            <div className="text-white space-y-2.5">
              <p className="text-xl font-semibold">{item.Name}</p>
              <h1 className="text-sm">{item.Work}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
