"use client";

import React from "react";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

export default function UsersCommentsStack() {
  return (
    <div className="h-[40rem] flex justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "John Doe",
    designation: "Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Producer",
    content: (
      <p>
        I love shopping , <Highlight>deleting it right away</Highlight> Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolore id obcaecati,
        accusamus placeat maiores, cumque, perferendis eos ea minus tempora nam.
        Quo, blanditiis quaerat nesciunt saepe quis harum repudiandae facere!{" "}
        <Highlight>scout.com</Highlight> so that it can easily be confused with
        adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Home Decorator",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
  {
    id: 3,
    name: "John Doe",
    designation: "UI Designer",
    content: (
      <p>
        Lorem ipsum dolor sit amet.
        <Highlight>Fight Club</Highlight> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. club. The second rule of
        <Highlight>Fight club</Highlight>Lorem ipsum dolor sit amet consectetur.
      </p>
    ),
  },
  {
    id: 4,
    name: "John Doe",
    designation: "Fashion designer",
    content: (
      <p>
        this is fantastic
        <Highlight>I love create account here</Highlight> is that you do not
        talk about fight club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
  {
    id: 5,
    name: "John Doe",
    designation: "The Explorer",
    content: (
      <p>
        Lorem ipsum dolor sit amet.
        <Highlight>Fight Club</Highlight>Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Repellat, ab?
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
