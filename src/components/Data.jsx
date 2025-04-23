import React from "react";
import { IoArrowForward } from "react-icons/io5";
import img from "../assets/images/Work Together Image.png";

function Data() {
  return (
    <div className="py-30">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-7xl font-bold">100% your data</h1>
            <p className="text-lg my-10">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
            >
              Read more <IoArrowForward className="ml-2 mt-1" />
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

export default Data;
