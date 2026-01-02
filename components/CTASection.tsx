"use client";

import Link from "next/link";

export default function CTASection() {
  const handleScrollToResults = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const resultsSection = document.getElementById("results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const partnerCategories = ["Studios", "Videographers", "Brands", "Event Hosts", "Labels", "Managers"];

  return (
    <section className="relative bg-gradient-to-br from-[#AEBBFF] via-[#C5D0FF] to-[#8FA0FF] py-20 px-4 overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0B0B0F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0B0B0F] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0B0B0F] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B0B0F] mb-6 leading-tight">
          Premium Music Promotion for Hip-Hop Artists
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#111118] mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          Get featured on RapsMedia's curated platform, reach real fans who engage, and grow your audience with transparent reporting—no bots, no empty promises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/promote"
            className="px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-all shadow-[0_4px_12px_rgba(11,11,15,0.3)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.4)] text-lg"
          >
            Promote Your Song
          </Link>
          <Link
            href="#results"
            onClick={handleScrollToResults}
            className="px-8 py-4 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm text-[#0B0B0F] font-semibold rounded-lg hover:bg-white transition-all border-2 border-[#0B0B0F] shadow-[0_2px_8px_rgba(11,11,15,0.15)] text-lg"
          >
            See Proof
          </Link>
        </div>

        {/* Micro-Proof Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#0B0B0F]">200+</span>
            <span className="text-[#111118] font-medium">artists trusted us</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#0B0B0F]">+28%</span>
            <span className="text-[#111118] font-medium">avg. reach increase</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#0B0B0F]">24–72h</span>
            <span className="text-[#111118] font-medium">turnaround time</span>
          </div>
        </div>

        {/* Partner Badges */}
        <div className="pt-8 border-t border-[rgba(11,11,15,0.2)]">
          <p className="text-sm text-[#4A4A5C] mb-4 uppercase tracking-wide font-semibold">
            Featured With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[rgba(255,255,255,0.7)] backdrop-blur-sm rounded-full border border-[rgba(11,11,15,0.2)] text-[#0B0B0F] font-medium text-sm hover:bg-[rgba(255,255,255,0.9)] transition-colors"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
