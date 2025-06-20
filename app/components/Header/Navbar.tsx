"use client";

import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[114px] mx-6 rounded-b-xl bg-transparent shadow-xs  relative">
      <div className="lg:max-w-[1440px] h-full mx-auto flex items-center justify-between px-6 md:px-8">
        <h1 className="text-2xl font-extrabold uppercase">Develop.me</h1>

        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-10 text-lg font-medium">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Blog
              </a>
            </li>
          </ul>
          <button className="flex items-center gap-2 border border-black pe-3 py-2 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <MoveRight className="text-xl border rounded-full" />
            <span>Start Project</span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center p-2 border rounded-full"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t z-40 p-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Blog
              </a>
            </li>
          </ul>
          <button className="mt-4 w-full flex items-center justify-center gap-2 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
            <MoveRight className="text-xl border rounded-full" />
            <span>Start Project</span>
          </button>
        </div>
      )}
    </nav>
  );
}
