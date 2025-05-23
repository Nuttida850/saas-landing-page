import React from "react";
import img from "../assets/images/extension.jpg";
import { IoArrowForward } from "react-icons/io5";

function Extension() {
  return (
    <div className="bg-[#043873] py-30">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-7xl text-white font-bold">Use as Extension</h1>
            <p className="text-lg text-white my-10">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
            >
              Let's Go
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

export default Extension;
