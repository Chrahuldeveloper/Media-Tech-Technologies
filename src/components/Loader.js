import React from "react";
import { RiLoader5Fill } from "react-icons/ri";
export default function Loader({ styles, center }) {
  return (
    <div className={`flex justify-center ${styles} `}>
      <div
        className={`${
          center
            ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : null
        }`}
      >
        <RiLoader5Fill className="animate-spin" size={40} color={"#4ef0ed"} />
      </div>
    </div>
  );
}
