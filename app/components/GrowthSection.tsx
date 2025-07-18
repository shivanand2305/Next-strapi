import React from "react";

const GrowthSection = () => (
  <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-white">
    <img src="/growth.jpg" alt="Team working" className="w-full md:w-1/2 max-w-md rounded shadow-lg" />
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Accelerating Growth Through Digital Solutions</h2>
      <p className="text-gray-700 mb-4">As trusted industry leaders in digital solutions, we drive growth and enable automation for our valued customers and communities. Our strong partnerships with world-leading technology companies and a global team of experts help us build scalable, future-ready solutions for your business. We blend the latest in digital strategy, engineering, and analytics with industry-leading tools to deliver measurable business outcomes, growth, and resilience.</p>
      <p className="text-gray-700">Let us help you accelerate your digital transformation by enabling actionable insights and seamless integration across the business lifecycle. Discover how our solutions can help you stay ahead in the digital age.</p>
      <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">Read More</button>
    </div>
  </section>
);

export default GrowthSection; 