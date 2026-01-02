"use client";

import Link from "next/link";

const valuePillars = [
  {
    icon: "🎯",
    title: "Real Curation",
    description: "We feature what fits the culture. No spam posting, no filler—only content that resonates with your audience and our community.",
    learnMore: "#results",
  },
  {
    icon: "📊",
    title: "Transparent Delivery",
    description: "Clear expectations, honest turnaround times, and detailed reporting snapshots. You always know exactly what you're getting and when.",
    learnMore: "#results",
  },
  {
    icon: "🚀",
    title: "Growth-Focused Strategy",
    description: "We position your release for discovery, not just a post. Every promotion is crafted to build momentum and connect you with real fans.",
    learnMore: "#results",
  },
  {
    icon: "✨",
    title: "Trust & Reputation",
    description: "Proof-first approach. Real results, authentic testimonials, and consistent delivery—we earn your trust through demonstrated success.",
    learnMore: "#results",
  },
];

export default function WhyRapsMedia() {
  const handleScrollToResults = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const resultsSection = document.getElementById("results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 px-4 bg-[rgba(228,237,255,0.6)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            Why RapsMedia
          </h2>
          <p className="text-lg text-[#4A4A5C] max-w-2xl mx-auto">
            We're not just another promo page. We're a cultural platform built for artists who demand more than generic posts.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {valuePillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.75)] backdrop-blur-sm p-8 rounded-lg border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.25)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-[#0B0B0F] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#4A4A5C] mb-4 leading-relaxed">
                {pillar.description}
              </p>
              <Link
                href={pillar.learnMore}
                onClick={handleScrollToResults}
                className="inline-block text-sm font-semibold text-[#8FA0FF] hover:text-[#AEBBFF] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#results"
            onClick={handleScrollToResults}
            className="inline-block px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors shadow-[0_4px_12px_rgba(11,11,15,0.2)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.3)]"
          >
            See Results
          </Link>
        </div>
      </div>
    </section>
  );
}

