import React from "react";
import { IoArrowForward } from "react-icons/io5";
import img from '../assets/images/extension.jpg'

function YourWork() {
  return (
    <div className="py-20 bg-[#043873]">
      <div className="container max-w-[1320px] mx-auto text-center items-center">
        <h1 className="text-7xl font-bold text-white">
          Your work, everywhere you are
        </h1>
        <p className="text-lg text-white my-10">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <a
          href="#"
          className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
        >
          Try Taskey
          <IoArrowForward className="ml-2 mt-1" />
        </a>
      </div>
    </div>
  );
}

export default YourWork;
