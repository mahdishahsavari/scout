"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { RxArrowTopRight } from "react-icons/rx";
import { Laptop, Smartphone } from "lucide-react";
import { SiEngadget } from "react-icons/si";
import { FaAudioDescription } from "react-icons/fa";
import FlipText from "../ui/FlipText";

export const ServiceData = [
  {
    icon: SiEngadget,
    path: "/",
    title: "Gadget",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "/gadget15.jpg",
  },
  {
    icon: Laptop,
    path: "/",
    title: "Laptop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/laptop5.jpg",
  },
  {
    icon: Smartphone,
    path: "/",
    title: "Smartphone",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/phone6.jpg",
  },
  {
    icon: FaAudioDescription,
    path: "/",
    title: "Audio",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "audio4.jpg",
  },
  {
    icon: FaAudioDescription,
    path: "/",
    title: "Audio",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/audio2.jpg",
  },
  {
    icon: SiEngadget,
    path: "/",
    title: "Gadget",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/gadget18.jpg",
  },
];

export default function PopularProducts() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 h-screen bg-card">
      <FlipText
        word="Popular Products"
        className="text-xl md:text-2xl lg:text-3xl font-semibold"
      />
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`${item.path}`}
              className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden hover:scale-105 transition-all"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
