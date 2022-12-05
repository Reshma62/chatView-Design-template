import React, { useState } from "react";
import {
  MdCloudUpload,
  MdNotifications,
  MdSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
const SideBar = () => {
  let [modal, setModal] = useState(false);
  let handleModalOpen = () => {
    setModal(true);
  };
  let handleModalClose = () => {
    /* setModal(false);
    setImage("");
    setCropData("");
    setCropper(""); */
  };
  let handleLogout = () => {
    console.log("");
  };
  return (
    <div className="">
      <div className="flex justify-center mt-8 relative group w-28 h-28 mx-auto">
        <img className="w-full h-full rounded-full" src="images/demo.png" />
        <div
          onClick={handleModalOpen}
          className=" opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[rgba(0,0,0,.4)] rounded-full top-0 left-0 flex justify-center items-center "
        >
          <MdCloudUpload className="text-white text-3xl  rounded-full" />
        </div>
      </div>
      <h4 className="text-white text-center text-2xl mt-5">dispay name</h4>
      <div className="">
        <div className="relative mt-24 z-[1] flex justify-center ">
          <FaHome className="text-5xl text-primary" />
          <div className="absolute w-[80%]  bg-white  top-[-13px] z-[-1] left-[36px] py-10 rounded-l-2xl"></div>
          <div className="absolute w-[13px]  bg-primary  top-[-13px] z-[-1] right-[0] py-10 rounded-l-2xl"></div>
        </div>
        <div className="relative mt-24 z-[1] flex justify-center ">
          <BsFillChatDotsFill className="text-5xl text-[#BAD1FF]" />
          <div className="absolute w-full  bg-none  top-[-13px] z-[-1] left-[36px] py-10 rounded-l-2xl"></div>
          <div className="absolute w-[13px]  bg-none  top-[-13px] z-[-1] right-[0] py-10 rounded-l-2xl"></div>
        </div>
        <div className="relative mt-24 z-[1] flex justify-center ">
          <MdNotifications className="text-5xl text-[#BAD1FF]" />
          <div className="absolute w-full  bg-none  top-[-13px] z-[-1] left-[36px] py-10 rounded-l-2xl"></div>
          <div className="absolute w-[13px]  bg-none  top-[-13px] z-[-1] right-[0] py-10 rounded-l-2xl"></div>
        </div>
        <div className="relative mt-24 z-[1] flex justify-center ">
          <MdSettings className="text-5xl text-[#BAD1FF]" />
          <div className="absolute w-full  bg-none  top-[-13px] z-[-1] left-[36px] py-10 rounded-l-2xl"></div>
          <div className="absolute w-[13px]  bg-none  top-[-13px] z-[-1] right-[0] py-10 rounded-l-2xl"></div>
        </div>
        <div
          onClick={handleLogout}
          className="relative mt-24 z-[1] flex justify-center "
        >
          <MdOutlineLogout className="text-5xl text-[#BAD1FF]" />
          <div className="absolute w-full  bg-none  top-[-13px] z-[-1] left-[36px] py-10 rounded-l-2xl"></div>
          <div className="absolute w-[13px]  bg-none  top-[-13px] z-[-1] right-[0] py-10 rounded-l-2xl"></div>
        </div>
      </div>
      {/* Modal Upload Pic */}
      {modal && (
        <div className="w-full h-screen absolute bg-primary top-0 left-0 z-50 flex justify-center items-center">
          <div className="bg-white  py-5 px-8 w-2/4 rounded-xl">
            <h3 className="text-2xl font-pop font-semibold mb-5">
              Please upload your profile pic
            </h3>

            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden mb-5">
              <div className=" img-preview  w-full h-full"></div>
            </div>

            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden mb-5">
              <img className="w-full h-full" src="images/demo.png" />
            </div>

            <input className="mb-5" type="file" />
            <br />
            <button className="bg-primary px-7 py-5 rounded font-nunito font-semibold text-white text-xl mr-5">
              Upload
            </button>
            <button
              onClick={handleModalClose}
              className="bg-primary px-7 py-5 rounded font-nunito font-semibold text-white text-xl mr-5"
            >
              Cancle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
