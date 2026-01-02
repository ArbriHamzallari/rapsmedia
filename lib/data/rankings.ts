import { Ranking } from "../types";
import { artists } from "./artists";

// December 2025 rankings (current month)
export const decemberRankings: Ranking = {
  month: "December",
  year: 2025,
  artists: artists.slice(0, 10).map((artist, index) => ({
    ...artist,
    previousRank: index + 1, // For demo, assume they maintained position
  })),
};

// November 2025 rankings (previous month)
export const novemberRankings: Ranking = {
  month: "November",
  year: 2025,
  artists: [
    { ...artists[1], previousRank: 1 }, // Lyric Flow was #1
    { ...artists[0], previousRank: 2 }, // Kai Nova was #2
    { ...artists[2], previousRank: 3 }, // Beat Wave was #3
    { ...artists[4], previousRank: 4 }, // Flow King was #4
    { ...artists[3], previousRank: 5 }, // Rhyme Master was #5
    { ...artists[7], previousRank: 6 }, // Barz Elite was #6
    { ...artists[5], previousRank: 7 }, // Verse Legend was #7
    { ...artists[11], previousRank: 8 }, // Beat Maker was #8
    { ...artists[8], previousRank: 9 }, // Sound Wave was #9
    { ...artists[9], previousRank: 10 }, // Rhythm Flow was #10
  ],
};

export const allRankings: Ranking[] = [decemberRankings, novemberRankings];

export function getRankingByMonth(month: string, year: number): Ranking | null {
  return allRankings.find((r) => r.month === month && r.year === year) || null;
}

export function getCurrentRanking(): Ranking {
  return decemberRankings;
}

