import React from "react";
import { contactInfo } from "../assets/constants/constant";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const iconMap = {
  FaPhone: <FaPhone className="text-[#2196F3] text-base" />,
  FaEnvelope: <FaEnvelope className="text-[#2196F3] text-base" />,
  FaMapMarkerAlt: <FaMapMarkerAlt className="text-[#2196F3] text-base" />,
};

const Contact = () => {
  return (
    <div>

      {/* Content — with padding */}
      <div className="px-8 pt-5 ">

        {/* Page Title */}
        <h2 className="text-center text-[#2196F3] text-2xl font-semibold mb-8">
          Contact Us
        </h2>

        {/* Content Row */}
        <div className="flex gap-12">

          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              We're Just a Click Away
            </h3>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#E3F2FD] flex items-center justify-center shrink-0">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="flex-[2] bg-[#F5F5F5] rounded-[5px] p-8">
            <h4 className="text-base font-bold text-gray-900 mb-6">
              Send Us Message
            </h4>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="text-sm text-gray-700 mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="User name"
                  className="w-full px-4 py-2 rounded border border-gray-200 bg-white outline-none text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-700 mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="myemail@email.com"
                  className="w-full px-4 py-2 rounded border border-gray-200 bg-white outline-none text-sm"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-700 mb-1 block">Message here</label>
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-2 rounded border border-gray-200 bg-white outline-none text-sm resize-none"
              />
            </div>

            
          </div>

        </div>
      </div>
      {/* send button  */}
      <div className="flex justify-center pb-10">
        <button className="bg-[#2196F3] text-white  p-4 rounded text-sm font-medium hover:bg-blue-600 transition">
            Send Message
        </button>
      </div>

      {/* Maps */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48962.63810911601!2d0.07926!3d52.20534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8774769170589%3A0x940571c7f803a652!2sCambridge%2C%20UK!5e0!3m2!1sen!2s!4v1600000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
};

export default Contact;