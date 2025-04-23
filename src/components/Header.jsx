import React from "react";
import { IoArrowForward } from "react-icons/io5";
import img from "../assets/images/whitepace.jpg";

function Header() {
  return (
    <div className="bg-[#043873] py-20">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[4rem] text-white font-bold leading-[1]">
              Get More Done with whitepace
            </h1>
            <p className="text-lg text-white my-10">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-[#4F9CF9] rounded-lg text-white mb-10 text-lg font-medium"
            >
              Try Whitepace free
              <IoArrowForward className="ml-2 mt-1" />
            </a>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
