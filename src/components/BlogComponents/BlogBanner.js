import React from "react";

export default function BlogBanner({ Tittle }) {
  return (
    <>
      <div className="w-[100vw] text-[#4ef0ed] border-t-[1px] border-b-[1px] border-stone-800 p-6 bg-[#121212] text-center ">
    <h1 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-500 via-[#4ef0ed] to-cyan-500 font-bold">{Tittle}</h1>
      </div>
    </>
  );
}
