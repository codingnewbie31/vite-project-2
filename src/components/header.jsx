import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { menus } from "../assets/constants/navbar";
import { Link, useLocation } from "react-router-dom";
import { FaTruck, FaRegHeart } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  return (
    <div>
        {/* Top container */}
      <div className="h-8 border-b-2 px-20 flex justify-between ">
        {/* left side */}
        <div className="flex gap-2">
        <div className="text-[18px] hover:text-blue-600">Eng</div>
        <div className="text-[18px] hover:text-blue-600">USD</div>
        </div>
        {/* right side */}
        <div className="flex gap-4">
          
          <div className="flex items-center gap-2 hover:text-blue-600">
            <FaTruck />
            <span>Track Order</span>
          </div>
          
          <div className="flex items-center gap-2 hover:text-blue-600">
            <FaRegHeart />
            <span>Wish List</span>
          </div>
        </div>
      </div>
      {/* middle container */}
      <div className="px-20 py-8 flex items-center justify-between">
        <div className="text-[#2196F3] text-[25px] font-bold ">LOGO HERE</div>
        <div>
          <div className="border p-2 flex items-center gap-2">
            <input
              placeholder="Search"
              type="text"
              className="w-96 border border-gray-500 px-3 py-2 rounded-md"
            />
            <button className="bg-[#2196F3] p-3 rounded-md text-white">
              <IoSearch />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FiShoppingCart size={28} />
          <RxAvatar size={28} />
        </div>
      </div>
        {/* navbar container */}
      <div className="bg-[#2196F3] p-6 text-center  flex items-center justify-center gap-20">
        {menus?.map((menu) => {
          return (
            <Link
              to={menu.pathName}
              key={menu.id}
              className={`text-white hover:underline ${location?.pathname === menu.pathName ? "underline text-white" : ""}`}
            >
              {menu?.pathValue}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
