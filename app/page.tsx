import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GrowthSection from "./components/GrowthSection";
import InsightsSection from "./components/InsightsSection";
import OfferingsSection from "./components/OfferingsSection";
import StrategySection from "./components/StrategySection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <GrowthSection />
      <InsightsSection />
      <OfferingsSection />
      <StrategySection />
      {/* TODO: Add PartnershipsSection, CaseStudiesSection, DataInsightsSection, IndustryEvolutionSection, ThoughtsTrendsSection, Footer */}
    </div>
  );
}
