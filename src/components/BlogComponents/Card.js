import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ key, image, Categeory, Tittle, Para, Blog }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/Fullblog`, {
          state: {
            image,
            Tittle,
            Blog,
          },
        });
      }}
      key={key}
      className="max-w-md shadow-xl cursor-pointer"
    >
      <div>
        <img
          src={image}
          alt="pic"
          className="duration-300 ease-in-out hover:brightness-75 rounded-t-xl"
        />
        <div className="space-y-4 bg-[#121212] p-5">
          <span className="bg-[#4ef0ed] px-7 py-1 text-xs font-bold text-black">
            {Categeory}
          </span>
          <h1 className="text-2xl font-bold">{Tittle}</h1>
          <p className="text-sm font-semibold">{Para}</p>
        </div>
      </div>
    </div>
  );
}
