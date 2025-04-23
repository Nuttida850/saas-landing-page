import React from "react";
import img from "../assets/images/Work Together Image.png";
import { IoArrowForward } from "react-icons/io5";

function Work() {
  return (
    <div className="py-20">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h1 className="text-7xl font-bold">Work Together</h1>
            <p className="text-lg my-10">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
            >
              Try it now
              <IoArrowForward className="ml-2 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
