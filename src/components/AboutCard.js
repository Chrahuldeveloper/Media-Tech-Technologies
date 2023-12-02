import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
    {
      Tittle: "Who we are",
      Para: "We are a team of experts who are passionate about helping businesses grow through innovative digital marketing strategies",
    },
    {
      Tittle: "Our philosophy",
      light: true,
      Para: "We pride ourselves on our commitment to delivering exceptional service, maintaining transparency and communication throughout the process",
    },
    {
      Tittle: "How we work",
      Para: "Our team of professionals brings together a wealth of experience and expertise in the digital marketing space, using data-driven insights.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-5 md:flex-row">
      {data.map((item,index) => {
        return (
          <div
          key={index}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div
              className={`text-white bg-[#121212] border-2 border-[#121212] ease-in-out duration-500 ${
                item.light ? "border-[#4ef0ed]" : null
              } hover:border-[#4ef0ed] p-8 max-w-sm md:max-w-xs space-y-6`}
            >
              <h1 className="text-2xl font-bold">{item.Tittle}</h1>
              <p className="leading-8 text-slate-300">{item.Para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
