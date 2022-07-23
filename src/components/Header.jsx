import React, { useState } from "react";
import "./Header.css";
import { TbArrowsLeft } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-[#03090e] h-[80px] 
    w-[100%] text-white flex items-center fixed top-0 right-0 left-0 z-10 "
    >
      <div className="  flex items-center w-full h-full justify-between py-4  px-7">
        <div className="flex justify-between  ">
          <div className="text-left text-3xl w-8 md:ml-5 ">Logo</div>
        </div>
        <div className="ml-0  flex items-center mr-[8rem] ">
          <ul className=" items-center hidden md:flex md:items-center ">
            <li className="text-xl mr-5 cursor-pointer hover:text-gray-300">
              Our Solution
            </li>
            <li className="text-xl mr-5 cursor-pointer hover:text-gray-300">
              API keys
            </li>

            <li className="text-xl mr-5 cursor-pointer hover:text-gray-300">
              Partners
            </li>
            <li className="text-xl mr-5 cursor-pointer hover:text-gray-300">
              About us
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:text-right absolute right-6">
          <a
            href="#"
            className="text-xl mr-4 py-2 px-4 border rounded-xl cursor-pointer"
          >
            Log in
          </a>
          <a href="#" className="text-xl py-2 px-4 rounded-lg bg-[#3d9649]">
            Sign up
          </a>
        </div>
        <div className="">
          <TbArrowsLeft
            className="text-3xl text-white cursor-pointer md:hidden"
            // className="text-white"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div
              className={`${
                open && "show-nav"
              } w-[250px] bg-[#03090e] h-[100vh] absolute right-0 rounded-l-lg 
              z-10 top-0 transition ease-in-out delay-150 duration-300`}
            >
              <FaTimes
                className="text-3xl flex absolute top-6 right-6 cursor-pointer"
                size={28}
                onClick={() => setOpen(false)}
              />
              <ul className="flex flex-col gap-4 mt-16 justify-center p-6">
                {["Our Solution", "API keys", "Partner", "About us"].map(
                  (item) => (
                    <li
                      className="cursor-pointer text-xl hover:text-gray-300"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </li>
                  )
                )}

                {/* <div className="">
                  <a href="" className="">
                    Get started
                  </a>
                  <a href="" className="">
                    Try for free
                  </a>
                </div> */}
              </ul>
              {/* buttons */}
              <div className="flex flex-col items-center justify-center px-3 gap-4 mt-6">
                <a
                  href="#"
                  className="w-full text-center text-xl rounded-xl bg-gradient-to-r bg-[#beec44] py-4 px-4"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="w-full text-center text-xl rounded-xl border py-4 px-4"
                >
                  Sign up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
