import React from "react";

const offerings = [
  { icon: "💡", title: "Digital Strategy" },
  { icon: "🛠️", title: "Product Engineering" },
  { icon: "🤝", title: "Customer Experience" },
  { icon: "☁️", title: "Cloud" },
  { icon: "📊", title: "Data & AI" },
];

const OfferingsSection = () => (
  <section className="w-full py-12 px-4 bg-white">
    <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Our Service Offerings & Capabilities</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {offerings.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <span className="text-4xl">{item.icon}</span>
          <span className="font-semibold text-blue-800">{item.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default OfferingsSection; 