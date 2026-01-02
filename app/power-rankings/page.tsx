"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allRankings } from "@/lib/data/rankings";

export default function PowerRankingsPage() {
  const [selectedMonth, setSelectedMonth] = useState("December");
  const [selectedYear, setSelectedYear] = useState(2025);
  const [activeTab, setActiveTab] = useState<"main" | "rising">("main");

  const currentRanking = allRankings.find(
    (r) => r.month === selectedMonth && r.year === selectedYear
  ) || allRankings[0];

  const mainRankings = currentRanking.artists.slice(0, 10);
  const risingArtists = currentRanking.artists
    .filter((a) => a.movement === "new" || a.movement === "up")
    .slice(0, 10);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0B0B0F] mb-4">Power Rankings</h1>
          <p className="text-gray-600 mb-6">
            The top artists making waves in hip-hop this month.
          </p>

          {/* Month Selector */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {allRankings.map((ranking) => (
              <button
                key={`${ranking.month}-${ranking.year}`}
                onClick={() => {
                  setSelectedMonth(ranking.month);
                  setSelectedYear(ranking.year);
                }}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                  selectedMonth === ranking.month && selectedYear === ranking.year
                    ? "bg-[#AEBBFF] text-[#0B0B0F]"
                    : "bg-[rgba(255,255,255,0.75)] backdrop-blur-sm border border-[rgba(174,187,255,0.3)] text-[#0B0B0F] hover:bg-[rgba(255,255,255,0.9)]"
                }`}
              >
                {ranking.month} {ranking.year}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("main")}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === "main"
                  ? "border-[#AEBBFF] text-[#0B0B0F]"
                  : "border-transparent text-gray-600 hover:text-[#0B0B0F]"
              }`}
            >
              Top 10
            </button>
            <button
              onClick={() => setActiveTab("rising")}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === "rising"
                  ? "border-[#AEBBFF] text-[#0B0B0F]"
                  : "border-transparent text-gray-600 hover:text-[#0B0B0F]"
              }`}
            >
              Rising Artists
            </button>
          </div>
        </div>

        {/* Rankings List */}
        <div className="space-y-4">
          {(activeTab === "main" ? mainRankings : risingArtists).map(
            (artist, index) => (
              <div
                key={artist.id}
                className="flex items-center gap-6 p-6 bg-[rgba(255,255,255,0.85)] backdrop-blur-sm rounded-lg border border-[rgba(174,187,255,0.3)] hover:border-[rgba(174,187,255,0.5)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.2)] transition-all"
              >
                <div className="flex-shrink-0 w-12 text-center">
                  <div className="text-3xl font-bold text-[#AEBBFF]">
                    {activeTab === "main" ? index + 1 : index + 1}
                  </div>
                  {artist.movement === "up" && (
                    <div className="text-green-500 text-sm">↑</div>
                  )}
                  {artist.movement === "down" && (
                    <div className="text-red-500 text-sm">↓</div>
                  )}
                  {artist.movement === "new" && (
                    <div className="text-[#AEBBFF] text-xs font-semibold">NEW</div>
                  )}
                </div>

                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-[#0B0B0F]">
                      {artist.name}
                    </h3>
                    {artist.verified && (
                      <span className="text-[#AEBBFF]" aria-label="Verified">
                        ✓
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {artist.city} • {artist.genre}
                  </div>
                  <div className="text-sm text-gray-500">
                    {artist.monthlyListeners.toLocaleString()} monthly listeners
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-[#0B0B0F] mb-1">
                    {artist.rankPoints.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">points</div>
                  {artist.previousRank && artist.previousRank !== index + 1 && (
                    <div className="text-xs text-gray-400 mt-1">
                      Was #{artist.previousRank}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

