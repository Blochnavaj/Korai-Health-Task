 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
     <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <FaHeartbeat className="text-red-500 animate-pulse" />
          Korai Health
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition" onClick={closeMenu}>Upload</Link>
          <Link to="/dashboard" className="hover:text-blue-600 transition" onClick={closeMenu}>Dashboard</Link>
         </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={closeMenu}>Upload</Link>
          <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600" onClick={closeMenu}>Dashboard</Link>
         </div>
      )}
    </header>
  )
}

export default Navbar