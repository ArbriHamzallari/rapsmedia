"use client";

import Link from "next/link";
import { results } from "@/lib/mock/results";
import ResultCard from "./ResultCard";

export default function ResultsWall() {
  // Display first 12 results
  const displayedResults = results.slice(0, 12);

  return (
    <section id="results" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            Results Wall
          </h2>
          <p className="text-xl text-[#4A4A5C] font-medium italic">
            Proof over promises.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/results"
            className="inline-block px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors shadow-[0_4px_12px_rgba(11,11,15,0.2)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.3)]"
          >
            Browse all results
          </Link>
        </div>
      </div>
    </section>
  );
}

