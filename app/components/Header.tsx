'use client';

import React from "react";
import { HeaderData } from "../types/strapi";
import { StrapiApiService } from "../services/strapiApi";

interface HeaderProps {
  headerData: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ headerData }) => {
  const logoUrl = headerData.Main_Logo?.[0]?.url 
    ? StrapiApiService.getStrapiImageUrl(headerData.Main_Logo[0].url)
    : './assets/navlogo.png';

  return (
    <header className="w-full bg-[#1a1a2e] py-4 px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img 
          src={logoUrl} 
          alt="Successive Digital Logo" 
          className="h-8" 
        />
      </div>
      <nav className="flex gap-6 text-white text-sm">
        {headerData.NavBar.map((navItem) => (
          <a 
            key={navItem.id} 
            href={navItem.Nav_Link} 
            className="hover:underline"
          >
            {navItem.Nav_Name}
          </a>
        ))}
      </nav>
      <a 
        href="#contact" 
        className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
      >
        {headerData.ContactUs}
      </a>
    </header>
  );
};

export default Header; 