import React from "react";
import img from "../assets/images/Apps.png";
import { IoArrowForward } from "react-icons/io5";

function Apps() {
  return (
    <div className="bg-[#043873] py-30">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h1 className="text-7xl text-white font-bold">
              Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="text-lg text-white my-10">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
            >
              Read more <IoArrowForward className="ml-2 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
