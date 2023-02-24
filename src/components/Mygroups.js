import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const MyGroups = () => {
  return (
    <div className="mt-8 shadow-xl rounded-lg px-5 py-4 h-[451px] overflow-hidden overflow-y-scroll">
      <div className="relative">
        <h2 className="font-pop text-xl font-semibold mb-5">My Groups</h2>
        <BsThreeDotsVertical className="absolute right-0 text-2xl top-2.5 text-primary" />
        <div className="flex mt-5 gap-x-4 items-center border-b border-black pb-4">
          <div className="w-[60px]">
            <img src="images/friends.png" className="rounded-full" />
          </div>
          <div className="">
            <h3 className="font-pop font-semibold text-xl text-black">Name</h3>
            <p className="font-pop font-medium text-[#4D4D4D] max-w-[400px]">
              Hi Guys, Wassup!
            </p>
          </div>
          <div className="ml-auto flex flex-wrap">
            <button className=" w-[45%] font-pop font-semibold text-white bg-primary text-base py-2 px-3 rounded-lg mr-2">
              Info
            </button>
            <button className=" w-[50%] font-pop font-semibold text-white bg-primary text-base py-2 px-3 rounded-lg">
              Requset
            </button>
            <button className=" w-full mt-2 font-pop font-semibold text-white bg-red-500 text-base py-2 px-3 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGroups;
