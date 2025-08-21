'use client';

import React from "react";
import { DigitalSolutions, CardComponent } from "../types/strapi";
import { StrapiApiService } from "../services/strapiApi";

interface InsightsSectionProps {
  digitalSolutionsData: DigitalSolutions;
}

const InsightsSection: React.FC<InsightsSectionProps> = ({ digitalSolutionsData }) => {
  return (
    <section className="w-full py-12 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
        {digitalSolutionsData.Title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {digitalSolutionsData.Card_Section.map((item: CardComponent) => {
          const imageUrl = item.Card_Image?.[0]?.url 
            ? StrapiApiService.getStrapiImageUrl(item.Card_Image[0].url)
            : './assets/UX-min.webp';

          return (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img 
                src={imageUrl} 
                alt={item.Title} 
                className="w-24 h-24 object-cover rounded mb-4" 
              />
              <h3 className="font-semibold text-lg mb-2 text-blue-800">{item.Title}</h3>
              <p className="text-gray-600 text-sm">{item.Sub_Title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InsightsSection; 