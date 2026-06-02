import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  if (location.pathname.startsWith("/message")) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060912]/90 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-rose-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-violet-500/50 transition-transform group-hover:rotate-12">
            🕶️
          </div>

          <div>
            <span className="font-syne font-bold text-2xl text-white tracking-tighter">
              ANON
            </span>

            <div className="text-[10px] text-white/40 -mt-1 tracking-[1px]">
              IDENTITY NETWORK
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          <Link
            to="/"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/view"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Messages
          </Link>

          <Link
            to="/profile"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Link
          </Link>

          <Link
            to="/signin"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-xl transition-colors"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060912] border-t border-white/10 py-6">
          <div className="flex flex-col items-center gap-6 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              About
            </Link>

            <Link
              to="/faqs"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              FAQs
            </Link>

            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;