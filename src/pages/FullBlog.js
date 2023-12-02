import { useLocation } from "react-router-dom";
import { Footer } from "../components";
import React from "react";

const FullBlog = () => {
  const Parms = useLocation();
  return (
    <div className="w-screen h-full text-white bg-black">
      <div className="flex flex-col justify-center px-10 py-10 space-y-8 md:px-40">
        <img
          src={Parms.state.image}
          className="mx-auto my-5 rounded-lg"
          alt="pic"
        />
        <div>
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
      <Footer />
    </div>
  );
};

export default FullBlog;
