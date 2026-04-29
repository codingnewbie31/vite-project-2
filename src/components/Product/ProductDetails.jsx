import React from "react";
import { products } from "../../assets/constants/constant";
import Typography from "../common/Typography";

const ProductDetails = () => {
  return (
    <div className="flex gap-8 px-8 pb-10">

      {/* Left — Tabs */}
      <div className="flex-1 border border-gray-200 rounded-[5px]">

        {/* Tab Headers */}
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 text-sm font-medium border-b-2 border-[#2196F3] text-[#2196F3]">
            Product Information
          </button>
          <button className="px-6 py-3 text-sm font-medium border-b-2 border-transparent text-gray-500 flex items-center gap-2">
            Reviews <span className="text-gray-400 font-normal">0</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <Typography variant="p" className="text-gray-600 leading-relaxed">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
            tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus
            adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna
            pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu.
            Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.
          </Typography>
          <Typography variant="p" className="text-gray-600 leading-relaxed">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
            tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae.
          </Typography>
        </div>

      </div>

      {/* Right — Product Card */}
      <div className="w-[200px] shrink-0 bg-[#6C8EF5] rounded-[5px] p-4 flex flex-col gap-2">
        <Typography variant="h6" className="text-white font-bold">
          Product Name
        </Typography>
        <Typography variant="small" className="text-blue-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, labor
        </Typography>
        <Typography variant="h4" className="text-white font-bold">
          $299
        </Typography>
        <img
          src={products[3].image}
          alt="Product"
          className="w-full object-contain mt-2"
        />
      </div>

    </div>
  );
};

export default ProductDetails;