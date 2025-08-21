'use client';

import React from "react";
import { AcceleratingGrowth } from "../types/strapi";
import { StrapiApiService } from "../services/strapiApi";

interface GrowthSectionProps {
  growthData: AcceleratingGrowth;
}

const GrowthSection: React.FC<GrowthSectionProps> = ({ growthData }) => {
  const imageUrl = growthData.Left_Image?.[0]?.url 
    ? StrapiApiService.getStrapiImageUrl(growthData.Left_Image[0].url)
    : './assets/about.webp';

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-white">
      <img 
        src={imageUrl} 
        alt="Team working" 
        className="w-full md:w-1/2 max-w-md rounded shadow-lg" 
      />
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">{growthData.Title}</h2>
        <p className="text-gray-700 mb-4">{growthData.Sub_Title}</p>
        <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
          {growthData.Button}
        </button>
      </div>
    </section>
  );
};

export default GrowthSection; 