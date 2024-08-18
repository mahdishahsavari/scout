import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import LetterPullup from "../ui/LetterPullup";
import UsersCommentsStack from "./UsersCommentsStack";
import Features from "./Features";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/human1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Producer",
    image: "/human2.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "Home Decorator",
    image: "/human3.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    designation: "UI Designer",
    image: "/human4.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    designation: "Fashion designer",
    image: "/human5.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "The Explorer",
    image: "/human6.jpg",
  },
];

export default function UserComments() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col items-center justify-center gap-8">
        <LetterPullup
          words="People of The Week"
          delay={0.05}
          className="font-medium"
        />
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <UsersCommentsStack />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mx-2">
        <LetterPullup
          words="Our Website Features"
          delay={0.05}
          className="font-medium"
        />
        <Features />
      </div>
    </div>
  );
}
