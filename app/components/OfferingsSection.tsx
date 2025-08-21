'use client';

import React from "react";
import { Services, OfferingTech } from "../types/strapi";

interface OfferingsSectionProps {
  servicesData: Services;
}

const OfferingsSection: React.FC<OfferingsSectionProps> = ({ servicesData }) => {
  // Map service titles to emojis for visual appeal
  const getServiceIcon = (title: string): string => {
    const iconMap: { [key: string]: string } = {
      "Digital Strategy": "💡",
      "Product Engineering": "🛠️",
      "Customer Experience": "🤝",
      "Cloud": "☁️",
      "Data & AI": "📊"
    };
    return iconMap[title] || "🚀";
  };

  return (
    <section className="w-full py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
        {servicesData.Title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {servicesData.Offering_Tech.map((item: OfferingTech) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <span className="text-4xl">{getServiceIcon(item.Title)}</span>
            <span className="font-semibold text-blue-800">{item.Title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection; 