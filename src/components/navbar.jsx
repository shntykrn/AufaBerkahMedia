import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-aufa.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Layanan", path: "/layanan" },
    { name: "Peta Jangkauan", path: "/coverage" },
    { name: "Tentang Kami", path: "/about-us" },
    { name: "Daftar", path: "/register", isButton: true },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="print:hidden sticky top-0 z-50 bg-white shadow ">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImage || "/placeholder.svg"}
            alt="Aufa Logo"
            className="h-14 object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) =>
            item.isButton ? (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  isActive(item.path)
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-800 border border-green-500 hover:bg-green-500 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-base font-medium transition ${
                  isActive(item.path)
                    ? "text-[#3a2a6d] font-semibold after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#3a2a6d]"
                    : "text-gray-800 hover:text-[#3a2a6d]"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#3a2a6d]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navItems.map((item) =>
            item.isButton ? (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block mt-2 px-4 py-2 rounded-md font-medium ${
                  isActive(item.path)
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-800 border border-green-500 hover:bg-green-500 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  isActive(item.path)
                    ? "text-[#3a2a6d] font-semibold border-b-2 border-[#3a2a6d]"
                    : "text-gray-800 hover:text-[#3a2a6d]"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
