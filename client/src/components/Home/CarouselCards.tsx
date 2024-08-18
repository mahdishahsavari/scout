"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import FlipText from "../ui/FlipText";
import { ParallaxScroll } from "../ui/parallax-scroll";

export default function CarouselCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <FlipText
          className="text-xl font-bold tracking-[-0.1em] text-black dark:text-white lg:text-5xl md:text-2xl md:leading-[5rem]"
          word="Get The Best Products You Need"
        />
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Most Recent Devices.
        </span>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos
        saepe molestias rerum culpa quis, nostrum porro accusantium dolorem
        ullam quo quasi cupiditate, qui accusamus ut quisquam nisi voluptates
        adipisci?
      </p>
      <ParallaxScroll images={images} />
    </div>
  );
};

const data = [
  {
    category: "Smartphone",
    title: "Find Your Favorite Smartphone",
    src: "/phone3.jpg",
    content: (
      <Gallery
        images={[
          "/phone1.jpg",
          "/phone2.jpg",
          "/phone4.jpg",
          "/phone5.jpg",
          "/phone6.jpg",
          "/phone7.jpg",
        ]}
      />
    ),
  },
  {
    category: "Audio",
    title: "Better audio performance playing",
    src: "/audio4.jpg",
    content: (
      <Gallery
        images={[
          "/audio1.jpg",
          "/audio2.jpg",
          "/audio3.jpg",
          "/audio4.jpg",
          "/audio5.jpg",
          "/audio6.jpg",
        ]}
      />
    ),
  },
  {
    category: "Laptop & Tablet",
    title: "High quality and most recent laptops",
    src: "/laptop3.jpg",
    content: (
      <Gallery
        images={[
          "/laptop1.jpg",
          "/laptop2.jpg",
          "/laptop4.jpg",
          "/laptop6.jpg",
          "/laptop5.jpg",
          "/tablet1.jpg",
          "/laptop2.jpg",
          "/laptop3.jpg",
          "/laptop4.jpg",
          "/laptop5.jpg",
          "/laptop6.jpg",
        ]}
      />
    ),
  },

  {
    category: "Home Device",
    title: "You can Control Your Home",
    src: "/home-elec2.jpg",
    content: (
      <Gallery
        images={["/home-elec1.jpg", "/home-elec2.jpg", "/home-elec3.jpg"]}
      />
    ),
  },
  {
    category: "Gadgets",
    title: "Photography just got better.",
    src: "/gadget17.jpg",
    content: (
      <Gallery
        images={[
          "/gadget1.jpg",
          "/gadget2.jpg",
          "/gadget3.jpg",
          "/gadget4.jpg",
          "/gadget5.jpg",
          "/gadget6.jpg",
          "/gadget7.jpg",
          "/gadget8.jpg",
          "/gadget9.jpg",
          "/gadget10.jpg",
          "/gadget11.jpg",
          "/gadget12.jpg",
          "/gadget13.jpg",
          "/gadget14.jpg",
          "/gadget15.jpg",
          "/gadget16.jpg",
          "/gadget18.jpg",
          "/gadget19.jpg",
          "/gadget20.jpg",
        ]}
      />
    ),
  },
];
