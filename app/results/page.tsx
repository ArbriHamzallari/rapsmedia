"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { results } from "@/lib/mock/results";
import { useState, useMemo } from "react";
import ResultCard from "@/components/ResultCard";

type PromoType = "All" | "Post" | "Reel" | "Story";
type Goal = "All" | "Streams" | "Followers" | "Visibility";
type SortOption = "Newest" | "Highest Delta";

export default function ResultsPage() {
  const [selectedPromoType, setSelectedPromoType] = useState<PromoType>("All");
  const [selectedGoal, setSelectedGoal] = useState<Goal>("All");
  const [sortBy, setSortBy] = useState<SortOption>("Newest");

  const filteredAndSortedResults = useMemo(() => {
    let filtered = results.filter((result) => {
      const matchesPromoType = selectedPromoType === "All" || result.promoType === selectedPromoType;
      const matchesGoal = selectedGoal === "All" || result.goal === selectedGoal;
      return matchesPromoType && matchesGoal;
    });

    // Sort results
    if (sortBy === "Newest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "Highest Delta") {
      filtered.sort((a, b) => {
        const getDelta = (deltaLabel: string) => {
          const match = deltaLabel.match(/(\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getDelta(b.deltaLabel) - getDelta(a.deltaLabel);
      });
    }

    return filtered;
  }, [selectedPromoType, selectedGoal, sortBy]);

  const promoTypes: PromoType[] = ["All", "Post", "Reel", "Story"];
  const goals: Goal[] = ["All", "Streams", "Followers", "Visibility"];
  const sortOptions: SortOption[] = ["Newest", "Highest Delta"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B0F] mb-4">
            Results
          </h1>
          <p className="text-xl text-[#4A4A5C] max-w-2xl mx-auto">
            Real outcomes from real promotions.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm rounded-lg border border-[rgba(174,187,255,0.3)] p-6 shadow-[0_2px_8px_rgba(174,187,255,0.15)]">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Promo Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#0B0B0F] mb-3">Promo Type</label>
              <div className="flex flex-wrap gap-2">
                {promoTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedPromoType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedPromoType === type
                        ? "bg-[#AEBBFF] text-[#0B0B0F] shadow-[0_2px_4px_rgba(174,187,255,0.3)]"
                        : "bg-[rgba(174,187,255,0.2)] text-[#4A4A5C] hover:bg-[rgba(174,187,255,0.3)]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#0B0B0F] mb-3">Goal</label>
              <div className="flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedGoal === goal
                        ? "bg-[#AEBBFF] text-[#0B0B0F] shadow-[0_2px_4px_rgba(174,187,255,0.3)]"
                        : "bg-[rgba(174,187,255,0.2)] text-[#4A4A5C] hover:bg-[rgba(174,187,255,0.3)]"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#0B0B0F] mb-3">Sort</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-2 rounded-lg bg-[rgba(174,187,255,0.2)] text-[#0B0B0F] border border-[rgba(174,187,255,0.3)] focus:outline-none focus:ring-2 focus:ring-[#8FA0FF] focus:ring-offset-2"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#4A4A5C]">
          Showing {filteredAndSortedResults.length} result{filteredAndSortedResults.length !== 1 ? "s" : ""}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAndSortedResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[rgba(174,187,255,0.3)] backdrop-blur-sm rounded-lg border-2 border-[rgba(174,187,255,0.5)] p-12 text-center shadow-[0_4px_16px_rgba(174,187,255,0.2)]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0F] mb-4">
            Get Similar Results
          </h2>
          <p className="text-lg text-[#4A4A5C] mb-8 max-w-2xl mx-auto">
            Ready to grow your music? Choose a promotion package that fits your goals.
          </p>
          <Link
            href="/promote"
            className="inline-block px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors shadow-[0_4px_12px_rgba(11,11,15,0.2)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.3)]"
          >
            View Promotion Packages
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

