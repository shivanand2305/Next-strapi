import React from "react";

const Header = () => (
  <header className="w-full bg-[#1a1a2e] py-4 px-8 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <img src="./assets/navlogo.png" alt="Successive Digital Logo" className="h-8" />
      {/* <span className="text-white font-bold text-lg"></span> */}
    </div>
    <nav className="flex gap-6 text-white text-sm">
      <a href="#about" className="hover:underline">About Us</a>
      <a href="#services" className="hover:underline">Services</a>
      <a href="#accelerators" className="hover:underline">Accelerators</a>
      <a href="#industries" className="hover:underline">Industries</a>
      <a href="#resources" className="hover:underline">Resources</a>
    </nav>
    <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition">Contact Us</a>
  </header>
);

export default Header; 