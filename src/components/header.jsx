import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { menus } from "../assets/constants/navbar";
import { Link, useLocation } from "react-router-dom";
import { FaTruck, FaRegHeart } from "react-icons/fa";
import Typography from "./common/Typography";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      {/* Top container */}
      <div className="h-8 border-b-2 px-20 flex justify-between">
        {/* left side */}
        <div className="flex gap-2">
          <Typography variant="small" className="hover:text-blue-600 cursor-pointer">Eng</Typography>
          <Typography variant="small" className="hover:text-blue-600 cursor-pointer">USD</Typography>
        </div>
        {/* right side */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <FaTruck />
            <Typography variant="small">Track Order</Typography>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <FaRegHeart />
            <Typography variant="small">Wish List</Typography>
          </div>
        </div>
      </div>

      {/* Middle container */}
      <div className="px-20 py-8 flex items-center justify-between">
        <Typography variant="h3" className="text-[#2196F3] font-bold">
          LOGO HERE
        </Typography>

        <div>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <div className="flex items-center gap-1 px-3 py-2 cursor-pointer whitespace-nowrap">
              <Typography variant="small" className="text-gray-600">All Categories</Typography>
              <span className="text-xs text-gray-600">▾</span>
            </div>

            <input
              placeholder="Search..."
              type="text"
              className="w-96 px-3 py-2 outline-none text-sm"
            />
            <button className="bg-[#2196F3] px-4 py-2 text-white flex items-center justify-center">
              <IoSearch size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FiShoppingCart size={28} />
          <RxAvatar size={28} />
        </div>
      </div>

      {/* Navbar container */}
      <div className="bg-[#2196F3] p-6 text-center flex items-center justify-center gap-20">
        {menus?.map((menu) => (
          <Link
            to={menu.pathName}
            key={menu.id}
            className={`text-white hover:underline ${location?.pathname === menu.pathName ? "underline text-white" : ""}`}
          >
            <Typography variant="small" className="text-white">
              {menu?.pathValue}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;