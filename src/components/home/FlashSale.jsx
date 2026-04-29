import React from "react";
import { products, features } from "../../assets/constants/constant";
import Bannerimg2 from "../../assets/Images/Home/Bannerimg2.png"
import { FaTruck, FaUndoAlt, FaHeadset } from "react-icons/fa";

const FlashSale = () => {
  return (
    <div className="bg-[#F5F5F5] px-20 py-6">
      
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900">
          Flash Sale on Products
        </h3>

        {/* Countdown Timer */}
        <div className="flex gap-4 text-center">
          {["Days", "Hrs", "Mins", "Secs"].map((label, i) => (
            <div key={label} className="text-center">
              <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
              <div className="bg-[#2196F3] text-white w-12 h-12 rounded flex items-center justify-center text-base font-bold">
                {["05", "12", "30", "05"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex gap-12 justify-center flex-wrap">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="w-[330px] h-[220px] bg-white rounded-[5px] px-5 py-4 flex items-center justify-between shadow-sm"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-2 min-w-[140px]">
              <p className="text-base font-bold text-gray-900 whitespace-nowrap">
                Product Name
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#2196F3] font-semibold whitespace-nowrap">
                  {product.currency}{product.price}
                </span>
                <span className="text-gray-400 line-through text-sm whitespace-nowrap">
                  {product.currency}{product.originalPrice}
                </span>
              </div>
              <p className="text-sm text-gray-700 cursor-pointer whitespace-nowrap">
                View Details →
              </p>
            </div>

            {/* RIGHT SIDE (IMAGE) */}
            <img
              src={product.image}
              alt={product.title}
              className="h-[140px] w-[140px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;