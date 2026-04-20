import React from "react";
import Typography from "../common/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import PC from "../../assets/Images/Home/PC.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        className="h-[500px] md:h-[500px]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex items-center justify-between h-full px-20">

      {/* LEFT SIDE */}
      <div className="max-w-md">
        <p className="text-sm mb-2">Hot Sale</p>

        <Typography variant="h1" className="leading-tight mb-6">
          Gaming Pc <br /> Complete Setup
        </Typography>

        <button className="bg-[#2196F3] text-white px-14 py-3 rounded-md">
          Explore
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <img
          src={PC}
          alt="PC"
          className="w-[500px] md:w-[500px] lg:w-[550px] object-contain"
        />
      </div>

    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
