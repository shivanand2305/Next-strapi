import React from "react";

const HeroSection = () => (
  <section className="relative w-full h-[350px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white overflow-hidden">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
    >
      <source src="assets\bgVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Overlay Content */}
    <div className="relative z-10 p-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Redefining Digital Transformation</h1>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto">
        Transform your business growth across all touchpoints of customer experience with our digital transformation solutions.
      </p>
    </div>
  </section>
);

export default HeroSection; 