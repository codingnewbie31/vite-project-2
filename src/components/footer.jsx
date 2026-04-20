import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-20 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* 1. Store Info */}
        <div>
          <h2 className="text-[#2196F3] font-bold text-lg mb-4">
            Store Name
          </h2>
          <p className="text-gray-600 text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s
            standard dummy text ever since the 1500s.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            © 2023 WQsoftwares Inc. All rights reserved.
          </p>
        </div>

        {/* 2. Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>Store</li>
            <li>Accessories</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* 3. Our Offers */}
        <div>
          <h3 className="font-semibold mb-4">Our Offers</h3>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* 4. Newsletter */}
        <div>
          <p className="text-blue-500 text-sm mb-2">
            Subscribe to our emails
          </p>

          <h3 className="font-semibold text-lg mb-4">
            For latest News & Updates
          </h3>

          {/* Input */}
          <div className="flex items-center border rounded overflow-hidden mb-6">
            <input
              type="text"
              placeholder="Enter your Email"
              className="px-3 py-2 w-full outline-none"
            />
            <button className="bg-[#2196F3] text-white px-4 py-2">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-700">
            <FaInstagram className="cursor-pointer hover:text-blue-500" />
            <FaYoutube className="cursor-pointer hover:text-blue-500" />
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Footer;