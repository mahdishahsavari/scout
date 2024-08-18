"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import SearchBar from "./SearchBar";
import { ModeToggle } from "../ModeToggle";
import SheetData from "./SheetData";
import Link from "next/link";
import { LogOut, MoveRight, ShoppingCart, User } from "lucide-react";
import { useAuth } from "@/app/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function NavbarComponent() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="p-5">
      {/* Navbar for more than md sizes*/}
      <div className="hidden lg:flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="font-bold text-2xl bg-gradient-to-tr from-sky-300 via-cyan-700 to-cyan-900 bg-clip-text text-transparent"
          >
            SCOUT
          </Link>
          <SearchBar />
        </div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-2" />
        </div>
        <div className="flex items-center justify-between gap-5 mr-10">
          <ModeToggle />
          {/* If user logged in change it */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>@{user.name}</DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col items-center justify-center">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    My Cart <ShoppingCart size={16} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    Profile <User size={16} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="flex items-center justify-between gap-2 text-rose-700"
                  >
                    Logout <LogOut size={16} />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Link
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-neutral-800 dark:bg-white px-8 py-3 text-white dark:text-neutral-800 focus:outline-none active:bg-neutral-700"
                href="/login"
              >
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <MoveRight />
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  {" "}
                  Login{" "}
                </span>
              </Link>

              <Link
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-neutral-800 dark:text-white focus:outline-none active:text-neutral-700"
                href="/register"
              >
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <MoveRight />
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  {" "}
                  Register{" "}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navbar for less than md sizes */}
      <div className="lg:hidden flex items-center justify-between">
        <SheetData />
        {/* FIXME: If user logged in change it */}
        <div className="flex items-center justify-center gap-2">
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-neutral-800 dark:bg-white px-8 py-3 text-white dark:text-neutral-800 focus:outline-none active:bg-neutral-700"
            href="/login"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <MoveRight />
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              Login{" "}
            </span>
          </Link>

          <Link
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-neutral-800 dark:text-white focus:outline-none active:text-neutral-700"
            href="/register"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <MoveRight />
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              Register{" "}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "relative top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Smartphones">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Apple</HoveredLink>
            <HoveredLink href="/">Samsung</HoveredLink>
            <HoveredLink href="/">Xiaomi</HoveredLink>
            <HoveredLink href="/">Sony</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Audio">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Bose</HoveredLink>
            <HoveredLink href="/">Sennheiser</HoveredLink>
            <HoveredLink href="/">Sony</HoveredLink>
            <HoveredLink href="/">JBL</HoveredLink>
            <HoveredLink href="/">Audio-Technica</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Laptops/Tablets">
          <div className="text-sm grid grid-cols-2 xl:grid-cols-4 gap-10 p-4">
            <ProductItem
              title="Lenovo"
              href="/"
              src="/lenovo.png"
              description="Lenovo is a prominent player in the laptop market, offering a diverse range of products tailored to various user needs."
            />
            <ProductItem
              title="HP"
              href="/"
              src="/hp.png"
              description="HP is recognized for its dedication to human progress, emphasizing the importance and fostering creativity."
            />
            <ProductItem
              title="Dell"
              href="/"
              src="/dell.png"
              description="Dell is a globally recognized technology brand known for its innovative devices"
            />
            <ProductItem
              title="Apple"
              href="/"
              src="/apple.png"
              description="Immerse yourself in the world of cutting-edge technology and seamless connectivity with Apple devices"
            />
            <ProductItem
              title="Acer"
              href="/"
              src="/acer.png"
              description="Upgrade Your Tech Experience with Acer Devices"
            />
            <ProductItem
              title="Asus"
              href="/"
              src="/asus.png"
              description="Enhance your experience with top-quality ASUS devices today"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="text-sm grid grid-cols-2 xl:grid-cols-4 gap-10 p-4">
            <ProductItem
              title="Amazon"
              href="/"
              src="/amazon.png"
              description="Amazon's smart home devices, powered by the Alexa voice assistant and enhanced with generative AI"
            />
            <ProductItem
              title="LG"
              href="/"
              src="/lg.png"
              description="Experience modern living with LG devices, designed to enhance your home with innovation and style"
            />
            <ProductItem
              title="Google"
              href="/"
              src="/google.png"
              description="Google's smart home devices, powered by the Google Assistant and enhanced with Gemini AI technology"
            />
            <ProductItem
              title="Philips Hue"
              href="/"
              src="/hue.svg"
              description="Illuminate your world with smart lighting that adapts to your life"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Gadgets">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Amazon</HoveredLink>
            <HoveredLink href="/">Google</HoveredLink>
            <HoveredLink href="/">Apple</HoveredLink>
            <HoveredLink href="/">Samsung</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
