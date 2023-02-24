import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const FriendRequst = () => {
  return (
    <div className="mt-8 shadow-xl rounded-lg px-5 py-4 h-[462px] overflow-hidden overflow-y-scroll">
      <div className="relative">
        <h2 className="font-pop text-xl font-semibold mb-5">Friend Request</h2>
        <BsThreeDotsVertical className="absolute right-0 text-2xl top-2.5 text-primary" />
        <div className="flex gap-x-4 justify-between mt-5 items-center border-b border-black pb-4">
          <div className="">
            <img src="images/group2.png" className="rounded-full"/>
          </div>
          <div className="">
            <h3 className="font-pop font-semibold text-xl text-black">Name</h3>
            <p className="font-pop font-medium text-[#4D4D4D]">
              Hi Guys, Wassup!
            </p>
          </div>
          <div className="ml-auto flex">
            <button className="font-pop font-semibold text-white bg-primary text-base py-2 px-3 rounded-lg mr-2">
              Accept
            </button>
            <button className=" font-pop font-semibold text-white bg-red-500 text-base py-2 px-3 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequst;
