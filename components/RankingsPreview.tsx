import Link from "next/link";
import Image from "next/image";
import { getCurrentRanking } from "@/lib/data/rankings";

export default function RankingsPreview() {
  const ranking = getCurrentRanking();
  const top5 = ranking.artists.slice(0, 5);

  return (
    <section className="bg-[rgba(255,255,255,0.85)] backdrop-blur-sm rounded-lg p-6 border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0B0B0F]">Power Rankings</h2>
        <Link
          href="/power-rankings"
          className="text-sm font-semibold text-[#8FA0FF] hover:text-[#AEBBFF] transition-colors"
        >
          View Chart →
        </Link>
      </div>
      <div className="mb-4 text-sm text-[#4A4A5C]">
        {ranking.month} {ranking.year} Top Artists
      </div>
      <div className="space-y-4">
        {top5.map((artist, index) => (
          <div key={artist.id} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-8 text-2xl font-bold text-[#8FA0FF]">
              {index + 1}
            </div>
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#0B0B0F]">{artist.name}</h3>
                {artist.verified && (
                  <span className="text-[#8FA0FF]" aria-label="Verified">✓</span>
                )}
              </div>
              <div className="text-xs text-[#4A4A5C]">
                {artist.city} • {artist.genre}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-[#0B0B0F]">
                {artist.rankPoints.toLocaleString()}
              </div>
              <div className="text-xs text-[#4A4A5C]">points</div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/power-rankings"
        className="mt-6 block w-full text-center py-3 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[#8FA0FF] transition-colors"
      >
        View Full Rankings
      </Link>
    </section>
  );
}

