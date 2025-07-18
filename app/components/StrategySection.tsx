import React from "react";

const StrategySection = () => (
  <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-gray-50">
    <img src="/strategy.jpg" alt="Strategy" className="w-full md:w-1/2 max-w-md rounded shadow-lg" />
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Digital Strategy</h2>
      <p className="text-gray-700 mb-4">Achieve maximum value for your organization’s stakeholders in this transformative age. We help you reimagine possibilities and gain a convincing vision. We make design and technology work for your business, so you can win.</p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Digital Transformation</li>
        <li>Business and Technology Analysis</li>
        <li>Data Strategy Consulting</li>
      </ul>
      <button className="mt-2 px-5 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">Read More</button>
    </div>
  </section>
);

export default StrategySection; 