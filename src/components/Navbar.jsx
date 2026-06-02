import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on all message routes
  if (location.pathname.startsWith("/message")) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060912]/80 backdrop-blur-2xl border-b border-white/10">
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
          <Link className="text-white/70 hover:text-white" to="/">Home</Link>
          <Link className="text-white/70 hover:text-white" to="/about">About</Link>
          <Link className="text-white/70 hover:text-white" to="/view">Messages</Link>
          <Link className="text-white/70 hover:text-white" to="/profile">Link</Link>
          <Link className="text-white/70 hover:text-white" to="/signin">Sign In</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060912] border-t border-white/10 py-6">
          <div className="flex flex-col items-center gap-6 text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white/80">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-white/80">About</Link>
            <Link to="/faqs" onClick={() => setIsOpen(false)} className="text-white/80">FAQs</Link>
            <Link to="/signin" onClick={() => setIsOpen(false)} className="text-white/80">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;