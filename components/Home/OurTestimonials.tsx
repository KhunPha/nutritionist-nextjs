"use client"

import { testimonials } from "@/constants/menu";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const OurTestimonials = () => {
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
      <p className="text-[38px] font-bold text-grey-shades-15">
        Our Testimonials
      </p>
      <p className="text-[16px] font-medium text-grey-shades-20">
        Our satisfied clients share their success stories and experiences on
        their journey to better health and well-being.
      </p>

      <div className="p-5 lg:p-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard props={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTestimonials;
