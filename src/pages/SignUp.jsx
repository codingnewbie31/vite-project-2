import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 px-8 py-4 border-b border-gray-100">
        <Link to="/" className="text-[#2196F3]">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-700">Sign up</span>
      </div>

      {/* Form Container */}
      <div className="flex flex-col items-center py-12">
        <div className="w-[400px]">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-8">
            Upgrade your tech game with us!
          </p>
          {/* Name */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 mb-1 block">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="myemail@email.com"
              className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 mb-1 block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-1 block">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          {/* Sign Up Button */}
          <button className="w-full bg-[#2196F3] text-white py-3 rounded text-sm font-semibold hover:bg-blue-600 transition mb-4">
            Sign Up
          </button>
          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have account?{" "}
            <Link to="/signin" className="text-[#2196F3] font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
