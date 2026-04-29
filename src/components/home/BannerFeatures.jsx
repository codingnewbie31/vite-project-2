import React from "react";
import Bannerimg2 from "../../assets/Images/Home/Bannerimg2.png";
import { features } from "../../assets/constants/constant";
import { FaTruck, FaUndoAlt, FaHeadset } from "react-icons/fa";

const iconMap = {
  FaTruck: <FaTruck className="text-[#2196F3] text-5xl" />,
  FaUndoAlt: <FaUndoAlt className="text-[#2196F3] text-5xl" />,
  FaHeadset: <FaHeadset className="text-[#2196F3] text-5xl" />,
};

const BannerFeatures = () => {
  return (
    <div>
      {/* Banner */}
      <div className="flex justify-center px-8 py-6">
        <img
          src={Bannerimg2}
          alt="MacBook Pro Banner"
          className="w-full max-w-[1088px] h-[308px] object-cover rounded-[5px]"
        />
      </div>

      {/* Features */}
      <div className="flex justify-center gap-12 px-16 py-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center max-w-[300px] gap-4"
          >
            <div>{iconMap[feature.icon]}</div>
            <h4 className="text-base font-bold text-gray-900 tracking-wide">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerFeatures;