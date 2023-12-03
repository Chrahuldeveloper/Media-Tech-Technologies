import { useLocation } from "react-router-dom";
import { Footer } from "../components";
import React from "react";

const FullBlog = () => {
  const Parms = useLocation();
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="max-w-2xl px-6 py-10 md:max-w-3xl lg:max-w-5xl lg:pl-36 ">
        <h1 className="text-lg font-semibold underline md:text-2xl lg:text-3xl">
          {Parms.state.Tittle}
        </h1>
        <div className="flex flex-col justify-start space-y-8 ">
          <img
            src={Parms.state.image}
            className="max-w-lg my-5 rounded-lg lg:max-w-xl"
            alt="pic"
          />
          <div className="space-y-5">
            {Parms.state.Blog.Sections?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <h1 className="text-4xl font-bold ">{item.SectionTittle}</h1>
                  <p className="text-sm font-semibold leading-7 font-">
                    {item.SectionPara}
                  </p>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullBlog;
