import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
      <footer className="bg-blue-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">Korai Health</h2>
          <p className="text-gray-300">
            Making your health reports clear, simple, and meaningful.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Upload</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
           </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Korai Health. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer