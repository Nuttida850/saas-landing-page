import React, { useState } from "react";
import Logo from "../assets/logos/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const ToggleNavbar = () => {
    setToggle(!toggle);
  };
  return (
    <div className="bg-blue-800">
      <div className="container max-w-[1320px] md:h-[80px] mx-auto h-auto  p-10  flex flex-col md:flex-row md:justify-between md:items-center relative">
        <div>
          <img src={Logo} alt='' />
        </div>
        <ul className={`${!toggle ? 'hidden':'flex'} md:flex flex-col space-y-5 mt-5 md:mt-0 md:flex-row md:space-x-5 md:space-y-0 text-lg text-white items-center`}>
          <li>
            <a href="#" className="flex">
              Products
              <IoIosArrowDown className="ml-2 mt-1" />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              Solutions
              <IoIosArrowDown className="ml-2 mt-1" />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              Resources
              <IoIosArrowDown className="ml-2 mt-1" />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              Pricing
              <IoIosArrowDown className="ml-2 mt-1" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex px-8 py-2 bg-amber-200 rounded-lg text-blue-600">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white">
              Try Whitepace free
              <IoArrowForward className="ml-2 mt-1" />
            </a>
          </li>
        </ul>
        <IoMenu onClick={ToggleNavbar} className="text-2xl text-white cursor-pointer md:hidden flex absolute right-5" />
      </div>
    </div>
  );
}

export default Navbar;
