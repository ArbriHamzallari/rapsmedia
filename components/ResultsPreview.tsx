import Link from "next/link";
import { results } from "@/lib/mock/results";
import ResultCard from "./ResultCard";

export default function ResultsPreview() {
  // Display top 6 results (most recent)
  const displayedResults = results
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            Real Results from Real Artists
          </h2>
          <p className="text-xl text-[#4A4A5C] max-w-2xl mx-auto">
            See what happens when artists promote with RapsMedia.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>

        {/* Link to Full Results */}
        <div className="text-center">
          <Link
            href="/results"
            className="inline-block text-lg font-semibold text-[#8FA0FF] hover:text-[#AEBBFF] transition-colors"
          >
            View All Results →
          </Link>
        </div>
      </div>
    </section>
  );
}

