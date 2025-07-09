import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top bar: Logo and Contact Info */}
        <div className="flex items-center justify-between">
          {/* Logo and company name */}
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/7a812372-300a-4020-8fe1-d4a713a7356b.png"
              alt="First Farrufy Logo"
              className="h-6 w-auto"
            />
            <div>
              <h1 className="text-sm font-semibold text-white">FIRST FARRUFY</h1>
              <p className="text-[10px] text-gray-300">TRAVEL & TOURS LTD.</p>
              <p className="text-[9px] text-blue-400">...bringing the world to your door step</p>
            </div>
          </div>

          {/* Contact details */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[13px] text-gray-200">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>08138310649 / 07013691442</span>
            </div>
            <div className="flex items-center space-x-2 text-[13px] text-gray-200">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>firstfarrufytravels@gmail.com</span>
            </div>
          </div>

          {/* Quick Links Toggle */}
          <div>
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Quick Links Dropdown (visible on all devices) */}
        {menuOpen && (
          <nav className="mt-4 bg-gray-800 rounded-md p-4">
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="#home" className="block hover:text-blue-400" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-blue-400" onClick={toggleMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="block hover:text-blue-400" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#flight-booking" className="block hover:text-blue-400" onClick={toggleMenu}>
                  Flight Booking
                </a>
              </li>
              <li>
                <a href="#hajj-packages" className="block hover:text-blue-400" onClick={toggleMenu}>
                  Hajj Packages
                </a>
              </li>
              <li>
                <a href="#umrah-packages" className="block hover:text-blue-400" onClick={toggleMenu}>
                  Umrah Packages
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
