import React, { useId, useState } from "react";
import "animate.css";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { RxCross2 } from "react-icons/rx";
export default function ContactModel({ setistoogle }) {
  const [iserror, setiserror] = useState(false);

  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Work: "",
    Message: "",
  });

  const userid = useId();
  const handleform = async () => {
    if (user.Name && user.Email && user.Work !== "") {
      await setDoc(doc(db, "USERS", userid), user);
      console.log("DONE");
    } else {
      setiserror(true);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 animate__animated animate__fadeIn backdrop-blur-sm">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className=" bg-[#1c1b1b] rounded-xl  text-white w-[90vw] md:w-[30vw] p-5 space-y-3.5">
            <div className="flex justify-end pb-1">
              <RxCross2
                cursor={"pointer"}
                onClick={() => {
                  setistoogle(false);
                }}
                size={30}
                color={"#419494"}
              />
            </div>
            {iserror ? (
              <p className="text-center text-red-500">
                Please fill all the fields
              </p>
            ) : null}
            <form className="grid grid-cols-2 gap-5">
              <input
                type="text"
                id="Name"
                value={user.Name}
                onChange={(e) => {
                  setuser({ ...user, Name: e.target.value });
                }}
                placeholder="Name"
                className="bg-transparent px-8 py-2.5  border-2  border-[#419494] outline-none "
              />
              <input
                type="text"
                placeholder="Email"
                value={user.Email}
                onChange={(e) => {
                  setuser({ ...user, Email: e.target.value });
                }}
                id="email"
                className="bg-transparent px-8 py-2.5 border-2 border-[#419494] outline-none "
              />
              <input
                type="text"
                placeholder="Work"
                value={user.Work}
                onChange={(e) => {
                  setuser({ ...user, Work: e.target.value });
                }}
                className="bg-transparent col-span-2 px-8 py-2.5  border-2 border-[#419494] outline-none "
              />
              <textarea
                name="message"
                value={user.Message}
                onChange={(e) => {
                  setuser({ ...user, Message: e.target.value });
                }}
                placeholder="message"
                className="bg-transparent col-span-2 border-[1px] border-[#419494] p-2.5 outline-none"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <div className="flex justify-center">
              <button
                onClick={handleform}
                className="bg-[#4badad] mx-auto font-semibold text-sm rounded-full text-white w-[60vw] py-3.5 md:w-[50vw]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
