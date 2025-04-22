import React from "react";
import { IoArrowForward } from "react-icons/io5";
import img from '../assets/images/Work Together Image.png'

function Header() {
  return (
    <div className="bg-blue-800">
      <div className="container max-w-[1320px] mx-auto py-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl text-white font-bold">Get More Done with whitepace</h1>
            <p className="text-lg text-white my-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              optio veritatis error atque? Libero impedit maxime distinctio
              beatae voluptas repellendus.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
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
