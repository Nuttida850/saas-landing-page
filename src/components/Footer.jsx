import React from "react";
import logo from "../assets/logos/Logo.png";
import { IoArrowForward } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-10 bg-[#043873]">
      <div className="container max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
          <div className="flex flex-col items-center">
            <img src={logo} className="mb-3" alt="" />
            <p className="text-lg text-white">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div>
            <h2 className="text-lg text-white mb-3 font-bold">Product</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="text-[#FFE492]">
                  Overview
                </a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customer stories</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white mb-3 font-bold">Resources</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Guides & tutorials</a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white mb-3 font-bold">Company</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Media kit</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white mb-3 font-bold">Try It Today</h2>
            <p className="text-white mb-5">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-400 rounded-lg text-white mb-10"
            >
              Let's Go
              <IoArrowForward className="ml-2 mt-1" />
            </a>
          </div>
        </div>
        <hr
          className="text-white
        my-5"
        />
        <div className="flex flex-col md:flex-row md:justify-between">
          <ul className="text-white flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 items-center">
            <li>
              <a href="#" className="flex">
                <TfiWorld className="mr-3" />
                English
                <IoIosArrowDown className="ml-2 mt-1" />
              </a>
            </li>
            <li>
              <a href="#">Terms & privacy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">©2021 Whitepace LLC.</a>
            </li>
          </ul>
          <ul className="text-white space-y-5 md:space-y-0 md:space-x-5 flex flex-col md:flex-row items-center mt-10 md:mt-0">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
