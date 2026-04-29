import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <div className="flex items-center justify-between px-16 py-5 border-b border-gray-100">
        <div className="text-[#2196F3] text-2xl font-bold">LOGO HERE</div>
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm text-gray-600 hover:text-[#2196F3]"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#2196F3] text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-8 py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Your One-Stop <span className="text-[#2196F3]">Tech Shop</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-[500px] mb-8">
          Explore the latest desktops, laptops, accessories and more all in one place.
        </p>
        <div className="flex gap-4">
          <Link
            to="/home"
            className="bg-[#2196F3] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-blue-600 transition"
          >
            Shop Now
          </Link>
          <Link
            to="/signup"
            className="border border-[#2196F3] text-[#2196F3] px-8 py-3 rounded text-sm font-semibold hover:bg-blue-50 transition"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Features Row */}
      <div className="flex justify-center gap-16 px-16 py-12 bg-white border-t border-gray-100">
        <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
          <FaShippingFast className="text-[#2196F3] text-4xl" />
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Free Shipping</h4>
          <p className="text-xs text-gray-500">On all orders over $500</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
          <FaUndo className="text-[#2196F3] text-4xl" />
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">100% Refund</h4>
          <p className="text-xs text-gray-500">30 day return policy</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
          <FaHeadset className="text-[#2196F3] text-4xl" />
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Support 24/7</h4>
          <p className="text-xs text-gray-500">Always here to help you</p>
        </div>
      </div>

    </div>
  );
};

export default Landing;