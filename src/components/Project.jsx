import React from "react";
import img from "../assets/images/project-management.jpg";
import { IoArrowForward } from "react-icons/io5";

function Project() {
  return (
    <div className="py-30">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-7xl font-bold">
              Project <br /> Management
            </h1>
            <p className="text-lg my-10">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-[#4F9CF9] rounded-lg text-white mb-10"
            >
              Get Started
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

export default Project;
