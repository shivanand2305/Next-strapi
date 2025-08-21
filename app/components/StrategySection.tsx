'use client';

import React from "react";
import { DigitalStrategy } from "../types/strapi";
import { StrapiApiService } from "../services/strapiApi";

interface StrategySectionProps {
  strategyData: DigitalStrategy;
}

const StrategySection: React.FC<StrategySectionProps> = ({ strategyData }) => {
  const imageUrl = strategyData.Left_Image?.[0]?.url 
    ? StrapiApiService.getStrapiImageUrl(strategyData.Left_Image[0].url)
    : './assets/service-slide-1.webp';

  // Parse the Sub_Title to extract bullet points
  const parseBulletPoints = (text: string): string[] => {
    const lines = text.split('\n');
    return lines.filter(line => line.trim() !== '');
  };

  const bulletPoints = parseBulletPoints(strategyData.Sub_Title);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-gray-50">
      <img 
        src={imageUrl} 
        alt="Strategy" 
        className="w-full md:w-1/2 max-w-md rounded shadow-lg" 
      />
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">{strategyData.Title}</h2>
        <p className="text-gray-700 mb-4">{bulletPoints[0]}</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {bulletPoints.slice(1).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button className="mt-2 px-5 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
          {strategyData.button}
        </button>
      </div>
    </section>
  );
};

export default StrategySection; 