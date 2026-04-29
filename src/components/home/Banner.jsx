import React from "react";
import Bannerimg from "../../assets/Images/Home/Bannerimg.png";

const Banner = () => {
  return (
    <div className="h-[400px] bg-[#2196F3] flex items-center justify-between px-10 md:px-20">
      {/* Left Content Side */}
      <div className="flex flex-col gap-6 text-white max-w-md">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Build your Customs Pc <br /> NOW
        </h1>
        <button className="bg-white text-[#2196F3] font-semibold py-3 px-8 rounded-md w-fit hover:bg-gray-100 transition-colors">
          View Details
        </button>
      </div>
      {/* Right Image Side */}
      <div className="h-full flex items-end">
        <img
          src={Bannerimg}
          alt="Custom PC Builds"
          className="h-[90%] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
