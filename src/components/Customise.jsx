import React from "react";
import img from "../assets/images/Work Together Image.png";
import { IoArrowForward } from "react-icons/io5";

function Customise() {
  return (
    <div className="py-20">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="mb-10">
            <img src={img} alt="" />
          </div>
          <div>
            <h1 className="text-7xl font-bold">
              Customise it to <br /> your needs
            </h1>
            <p className="text-lg my-10">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-[#4F9CF9] rounded-lg text-white mb-10"
            >
              Let’s Go <IoArrowForward className="ml-2 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customise;
