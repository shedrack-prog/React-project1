import React from "react";
import bg2 from "../assets/bg2.svg";
import bg1 from "../assets/bg1.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="h-[100%] md:h-[100vh]   w-full bg-[#03090e] text-white pt-[80px] mt-6 pb-6
md:flex md:items-center md:justify-center
    "
    >
      <div className="h-[100%] md:w-[95vw]  md:h-[80vh]  md:flex  md:items-center md:justify-between ">
        <div className="flex flex-col justify-center py-6 px-8 mt md:h-full">
          <h2 className=" text-3xl mb-6 md:text-[3rem] lg:leading-[4rem] md:leading-[3.5rem] lg:text-[3.5rem]">
            Build robust <span className="grad-1"> scalable </span>
            <br /> <span className="grad-2">apps</span> faster than <br />
            ever before
          </h2>

          <div className="w-[95%] md:w-[80%]">
            <p className="leading-7 text-lg">
              From databases into GraphQL in just under a minute. Ship and
              maintain APIs on any environment.
            </p>
            <div className="mt-7 flex items-center md:items-start md:justify-start justify-center ">
              <a
                href=""
                className="py-3 px-3 bg-slate-50 cursor-pointer hover:scale-105 text-black text-xl mr-3 rounded-sm"
              >
                Get started
              </a>
              <a
                href=""
                className="py-3 px-3 cursor-pointer hover:scale-105 bg-[#aecf51] text-xl rounded-md"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full md:items-center justify-center h-[270px] p-3 lg:w-[1000px] lg:ml-8 lg:h-[400px]
        md:h-[400px] md:w-[1000px]  oveflow-x-hidden"
        >
          <img
            src={bg1}
            alt="image "
            className="mt-2 h-full md:w-[90%] lg:w-[90%] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
