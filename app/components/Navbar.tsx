"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-semibold">MyApp</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <a href="/register" className="hover:text-gray-400">
            Register
          </a>
          <a href="/signin" className="hover:text-gray-400">
            Sign In
          </a>
        </div>

        {/* Mobile Burger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <a href="/register" className="text-white hover:text-gray-400">
            Register
          </a>
          <a href="/signin" className="text-white hover:text-gray-400">
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
