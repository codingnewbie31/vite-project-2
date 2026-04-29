import React from "react";
import Typography from "../components/common/Typography";
import AboutUsimg1 from "../assets/Images/Home/AboutUsimg1.png";
import AboutUsimg2 from "../assets/Images/Home/AboutUsimg2.png";
import AboutUsimg3 from "../assets/Images/Home/AboutUsimg3.png";
import Logos from "../assets/Images/Home/Logos.png"

const AboutUs = () => {
  return (
    <div>
      {/* main image at the top */}
      <img
        src={AboutUsimg1}
        alt="About Us image 1"
        className="w-full h-[427px] object-cover "
      />

      <div className="flex gap-12 px-16 py-16 items-center">
        {/* Left Side */}
        <div className="flex-1  ">
          <h2 className="text-[#2196F3] text-2xl font-semibold mb-4">
            About Us
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt augue interdum velit euismod. Diam donec adipiscing
            tristique risus nec feugiat in fermentum. Praesent tristique magna
            sit amet purus gravida quis. Morbi quis commodo odio aenean sed.
            Nisl rhoncus mattis rhoncus urna neque. Potenti nullam ac tortor
            vitae purus. Volutpat ac tincidunt vitae semper quis. Sit amet
            cursus sit a.
          </p>

          <ul className="flex flex-col gap-3">
            <Typography variant="li">
              <Typography variant="span" />
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, etc
            </Typography>
            <Typography variant="li">
              <Typography variant="span" />
              Mempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="li">
              <Typography variant="span" />
              Minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
            <Typography variant="li">
              <Typography variant="span" />
              Velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Typography variant="li">
              <Typography variant="span" />
              Culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </ul>
        </div>

        {/* Right Side — Images */}
        <div className="relative w-[560px] h-[500px] shrink-0">
          {/* Top Right Image — smaller */}
          <img
            src={AboutUsimg2}
            alt="About 1"
            className="absolute top-0 right-0 w-[354px] h-[339px] object-cover rounded"
          />

          {/* Bottom Left Image — larger, overlaps */}
          <img
            src={AboutUsimg3}
            alt="About 2"
            className="absolute bottom-0 left-0 w-[326px] h-[326px] object-cover rounded border-[11px] border-white"
          />
        </div>
      </div>
      {/* logos */}
      <div className="bg-[#F5F5F5] px-8 py-10">

        <Typography variant="h3" className="text-center text-[#2196F3] mb-8">
          Our Techies
        </Typography>

        <img 
        src={Logos} 
        alt="Brand Logos"
        className="w-full object-contain" />
      
      </div>
    </div>
  );
};

export default AboutUs;
