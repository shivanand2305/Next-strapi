import React from "react";

const insights = [
  {
    img: "/insight1.jpg",
    title: "UX Design: Crafting Engaging Digital Experiences",
    desc: "Delivering intuitive and delightful user experiences across platforms."
  },
  {
    img: "/insight2.jpg",
    title: "Advanced Data Analytics: Transforming Healthcare",
    desc: "Leveraging data to drive better outcomes in healthcare."
  },
  {
    img: "/insight3.jpg",
    title: "How Does Data Improving Customer Experience?",
    desc: "Using actionable insights to enhance customer journeys."
  },
  {
    img: "/insight4.jpg",
    title: "Telemedicine: A Viable Healthcare Tech Solution",
    desc: "Innovative solutions for remote healthcare delivery."
  }
];

const InsightsSection = () => (
  <section className="w-full py-12 px-4 bg-gray-50">
    <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Creating Digital Solutions Driven By Actionable Insights</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {insights.map((item, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
          <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-blue-800">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default InsightsSection; 