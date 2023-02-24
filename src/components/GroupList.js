import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const GroupList = () => {
  return (
    <div className="mt-6 shadow-xl rounded-lg px-5 py-4 h-[350px] overflow-hidden overflow-y-scroll">
      <div className="relative">
        <h2 className="font-pop text-xl font-semibold mb-5">Groups List</h2>
        <BsThreeDotsVertical className="absolute right-0 text-2xl top-2.5 text-primary" />
        <div className="flex gap-x-4 mt-5 items-center border-b border-black pb-4">
          <div className="">
            <img src="images/group1.png" className="rounded-full" />
          </div>
          <div className="">
            <h3 className="font-pop font-semibold text-xl text-black">
              Friends Reunion
            </h3>
            <p className="font-pop font-medium text-[#4D4D4D]">
              Hi Guys, Wassup!
            </p>
          </div>
          <div className="ml-auto">
            <button className="w-full font-pop font-semibold text-white bg-primary text-base py-2 px-3 rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
