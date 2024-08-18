import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        type="search"
        id="Search"
        placeholder="Search for..."
        className="w-fit rounded-2xl border-gray-200 p-3 pe-10 shadow-xl sm:text-sm focus:scale-105 focus:border-2 transition-all duration-300 bg-gray-200 dark:bg-gray-800 outline-none focus:border-blue-300 text-neutral-800 dark:text-white font-medium text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 dark:text-zinc-200 hover:opacity-85"
        >
          <Search size={16} />
        </button>
      </span>
    </div>
  );
}
