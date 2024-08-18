import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchBar from "./SearchBar";
import { ModeToggle } from "../ModeToggle";
import LetterPullup from "../ui/LetterPullup";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function SheetData() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between gap-3 my-8">
              <SearchBar />
              <ModeToggle />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-3 my-5">
            <h2 className="font-bold text-center underline text-lg">
              Categories
            </h2>
            <Link href="/" className="hover:underline">
              <LetterPullup
                words="Smartphone & Accessories"
                delay={0.05}
                className="text-base md:text-base font-medium"
              />
            </Link>
            <Link href="/" className="hover:underline">
              <LetterPullup
                words="Laptops & Tablets"
                delay={0.05}
                className="text-base md:text-base font-medium"
              />
            </Link>
            <Link href="/" className="hover:underline">
              <LetterPullup
                words="Audio & Headphones"
                delay={0.05}
                className="text-base md:text-base font-medium"
              />
            </Link>
            <Link href="/" className="hover:underline">
              <LetterPullup
                words="Gadgets & Wearables"
                delay={0.05}
                className="text-base md:text-base font-medium"
              />
            </Link>
            <Link href="/" className="hover:underline">
              <LetterPullup
                words="Home Electronics"
                delay={0.05}
                className="text-base md:text-base font-medium"
              />
            </Link>
            <Link
              href="/"
              className=" my-20 w-fit font-bold text-2xl bg-gradient-to-tr from-sky-300 via-cyan-700 to-cyan-900 bg-clip-text text-transparent"
            >
              SCOUT
            </Link>
            <p>
              &copy; 2024 -{" "}
              <Link
                href="https://github.com/mahdishahsavari"
                className="hover:text-teal-500 hover:underline"
              >
                mhdy shahsavari
              </Link>
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
