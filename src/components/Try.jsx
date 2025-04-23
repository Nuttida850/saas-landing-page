import React from "react";
import { IoArrowForward } from "react-icons/io5";
import logo01 from "../assets/logos/apple-black-logo 2.png";
import logo02 from "../assets/logos/windows-logo 1.png";
import logo03 from "../assets/logos/android-logo 1.png";

function Try() {
  const logos = [logo01, logo02, logo03];
  return (
    <div className="py-20 bg-[#043873]">
      <div className="container max-w-[1320px] mx-auto px-10 text-center">
        <div>
          <h1 className="text-7xl font-bold text-white">
            Try Whitepace <br />
            today
          </h1>
          <p className="text-2xl text-white my-10">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <a
            href="#"
            className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white"
          >
            Let's Go
            <IoArrowForward className="ml-2 mt-1" />
          </a>
          <p className="text-2xl text-white my-10">On a big team? Contact sales </p>
          <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 justify-center items-center">
            {logos.map((logo, index) => (
                <li key={index}><img src={logo} alt="" /></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Try;
