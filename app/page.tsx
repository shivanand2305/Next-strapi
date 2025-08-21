'use client';

import { useStrapiData } from "./hooks/useStrapiData";
import { useHeaderData } from "./hooks/useHeaderData";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GrowthSection from "./components/GrowthSection";
import InsightsSection from "./components/InsightsSection";
import OfferingsSection from "./components/OfferingsSection";
import StrategySection from "./components/StrategySection";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const { data: homeData, loading: homeLoading, error: homeError } = useStrapiData();
  const { data: headerData, loading: headerLoading, error: headerError } = useHeaderData();

  // Show loading if either home or header data is loading
  if (homeLoading || headerLoading) {
    return (
      <div className="font-sans min-h-screen bg-gray-100 flex items-center justify-center">
        <LoadingSpinner size="large" text="Loading content..." />
      </div>
    );
  }

  // Show error if either home or header data has an error
  if (homeError || headerError || !homeData || !headerData) {
    const errorMessage = homeError || headerError || 'Failed to load data';
    return (
      <div className="font-sans min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Content</h1>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-gray-100">
      <Header headerData={headerData} />
      <HeroSection heroData={homeData.Hero_Banner} />
      <GrowthSection growthData={homeData.Accelerating_Growth} />
      <InsightsSection digitalSolutionsData={homeData.Digital_Solutions} />
      <OfferingsSection servicesData={homeData.Services} />
      <StrategySection strategyData={homeData.Digital_Strategy} />
      {/* TODO: Add PartnershipsSection, CaseStudiesSection, DataInsightsSection, IndustryEvolutionSection, ThoughtsTrendsSection, Footer */}
    </div>
  );
}
