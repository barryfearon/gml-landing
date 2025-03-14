"use client";

import React from "react";

const CompetitorComparison: React.FC = () => {
  const competitors = [
    {
      name: "Our Service",
      price: "£1,500+",
      features: "AI-Powered, SEO-Optimized, Custom UX Design",
      support: "24/7 Support",
      rating: "★★★★★",
    },
    {
      name: "Competitor A",
      price: "£2,000+",
      features: "Basic SEO, Pre-Made Templates",
      support: "Business Hours Only",
      rating: "★★★☆☆",
    },
    {
      name: "Competitor B",
      price: "£1,200+",
      features: "Custom Design, Limited SEO",
      support: "Email Support Only",
      rating: "★★★☆☆",
    },
    {
      name: "Competitor C",
      price: "£2,500+",
      features: "Full Customization, No AI",
      support: "Phone Support",
      rating: "★★★★☆",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-cyber-softGray">
      <h2 className="text-3xl font-semibold text-center mb-6 text-cyber-light">
        Competitor Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg text-cyber-light">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left">Service</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Features</th>
              <th className="py-3 px-6 text-left">Support</th>
              <th className="py-3 px-6 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-4 px-6 font-bold">{competitor.name}</td>
                <td className="py-4 px-6">{competitor.price}</td>
                <td className="py-4 px-6">{competitor.features}</td>
                <td className="py-4 px-6">{competitor.support}</td>
                <td className="py-4 px-6">{competitor.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorComparison;
