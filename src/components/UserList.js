import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const UserList = () => {
  return (
    <div className=" shadow-xl rounded-lg px-5 py-4 h-[440px] overflow-hidden overflow-y-scroll">
      <div className="relative">
        <h2 className="font-pop text-xl font-semibold mb-5">User List</h2>
        <BsThreeDotsVertical className="absolute right-0 text-2xl top-2.5 text-primary" />

        <div className="flex mt-5 items-center border-b border-black pb-4">
          <div className="w-[20%]">
            <img src="images/friends.png" />
          </div>
          <div className="w-[60%]">
            <h3 className="font-pop font-semibold text-xl text-black">
              user Name
            </h3>
            <p className="font-pop font-medium text-[#4D4D4D]">user Email</p>
          </div>
          <div className="w-[20%]">
            <button className=" w-full font-pop font-semibold text-white bg-primary text-base py-2 px-3 rounded-lg">
              Requset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
